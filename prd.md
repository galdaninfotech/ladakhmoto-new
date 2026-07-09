***

# Product Requirements Document (PRD)  
**Product:** Dispatch – Newsletter Delivery App  
**Owner:** TBD (Product)  
**Version:** 1.0  
**Last Updated:** 2026-01-12[1]

***

## 1. Overview

Dispatch is a **Next.js (TypeScript)** web app with a **Payload CMS** backend focused solely on creating, managing, and delivering newsletters.[1]
The product enables admins to create newsletters with a title, description, PDF upload, and send them to specific clients, client groups/categories, or all clients, while end users can read or download the PDF.[1]

***

## 2. Problem & Goals

**Problem**

Admins managing newsletters across multiple tools (email clients, file shares, ad-hoc lists) face inconsistent delivery, poor tracking, and scattered content.[1]

**Goals**

- Provide a single place to create, manage, and send newsletters from one interface (admin + frontend).[1]
- Ensure every newsletter can be read online and downloaded as PDF by end users with minimal friction.[1]

***

## 3. Target Users & Use Cases

**Primary Users**

- Admins/content managers who create newsletters and manage client lists/groups.[1]
- End users/clients who receive and read newsletters via the web app.[1]

**Key Use Cases**

- Admin creates a newsletter with title, description, and an uploaded PDF, then sends it to a selected client group.[1]
- Admin sends a newsletter to a single client or to all clients in the system.[1]
- End user opens the app, views the latest newsletter, reads it online, and optionally downloads the PDF.[1]

***

## 4. Scope (v1)

**In Scope (MVP)**

- Tech stack:
  - Frontend: Next.js with TypeScript (latest stable version at time of implementation).[1]
  - Backend/CMS: Payload (latest stable version at time of implementation).[1]
- Admin capabilities:
  - Authentication for admin access.  
  - Create/edit/delete newsletters with fields:
    - Title (text).  
    - Description (rich text or long text).  
    - PDF file upload (single file).  
  - Manage clients:
    - Create/edit basic client records (name, email, status).  
    - Assign clients to one or more groups/categories.  
  - Sending newsletters:
    - Send to a single client.  
    - Send to a group/category of clients.  
    - Send to all clients.  
- End user capabilities (frontend):
  - View list of newsletters available to them (or global list if no per-user restriction).  
  - View newsletter detail page with title, description, and embedded PDF or link.  
  - Download the PDF version of the newsletter.  

**Out of Scope (v1, future candidates)**

- Newsletter content editing in HTML email format with templates.  
- Detailed analytics (open rate, click-throughs).  
- Advanced scheduling or drip sequences.  
- Multi-tenant support.  

[1]

***

## 5. User Stories & Acceptance Criteria

### 5.1 Admin – Manage Newsletters

- As an admin, I want to create a newsletter with a title, description, and PDF so that I can provide a consistent, downloadable format to clients.[1]

**Acceptance Criteria**

- Given I am logged in as an admin, when I go to the “Newsletters” section and click “Create Newsletter”, I should see fields for title, description, and a PDF upload.[1]
- When I fill in title and description, upload a valid PDF, and click Save, a new newsletter record is created and visible in the newsletters list.[1]
- If the PDF is missing or not a valid file type, I should see a validation error and the newsletter should not be saved.[1]

### 5.2 Admin – Manage Clients & Groups

- As an admin, I want to manage a list of clients and assign them to groups so I can target newsletters appropriately.[1]

**Acceptance Criteria**

- Given I am on the “Clients” section, I can create a client with at least name and email, and optionally assign them to existing groups/categories.[1]
- Given a client belongs to one or more groups, I can see those groups listed on the client detail.[1]
- I can create, rename, and delete groups/categories (with appropriate guard rails for groups in use).[1]

### 5.3 Admin – Send Newsletter

- As an admin, I want to send a newsletter to a single client, a group of clients, or all clients so I can control who receives it.[1]

**Acceptance Criteria**

