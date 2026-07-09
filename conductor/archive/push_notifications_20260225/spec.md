# Specification: FCM Push Notifications for Booking Submissions

## Overview
Implement push notifications for Admin/Staff members to receive instant alerts on their devices whenever a new booking is submitted via the website's booking form. This will use Firebase Cloud Messaging (FCM) as the delivery service.

## Functional Requirements
- **FCM Integration:** Set up and configure Firebase Cloud Messaging within the Next.js/Payload project.
- **Admin Subscription Interface:** Create a custom component in the Payload Admin Dashboard (e.g., in the User Profile or a Global Settings page) that allows staff members to "Enable Notifications" on their current browser.
- **Subscription Storage:** Create a `push-subscriptions` (or similar) Payload collection to securely store FCM registration tokens associated with admin users.
- **Trigger Logic:** Modify the `FormBookingsEndpoint` (`src/api/form-bookings.ts`) to trigger a push notification to all subscribed admins immediately after a successful booking and email dispatch.
- **Notification Content:** The notification should display a concise summary: "New Booking Received!", with details like the Tour Name and Customer Name.

## Non-Functional Requirements
- **Security:** Subscription tokens must only be manageable by authenticated admin users.
- **Permissions:** Respect browser permission prompts and handle "Denied" or "Blocked" states gracefully in the UI.

## Acceptance Criteria
- [ ] An "Enable Push Notifications" button is visible to admins in the CMS dashboard.
- [ ] Clicking the button successfully requests permission and stores the device token in Payload.
- [ ] Submitting a booking form successfully triggers a notification on all subscribed devices.
- [ ] Notifications appear even when the browser is in the background (Service Worker requirement).

## Out of Scope
- Push notifications for customers.
- A dashboard for managing or viewing notification history.
- Granular notification settings (e.g., per tour type).
