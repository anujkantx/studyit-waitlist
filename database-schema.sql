CREATE TABLE IF NOT EXISTS public.waitlist (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  email text UNIQUE NOT NULL,
  name text,
  university text NOT NULL,
  program text,
  semester text,
  wants_to_contribute boolean DEFAULT false,
  campus_ambassador_interest boolean DEFAULT false,
  source text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_content text,
  utm_term text,
  referred_by text,
  referral_code text UNIQUE NOT NULL,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Set up Row Level Security (RLS)
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Allow inserts from anon users (if you plan to use anon key instead of service role key)
CREATE POLICY "Enable insert for anonymous users" ON public.waitlist
    FOR INSERT WITH CHECK (true);

-- Only admins (service role) can view the waitlist
CREATE POLICY "Enable read access for service role only" ON public.waitlist
    FOR SELECT USING (true);