- Given a newsletter exists, when I click “Send” I should be able to choose:
  - Single client (search/select).  
  - One or more groups.  
  - All clients.  
[1]
- When I confirm sending, the system should:
  - Trigger email delivery (or mark as “sent” with target list, depending on implementation);  
  - Log the send action with timestamp and target scope.  
[1]
- If there are no clients or groups, the system should prevent sending and show a clear message.[1]

### 5.4 End User – View & Download Newsletter

- As an end user, I want to view and download newsletters so I can read them online or offline.[1]

**Acceptance Criteria**

- Given newsletters exist, when I open the main newsletter page, I should see a list of available newsletters (title, short snippet of description, and publish/sent date).[1]
- When I click on a newsletter, I should see:
  - Title.  
  - Full description.  
  - A clear “Read PDF” (view in browser) and “Download PDF” action.  
[1]
- Clicking “Download PDF” should download the exact PDF uploaded by the admin without corruption.[1]

***

## 6. Functional Requirements (Next.js + Payload)

**Backend (Payload)**

- Collections:
  - `Newsletters`:
    - Fields: title (text, required), description (rich text/long text, required), pdfFile (upload, required), createdAt, updatedAt, optional publish/sent status.  
  - `Clients`:
    - Fields: name, email (required, unique), groups (relation to `Groups`), status (active/inactive).  
  - `Groups`:
    - Fields: name (required, unique), description (optional).  
[1]
- Admin UI:
  - Use Payload’s built-in admin panel for managing Newsletters, Clients, and Groups.[1]
- Sending:
  - Provide an action (custom Payload hook/endpoints) to initiate newsletter sending to selected targets.[1]

**Frontend (Next.js + TypeScript)**

- Routing (App Router):
  - `/` → redirects to `/newsletters`.  
  - `/newsletters` → list of newsletters.  
  - `/newsletters/[id]` → newsletter detail, with embedded PDF viewer or link and download button.  
[1]
- Data fetching:
  - Use server components to fetch newsletter lists and detail data from Payload REST/GraphQL endpoints with TypeScript types aligned to Payload schemas.[1]
- PDF handling:
  - Store PDFs via Payload’s upload mechanism and expose a secure URL; frontend uses this URL to view/download.[1]

***

## 7. Non-Functional Requirements

- Performance:
  - Newsletter list page should load within 2 seconds under normal load for up to 50 newsletters.[1]
- Security:
  - Admin routes protected via authentication (e.g., Payload admin + any custom admin frontend).  
  - PDF URLs should not expose secrets; access control rules defined in Payload for any private content.  
[1]
- Reliability:
  - If the Payload API is unavailable, the frontend should show a user-friendly error state instead of a blank screen.[1]
- Accessibility:
  - All primary flows (list, detail, download) keyboard accessible; PDFs should have accessible labels where embedded.[1]

***

## 8. UX & UI Notes

- Admin:
  - Use Payload’s default admin UI for initial version; minimal custom styling.[1]
- End user frontend:
  - Simple layout with:
    - List view: card or list layout with clear “View” actions.  
    - Detail view: readable typography for description and obvious PDF actions (buttons/links).  
[1]
- States:
  - Show loading skeletons/placeholders while fetching data.  
  - Show empty states when no newsletters are available.  
[1]

***

## 9. Analytics & Logging

- Log:
  - Newsletter creation date and last sent timestamp.  
  - Number of recipients per send action (stored as metadata, not necessarily full analytics).  
[1]
- Optional (if needed later):
  - Simple visit count per newsletter detail page.[1]

***

## 10. Release Criteria (v1)

- Admin can:
  - Create, edit, delete newsletters with PDF.  
  - Manage clients and groups.  
  - Send newsletters to single client, group, or all clients.  
[1]
- End users can:
  - View newsletters list.  
  - Open a newsletter detail page.  
  - Download the PDF successfully.  
[1]
- No critical bugs in creation/sending/downloading flows.  
- Environment configuration:
  - Next.js and Payload running with appropriate `.env` configuration for database, storage, and any email integration used for sending.  
[1]

***
