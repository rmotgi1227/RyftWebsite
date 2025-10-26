-- Create waitlist table
CREATE TABLE waitlist (
  id BIGSERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX idx_waitlist_email ON waitlist(email);

-- Create index on created_at for sorting
CREATE INDEX idx_waitlist_created_at ON waitlist(created_at);

-- Enable Row Level Security (optional)
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow inserts (for waitlist signups)
CREATE POLICY "Allow waitlist signups" ON waitlist
  FOR INSERT WITH CHECK (true);

-- Create a policy to allow select for authenticated users (for admin access)
CREATE POLICY "Allow select for authenticated users" ON waitlist
  FOR SELECT USING (auth.role() = 'authenticated');