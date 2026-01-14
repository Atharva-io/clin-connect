# ClinConnect: Clinical Pilot Bridge 🚀

ClinConnect is a seamless web platform that connects **HealthTech Startups** with **Clinical Experts** for rapid validation, pilot studies, and regulatory guidance. It empowers startups to find the right partners to test their innovations in real-world clinical settings.

## 🌟 Features

*   **Interactive Dashboards**: Tailored views for Startups (Pipeline, Resources) and Mentors (Incoming Requests, Impact Stats).
*   **Expert Discovery**: Explore directory of verified clinical experts with filters for Specialty and Price.
*   **Smart Matching**: Recommendations based on domain (e.g., Cardiology, Oncology).
*   **Request Management**: Simple flow to send, accept, and decline connection requests.
*   **Mock Payments**: Integrated Stripe demo for "Pay As You Go" and Subscription models.
*   **Mock Chat**: Instant messaging simulation for accepted connections.

## 🛠️ Tech Stack

*   **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components**: [Shadcn/UI](https://ui.shadcn.com/)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Auth (Mock)**: Custom Demo Context & Clerk Integration (Ready)
*   **Payments (Mock)**: Stripe Integration (Ready)

## 🚀 Getting Started

This is a **Frontend-Only Demo Version**. It does not require a database or backend server to run.

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/clin-connect.git
cd clin-connect
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env` file in the root directory. You can use fake values for the demo to run locally, but for Full Auth, use your Clerk keys.

```env
# Required for Build/Start
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_... 
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Optional (Mocked in Demo)
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🧪 Demo Credentials

You can use the built-in "Sign In" buttons to auto-fill these credentials in the mock auth provider.

| Role | Username | Password |
| :--- | :--- | :--- |
| **Startup** | `FM` | `FM` |
| **Mentor** | `AS` | `AS` |

## 📦 Deployment

This app is optimized for deployment on Vercel.

1.  Push your code to GitHub.
2.  Import the repository in Vercel.
3.  Add the Environment Variables from your `.env`.
4.  Deploy! 🚀

---
*Built for the GenAI Exchange Hackathon 2025*
