# Track Spec: Upgrade QuickBookingForm to Google reCAPTCHA v3

## Context
The current `QuickBookingForm` component uses Google reCAPTCHA v2. To improve user experience by removing the need for manual interaction (clicking "I am not a robot") and to potentially enhance spam detection, we need to upgrade to reCAPTCHA v3. This version runs in the background and returns a score indicating the likelihood of the user being a bot.

## Goal
Replace the existing reCAPTCHA v2 implementation in `QuickBookingForm` with reCAPTCHA v3, ensuring the form submission process remains secure and functional.

## Requirements
- **Frontend:**
    - Remove the visual reCAPTCHA v2 checkbox widget from the `QuickBookingForm`.
    - Integrate the reCAPTCHA v3 script/library.
    - Generate a reCAPTCHA v3 token upon form submission (or interaction) to be sent to the backend.
    - Ensure the token is included in the form data sent to the API.
- **Backend:**
    - Update the form submission API endpoint to accept the reCAPTCHA v3 token.
    - Verify the token with Google's verification API.
    - Implement logic to handle the returned score (e.g., reject submissions with a score below a certain threshold, like 0.5).
- **Configuration:**
    - Update environment variables to support reCAPTCHA v3 keys (Site Key and Secret Key).
    - Ensure the correct keys are loaded in both frontend and backend.

## Proposed Solution
1.  **Environment Setup:** Add `NEXT_PUBLIC_RECAPTCHA_V3_SITE_KEY` and `RECAPTCHA_V3_SECRET_KEY` to `.env` (and `.env.example`).
2.  **Frontend Implementation:**
    -   Use `react-google-recaptcha-v3` or a similar hook-based approach (or direct script injection if preferred to minimize deps) to handle the v3 interaction.
    -   Update `QuickBookingForm` to invoke `executeRecaptcha` on form submit.
3.  **Backend Verification:**
    -   Modify the API route handling the booking form (likely in `src/app/(frontend)/api/form-bookings` or similar based on file structure).
    -   Call `https://www.google.com/recaptcha/api/siteverify` with the secret and token.
    -   Check `success` and `score` in the response.

## Files to Modify
-   `src/components/QuickBookingForm/index.tsx` (Frontend form logic)
-   `src/api/form-bookings.ts` (or relevant API handler for bookings)
-   `.env` / `.env.example`
-   `package.json` (if new dependencies are added)

## Verification Plan
-   **Manual Testing:** Submit the form and verify that no captcha checkbox appears. Check browser network tab to see the token being sent. Verify backend logs show successful token verification and score.
-   **Automated Testing:** Run existing integration tests to ensure no regression. Note that mocking reCAPTCHA for automated tests might be necessary.
