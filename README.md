# ClinConnect - Healthcare Innovation Network

ClinConnect is a premium web application designed to bridge the gap between healthcare startups and clinical experts. It facilitates discovery, direct connection request, and professional matching to accelerate medical innovation.

## 🚀 Features

-   **Expert Discovery**: Searchable directory of verified clinicians and domain experts with filters for specialty, price, and location.
-   **Role-Based Access**: Specialized dashboards for **Founders** (manage requests) and **Experts** (manage inquiries & profile).
-   **AI Copilot**: Integrated OpenAI assistant to help founders draft professional, high-conversion intro messages.
-   **Request System**: Structured "Request Introduction" flow with subject, message, and status tracking (Pending -> Accepted).
-   **Payments**: Subscription tiers (Explorer, Growth, Institution) integrated with **Stripe Checkout**.
-   **Admin Panel**: Dedicated admin route to verify expert profiles.
-   **Authentication**: Secure sign-up/sign-in via **Clerk**.

## 🛠 Tech Stack

-   **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
-   **Database**: [PostgreSQL](https://www.postgresql.org/) via [Prisma ORM](https://www.prisma.io/)
-   **Auth**: [Clerk](https://clerk.com/)
-   **Payments**: [Stripe](https://stripe.com/)
-   **AI**: [OpenAI API](https://openai.com/)
-   **UI Components**: [Radix UI](https://www.radix-ui.com/) + [Lucide Icons](https://lucide.dev/)

---

## 🏁 Getting Started

### 1. Prerequisites
-   Node.js 18+ installed.
-   PostgreSQL database running (local or cloud like Neon/Supabase).
-   Accounts/Keys for Clerk, Stripe (optional), and OpenAI (optional).

### 2. Installation

```bash
# Navigate to project 
cd clin-connect

# Install dependencies
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory (copy from `.env.example`):

```bash
cp .env.example .env
```

Fill in your keys:

```env
# Database (Example: local postgres)
DATABASE_URL="postgresql://user:password@localhost:5432/clinconnect?schema=public"

# Clerk Auth (Get from dashboard.clerk.com)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# AI Copilot (Optional - Mock data used if missing)
OPENAI_API_KEY=sk-...

# Payments (Optional - needed for Upgrade button)
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
```

### 4. Database Setup

Run the migrations to create your database tables:

```bash
npx prisma migrate dev --name init
```

Seed the database with initial expert and founder data:

```bash
npx tsx prisma/seed.ts
# OR if you configured the seed script in package.json:
npx prisma db seed
```

### 5. Run the App

Start the development server:

```bash
npm run dev
```

Visit **http://localhost:3000** to see the app.

---

## 📂 Project Structure

```
/app
  /(auth)      # Sign-in/Sign-up pages
  /(dashboard) # Protected user dashboard
  /(public)    # Public pages (Explore, Pricing, Profiles)
  /admin       # Admin verification panel
  /api         # Next.js API Routes (Checkout, AI, Requests)
  layout.tsx   # Root layout with Navbar & Providers
  page.tsx     # Landing page

/components
  /features    # Complex feature components (RequestModal, ExpertCard)
  /ui          # Reusable UI atoms (Button, Card, Input)

/prisma
  schema.prisma # Database model definition
  seed.ts       # Initial data script
```

## ✨ How to Verify Features

1.  **AI Copilot**: Go to an expert profile, click **Request Intro**. In the modal, write a short prompt or click "Help me write with AI".
2.  **Admin Verification**:
    *   Go to `/admin`.
    *   You will see unverified experts from the seed data.
    *   Click **Verify**.
    *   Go to `/explore` or their profile to see the blue checkmark.
3.  **Payments**:
    *   Go to `/pricing`.
    *   Click **Upgrade**. It should redirect to a Stripe Checkout test page.
