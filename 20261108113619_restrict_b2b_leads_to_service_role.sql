/*
# Route B2B quote requests through the server function only

1. Changed Tables
- `b2b_leads`: the public website no longer writes to this table directly.

2. Security
- Removed the policy that allowed anonymous and signed-in visitors to insert rows.
- Revoked INSERT from anon and authenticated.
- Granted INSERT to service_role, which the `b2b-lead` server function uses after validating each request.
- Row level security stays enabled, so visitors cannot read, change, or delete any lead.

3. Notes
- Quote requests are saved by the server function and then sent to the Telegram chat.
*/

DROP POLICY IF EXISTS "public_insert_b2b_leads" ON b2b_leads;
REVOKE INSERT ON b2b_leads FROM anon, authenticated;
GRANT INSERT ON b2b_leads TO service_role;
