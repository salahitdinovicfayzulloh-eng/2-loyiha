/*
# Create b2b_leads table for corporate quote requests

1. New Tables
- `b2b_leads`
  - `id` (uuid, primary key, auto-generated)
  - `full_name` (text, required, up to 120 characters)
  - `company` (text, required, up to 160 characters)
  - `phone` (text, required, up to 30 characters)
  - `service` (text, required, one of the B2B service names offered on the site)
  - `created_at` (timestamptz, defaults to now)

2. Security
- Row level security is enabled on `b2b_leads`.
- The public website (anon key) may only INSERT new quote requests. It cannot read, edit, or delete existing requests, so visitors cannot see each other's data.
- No SELECT grant is given to anon or authenticated; staff review leads through the database dashboard.

3. Notes
- The site has no sign-in, so the insert policy is intentionally open to anon and authenticated roles. Length and value checks limit abuse of the form.
*/

CREATE TABLE IF NOT EXISTS b2b_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL CHECK (char_length(full_name) BETWEEN 1 AND 120),
  company text NOT NULL CHECK (char_length(company) BETWEEN 1 AND 160),
  phone text NOT NULL CHECK (char_length(phone) BETWEEN 1 AND 30),
  service text NOT NULL CHECK (service IN ('cloud', 'fiber', 'pbx', 'security')),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE b2b_leads ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON b2b_leads TO anon, authenticated;

DROP POLICY IF EXISTS "public_insert_b2b_leads" ON b2b_leads;
CREATE POLICY "public_insert_b2b_leads" ON b2b_leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
