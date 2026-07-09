


/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Payload, PayloadRequest, File } from 'payload';
import { mediaSeedConfig } from './config';
import fs from 'fs';
import path from 'path';

async function fetchFileFromLocal(filePath: string, customName?: string): Promise<File | null> {
  try {
    const absPath = path.resolve(process.cwd(), filePath);
    if (!fs.existsSync(absPath)) {
      console.warn(`File not found: ${absPath}`);
      return null;
    }
    const data = fs.readFileSync(absPath);
    const filename = customName || path.basename(absPath);
    const extension = path.extname(absPath).slice(1).toLowerCase();
    const mimetype = `image/${extension.replace('jpg', 'jpeg')}`;

    console.log(`— Read local file: ${filename} (${data.length} bytes, ${mimetype})`);

    return {
      name: filename,
      data,
      mimetype,
      size: data.length,
    };
  } catch (error) {
    console.error(`Error fetching local file ${filePath}:`, error);
    return null;
  }
}

async function fetchFileByURL(url: string): Promise<File | null> {
  try {
    const res = await fetch(url, {
      credentials: 'include',
      method: 'GET',
    });

    if (!res.ok) {
      console.warn(`Failed to fetch file from ${url}, status: ${res.status}`);
      return null;
    }

    const arrayBuffer = await res.arrayBuffer();
    const data = Buffer.from(arrayBuffer);
    const filename = url.split('/').pop() || `file-${Date.now()}`;
    const extension = filename.split('.').pop()?.toLowerCase() || 'webp';
    const mimetype = `image/${extension.replace('jpg', 'jpeg')}`;

    console.log(`— Fetched remote file: ${filename} (${data.length} bytes, ${mimetype})`);

    return {
      name: filename,
      data,
      mimetype,
      size: data.length,
    };
  } catch (error) {
    console.error(`Error fetching remote file ${url}:`, error);
    return null;
  }
}

