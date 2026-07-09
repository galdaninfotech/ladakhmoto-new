# Plan: FCM Push Notifications for Booking Submissions

## Phase 1: Infrastructure & Schema Setup
- [x] Task: Create `Subscriptions` Payload Collection to store FCM registration tokens. [84845]
- [x] Task: Configure Firebase Project and add `serviceAccountKey.json` (or env variables) for server-side SDK. [84977]
- [x] Task: Add necessary environment variables to `.env` (`FIREBASE_PROJECT_ID`, `FIREBASE_CLIENT_EMAIL`, `FIREBASE_PRIVATE_KEY`, etc.). [85061]
- [x] Task: Conductor - User Manual Verification 'Infrastructure & Schema Setup' (Protocol in workflow.md) [checkpoint: Phase 1]

## Phase 2: Client-Side Subscription Implementation
- [x] Task: Implement `public/firebase-messaging-sw.js` to handle background notifications. [87320]
- [x] Task: Create a React component/hook to handle browser permission requests and token retrieval using `firebase/messaging`. [87584]
- [x] Task: Create a custom UI component in the Payload Admin Dashboard (e.g., via `BeforeDashboard`) to allow admins to subscribe. [87700]
- [x] Task: Write failing integration tests for the subscription storage API. [87859]
- [x] Task: Implement the API logic to save and validate tokens in the `Subscriptions` collection. [87859]
- [x] Task: Conductor - User Manual Verification 'Client-Side Subscription Implementation' (Protocol in workflow.md) [checkpoint: Phase 2]

## Phase 3: Backend Notification Trigger
- [x] Task: Create a utility function `sendFCMNotification` using `firebase-admin` to send messages to stored tokens. [89400]
- [x] Task: Write failing unit tests for the notification trigger logic in `FormBookingsEndpoint`. [89450]
- [x] Task: Update `src/api/form-bookings.ts` to fetch active subscriptions and trigger notifications upon successful form submission. [89549]
- [x] Task: Conductor - User Manual Verification 'Backend Notification Trigger' (Protocol in workflow.md) [checkpoint: Phase 3]

## Phase 4: Final Integration & Mobile Verification
- [x] Task: Verify end-to-end flow: Booking Submission -> FCM -> Service Worker -> System Notification. [Verified in console]
- [x] Task: Test notification delivery on mobile browsers (Android/iOS if supported).
- [x] Task: Conductor - User Manual Verification 'Final Integration & Mobile Verification' (Protocol in workflow.md) [checkpoint: Phase 4]
