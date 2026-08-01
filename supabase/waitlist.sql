-- Waitlist Schema for Studyit.in
-- 
-- Run this directly in the Supabase SQL Editor.
-- This sets up the waitlist table, updated_at trigger, and Row Level Security (RLS).

-- 1. Create the table
create table public.waitlist (
    id uuid primary key default gen_random_uuid(),

    email text not null unique,
    name text,
    university text not null,
    program text,
    semester text,

    wants_to_contribute boolean not null default false,
    campus_ambassador_interest boolean not null default false,

    source text,
    utm_source text,
    utm_medium text,
    utm_campaign text,
    utm_content text,
    utm_term text,

    referral_code text unique,
    referred_by text,

    status text not null default 'WAITING',

    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

-- 2. Create updated_at trigger function
create or replace function public.handle_updated_at()
returns trigger as $$
begin
    new.updated_at = now();
    return new;
end;
$$ language plpgsql;

-- 3. Attach trigger to table
create trigger set_waitlist_updated_at
    before update on public.waitlist
    for each row
    execute function public.handle_updated_at();

-- 4. Create helpful indexes (email is already uniquely indexed)
create index if not exists idx_waitlist_created_at on public.waitlist (created_at);
create index if not exists idx_waitlist_university on public.waitlist (university);
create index if not exists idx_waitlist_status on public.waitlist (status);
create index if not exists idx_waitlist_referral_code on public.waitlist (referral_code);

-- 5. Enable Row Level Security (RLS)
alter table public.waitlist enable row level security;

-- 6. No policies are added because we are ONLY allowing access via the 
-- Server using the Service Role Key. By default, with RLS enabled and no policies,
-- anonymous and authenticated users have no access to select, insert, update, or delete.
