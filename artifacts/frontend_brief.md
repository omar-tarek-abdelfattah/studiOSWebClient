# StudiOS Frontend Architecture Brief

**Context for the AI Agent:**
You are building the frontend applications for "StudiOS", a multi-tenant SaaS platform designed for recording studios. The backend (Node.js/Express) is already built and fully functional.

Your task is to build **two completely separate frontend applications** (potentially as a Turborepo or just two separate Next.js apps). 

---

## App 1: The Master SaaS Platform (Landing & Admin)
This application represents the software company itself. It handles selling the software to new studio owners and managing them.

### Key Pages
1. **SaaS Landing Page:**
   - A high-converting marketing page aimed at recording studio owners.
   - Highlights features: Multi-room calendar, Artist CRM, S3 Vault, and Staff Scheduling.
2. **Super Admin Dashboard (Protected):**
   - Fetches data from `GET /system/tenants`.
   - Form to register a new studio (`POST /system/tenants`).
   - Ability to suspend or update tenant subscriptions (`PATCH /system/tenants/:tenantId`).

---

## App 2: The Studio Application (Multi-Tenant App)
This is the whitelabel application that individual studios will use. It dynamically routes data based on the domain (e.g., `acme.studios.com` or custom domains) or by passing the `x-tenant-id` header to the backend.

### Part A: The Client-Facing Storefront (Public)
This is what the *Artist* sees when they visit a specific studio's website.
1. **Interactive Booking Widget:**
   - A step-by-step form where artists pick a room (`GET /api/v1/resource/rooms`), an engineer, and a time slot.
   - Uploads a payment screenshot (Instapay/wallet).
   - Submits to `POST /api/v1/booking/widget`.
2. **Lead Capture / Contact Form:**
   - A sleek inquiry form submitting to `POST /api/v1/crm/lead`.

### Part B: The Studio Dashboard (Protected Admin)
This is what the *Studio Owner & Staff* see when they log into their platform.
1. **Smart Calendar (Booking Engine):**
   - A visual, multi-room grid fetching `GET /api/v1/booking/calendar`.
   - Ability to approve bookings (`PATCH /api/v1/booking/:id/status`).
2. **Artist Vault & CRM:**
   - Displays all clients (`GET /api/v1/crm/clients`).
   - S3-Backed Rough Mix portal to upload files (`POST /api/v1/crm/vault/upload-mock`).
3. **Hardware Tracker:**
   - Manages Microphones and Preamps (`POST /api/v1/resource/equipment`).
4. **Financial Dashboard:**
   - A widget-heavy page displaying revenue metrics from `GET /api/v1/finance/dashboard`.

---

## Technical Directives for the Agent
- **Framework:** Next.js (App Router).
- **Styling:** Tailored, premium UI. The user explicitly requested a "Wow" factor: use rich aesthetics, glassmorphism, modern typography, and smooth micro-animations. **Do not build a generic, flat dashboard.**
- **API Communication:** Ensure the Studio App passes the current hostname or `x-tenant-id` header in all requests to the backend API (`/api/v1/*`).