function formatAltText(filename: string): string {
  const nameWithoutExtension = path.parse(filename).name;
  return nameWithoutExtension
    .split(/[-_]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function isRetryableError(error: unknown): boolean {
  const message = error instanceof Error ? error.message : String(error);
  const code = typeof error === 'object' && error !== null && 'code' in error ? String((error as { code?: string }).code) : '';
  const haystack = `${message} ${code}`.toLowerCase();

  return [
    'ehostunreach',
    'econnreset',
    'econnrefused',
    'etimedout',
    'enotfound',
    'socket hang up',
    'temporarily unavailable',
    'connection terminated unexpectedly',
    'timeout',
  ].some(token => haystack.includes(token));
}

export async function createMediaWithRetry({
  payload,
  req,
  data,
  file,
  logger,
  maxAttempts = 4,
  baseDelayMs = 1000,
}: {
  payload: Payload;
  req: PayloadRequest;
  data: Record<string, any>;
  file: File;
  logger?: { warn?: (message: string) => void; error?: (message: string) => void };
  maxAttempts?: number;
  baseDelayMs?: number;
}): Promise<any> {
  let lastError: unknown;

  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try {
      return await payload.create({
        collection: 'media',
        data,
        file,
        req,
      } as any);
    } catch (error) {
      lastError = error;
      const message = error instanceof Error ? error.message : String(error);
      const retryable = isRetryableError(error);

      if (!retryable || attempt === maxAttempts) {
        throw error;
      }

      const delayMs = baseDelayMs * attempt;
      logger?.warn?.(`Transient media create failure (attempt ${attempt}/${maxAttempts}): ${message}. Retrying in ${delayMs}ms...`);
      await delay(delayMs);
    }
  }

  throw lastError;
}

export async function fetchImagesFromDirectory(dirPath: string): Promise<File[]> {
  const absDirPath = path.resolve(process.cwd(), dirPath);
  if (!fs.existsSync(absDirPath)) {
    console.warn(`Directory not found: ${absDirPath}`);
    return [];
  }

  const files = fs.readdirSync(absDirPath);
  const imageFiles = files.filter(file => /\.(webp|jpg|jpeg|png)$/i.test(file));
  console.log(`— Found ${imageFiles.length} images in ${dirPath}`);

  const imageBuffers: File[] = [];
  for (const file of imageFiles) {
    const buffer = await fetchFileFromLocal(path.join(dirPath, file));
    if (buffer) {
      imageBuffers.push(buffer);
    }
  }

  return imageBuffers;
}

export const seedMedia = async ({
  payload,
  req,
}: {
  payload: Payload
  req: PayloadRequest
}) => {
  payload.logger.info(`— Seeding media...`);

  const results: Record<string, any> = {};
  const mediaMap: Record<string, any> = {};

  const addDocToMap = (doc: any) => {
    if (doc.filename) {
      mediaMap[doc.filename] = doc.id;
      payload.logger.info(`  - Mapped: ${doc.filename} -> ${doc.id}`);
    }
  };

  // Seed configured media
  for (const config of mediaSeedConfig) {
    let fileBuffer: File | null = null;
    if (config.filePath) {
      fileBuffer = await fetchFileFromLocal(config.filePath, config.customName);
    } else if (config.url) {
      fileBuffer = await fetchFileByURL(config.url);
    }

    if (fileBuffer) {
      try {
        payload.logger.info(`— Creating media document for ${config.key} (${fileBuffer.name})...`);
        const doc = await createMediaWithRetry({
          payload,
          req,
          data: config.data as Record<string, any>,
          file: fileBuffer,
          logger: payload.logger,
        });
        results[`${config.key}Doc`] = doc;
        addDocToMap(doc);
        payload.logger.info(`  ✔ Successfully created media for ${config.key}`);
      } catch (error) {
        payload.logger.error(`Failed to create media for ${config.key}: ${error instanceof Error ? error.message : String(error)}`);
      }
    }
  }

  // SEED BULK DIRECTORIES
  const directoryConfigs = [
    { path: 'public/images/about' },
    { path: 'public/images/site' },
    { path: 'public/images/gallery' },
    { path: 'public/images/slides' },
    { path: 'public/images/team' },
    { path: 'public/images/hotels' },
    { path: 'public/images/destinations' },

    { path: 'public/images/ultimate-adventures/ladakh-himalayan-adventure' },
    { path: 'public/images/ultimate-adventures/ladakh-himalayan-grand-loop' },

    { path: 'public/images/bike-tours/leh-ladakh-adventure' },
    { path: 'public/images/bike-tours/ladakh-srinagar-with-umlingla' },
    { path: 'public/images/bike-tours/ladakh-with-umlingla' },
    { path: 'public/images/bike-tours/leh-ladakh-with-turtuk' },
    { path: 'public/images/bike-tours/leh-zanskar-leh' },
    { path: 'public/images/bike-tours/manali-leh-srinagar' },
    { path: 'public/images/bike-tours/manali-leh-with-umlingla' },
    { path: 'public/images/bike-tours/srinagar-leh-manali' },


    { path: 'public/images/holiday-packages/all-ladakh-tour' },
    { path: 'public/images/holiday-packages/amazing-ladakh-tour' },
    { path: 'public/images/holiday-packages/ladakh-tour-with-hanle' },
    { path: 'public/images/holiday-packages/ladakh-zanskar-valley' },

  ];

  const galleryImageDocsArray: any[] = [];
  const homeSliderImageDocs: any[] = [];

  for (const dirConfig of directoryConfigs) {
    const buffers = await fetchImagesFromDirectory(dirConfig.path);
    payload.logger.info(`— Processing ${buffers.length} images from ${dirConfig.path}`);

    for (const fileBuffer of buffers) {
      try {
        payload.logger.info(`  - Creating media for ${fileBuffer.name}...`);
        const doc = await createMediaWithRetry({
          payload,
          req,
          data: {
            alt: formatAltText(fileBuffer.name),
            creditText: 'Ladakh Moto',
          },
          file: fileBuffer,
          logger: payload.logger,
        });

        addDocToMap(doc);

        if (dirConfig.path === 'public/images/gallery') galleryImageDocsArray.push(doc);
        if (dirConfig.path === 'public/images/slides') homeSliderImageDocs.push(doc);
      } catch (error) {
        payload.logger.error(`Failed to create media for file ${fileBuffer.name} in ${dirConfig.path}: ${error instanceof Error ? error.message : String(error)}`);
      }
    }
  }



  const galleryBlock = {
    blockType: 'gallery' as const,
    images: galleryImageDocsArray.map(image => ({ image: image })),
  };

  const fallbackImageId = results.imageHomeDoc?.id || results.image1Doc?.id;
  const mediaMapProxy = new Proxy(mediaMap, {
    get(target, prop) {
      if (typeof prop === 'string') {
        const val = target[prop];
        if (val === undefined) {
          return fallbackImageId;
        }
        return val;
      }
      return Reflect.get(target, prop);
    }
  });

  return {
    ...results,
    mediaMap: mediaMapProxy,
    galleryImageDocs: galleryBlock,
    image1Doc: results.image1Doc,
    image2Doc: results.image2Doc,
    image3Doc: results.image3Doc,
    imageHomeDoc: results.imageHomeDoc,
    gearsDoc: results.gearsDoc,
  };
}
