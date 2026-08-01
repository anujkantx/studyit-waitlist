# Studyit.in - Coming Soon

This is the Next.js pre-launch / coming soon website for Studyit.in.

## Supabase Waitlist Setup

Follow these steps to set up the production waitlist database in Supabase:

### Step 1
Create a new project in your [Supabase Dashboard](https://supabase.com/dashboard/projects).

### Step 2
Open the **SQL Editor** in your Supabase project (from the left sidebar).

### Step 3
Copy the contents of `supabase/waitlist.sql` from this repository and run it in the SQL Editor to create the table, triggers, and Row Level Security.

### Step 4
Go to **Project Settings -> API**. Copy your **Project URL** (this goes into `NEXT_PUBLIC_SUPABASE_URL`).

### Step 5
On the same page, under Project API Keys, copy the **`service_role` (secret)** key (this goes into `SUPABASE_SERVICE_ROLE_KEY`). *Never share this key or expose it to the browser.*

### Step 6
Create a file named `.env.local` in the root of the project.

### Step 7
Add the following environment variables to `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL="your-project-url"
SUPABASE_SERVICE_ROLE_KEY="your-service-role-key"
NEXT_PUBLIC_SITE_URL="http://localhost:3002"
```

### Step 8
Run the development server locally:
```bash
npm run dev
```

### Step 9
Submit a test signup on `http://localhost:3002`.

### Step 10
Open the **Table Editor** in your Supabase Dashboard, select the `waitlist` table, and verify that your test record was inserted correctly.

### Step 11
Add the exact same environment variables in your Vercel project settings (**Vercel -> Project -> Settings -> Environment Variables**).

### Step 12
Deploy your project to Vercel. Your waitlist is now live and securely saving data!
