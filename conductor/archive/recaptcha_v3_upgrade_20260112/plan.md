# Track Plan: Upgrade QuickBookingForm to Google reCAPTCHA v3

## Phase 1: Environment & Dependencies [checkpoint: 48ebaf3]
- [x] Task: Update environment variables 2745dea
    -   Add `NEXT_PUBLIC_RECAPTCHA_V3_SITE_KEY` and `RECAPTCHA_V3_SECRET_KEY` to `.env` and `.env.example`.
- [x] Task: Install reCAPTCHA v3 dependency 936515b
    -   Install `react-google-recaptcha-v3` (or verify if `@types/react-google-recaptcha` supports v3 or if a different package is needed). *Self-correction: standard `react-google-recaptcha` is usually v2. `react-google-recaptcha-v3` is often used for v3.*

## Phase 2: Backend Implementation
- [x] Task: Write Tests for Backend Verification 90a4b1b
    -   Create a test case that mocks the Google verification API response (success with high score, success with low score, failure).
- [x] Task: Implement reCAPTCHA v3 verification logic 6cb7bdd
    -   Update the API endpoint that handles `QuickBookingForm` submissions (likely `src/api/form-bookings.ts` or similar).
    -   Replace v2 verification logic with v3 verification (checking `score`).

## Phase 3: Frontend Implementation
- [x] Task: Update QuickBookingForm Component 6665329
    -   Remove the reCAPTCHA v2 component.
    -   Integrate the reCAPTCHA v3 hook/provider.
    -   Update the submission handler to generate a token and send it with the payload.

## Phase 4: Verification & Cleanup
- [x] Task: Manual End-to-End Verification
    -   Submit a form and confirm successful submission.
    -   Verify backend logs for score evaluation.
- [x] Task: Cleanup
    -   Remove unused reCAPTCHA v2 dependencies and environment variables if they are no longer used anywhere else.