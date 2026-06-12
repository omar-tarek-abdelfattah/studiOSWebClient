# StudiOS API Documentation

This document outlines the REST API endpoints available in the StudiOS Node.js backend. It is split into two distinct parts: the **Master SaaS System** and the **Tenant Studio App**.

---

## Part 1: Master SaaS System
Base Route: `/system`
These endpoints run on the `master` database connection. They manage global SaaS operations.

### Authentication
#### `POST /system/login`
- **Body:** `{ "email": "admin@studios.com", "password": "pass" }`
- **Response:** `{ "access_token": "...", "refresh_token": "..." }`

### Tenant Management
*All tenant management routes require a valid `Bearer Token` from the Super Admin login.*

#### `POST /system/tenants`
- **Description:** Registers a new studio tenant.
- **Body:**
  ```json
  {
    "domain": "acme.studios.com",
    "name": "Acme Records",
    "databaseUrl": "mongodb+srv://...", // Optional custom cluster
    "subscriptionType": "premium",
    "subscribedUntil": "2027-01-01T00:00:00Z"
  }
  ```

#### `GET /system/tenants`
- **Description:** Retrieves all registered tenants.

#### `PATCH /system/tenants/:tenantId`
- **Description:** Updates tenant status (e.g., disabling an account or extending a subscription).
- **Body:** `{ "isActive": false, "subscriptionType": "basic" }`

---

## Part 2: Tenant Studio App
Base Route: `/api/v1`
**CRITICAL SECURITY HEADER:** All requests to these endpoints MUST either:
1. Come from a matching domain (e.g. `acme.studios.com`).
2. Or include the `x-tenant-id` header (e.g., `x-tenant-id: acme`).

*Protected routes also require an `Authorization: Bearer <token>` header.*

### Authentication (`/api/v1/auth`)
- **`POST /signup`**: `{ firstName, lastName, email, password, phoneNumber }`
- **`POST /login`**: `{ email, password }`
- **`POST /google`**: `{ idToken }`
- **`POST /logout`**: (Protected) Revokes current token.

### Resource Management (`/api/v1/resource`)
*(Protected)*
- **`POST /rooms`**: `{ name, description, capacity, baseHourlyRate, isActive }`
- **`GET /rooms`**
- **`POST /equipment`**: `{ name, type: "Microphone" | "Preamp", condition, isAvailable }`
- **`GET /equipment`**

### Staff Management (`/api/v1/staff`)
*(Protected)*
- **`POST /`**: `{ userId, role: "engineer" | "manager", hourlyRate, availabilitySchedule }`
- **`GET /`**

### Booking Engine (`/api/v1/booking`)
- **`POST /widget`**: (Public) The interactive booking form submission.
  - **Body:** `{ clientId, roomId, staffId?, equipmentIds?, startTime, endTime, totalPrice, paymentScreenshotUrl, notes? }`
- **`GET /calendar`**: (Protected) Fetch all bookings for the visual grid.
- **`PATCH /:bookingId/status`**: (Protected) 
  - **Body:** `{ status: "Pending_Payment" | "Confirmed" | "Completed" | "Cancelled" }`

### CRM & Artist Vault (`/api/v1/crm`)
- **`POST /lead`**: (Public) Contact form capture.
  - **Body:** `{ name, email, phone, genrePreferences, notes }`
- **`GET /clients`**: (Protected) Retrieve the CRM directory.
- **`POST /vault/upload-mock`**: (Protected) Upload a rough mix project file.
  - **Body:** `{ clientId, bookingId?, fileName, fileType, s3Key? }`

### Financials (`/api/v1/finance`)
- **`GET /dashboard`**: (Protected) Returns `{ totalRevenue, pendingBalances, upcomingBookings }`.
