-- Update contact_requests table to use integer ID instead of varchar
-- Run this SQL in your Supabase SQL Editor

-- First, drop the existing table (this will delete existing data)
DROP TABLE IF EXISTS contact_requests;

-- Create new table with integer ID
CREATE TABLE contact_requests (
    id SERIAL PRIMARY KEY,  -- Auto-incrementing integer ID
    inquiry_type VARCHAR(50) DEFAULT 'general',
    name VARCHAR(255) NOT NULL,
    mobile VARCHAR(20) NOT NULL,
    company VARCHAR(255),
    email VARCHAR(255) NOT NULL,
    message TEXT,
    status VARCHAR(20) DEFAULT 'new',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_contact_requests_created_at ON contact_requests(created_at DESC);
CREATE INDEX idx_contact_requests_status ON contact_requests(status);
CREATE INDEX idx_contact_requests_email ON contact_requests(email);

-- Enable Row Level Security
ALTER TABLE contact_requests ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations
CREATE POLICY "Allow all operations on contact_requests" ON contact_requests
FOR ALL USING (true);

-- Create function to automatically update updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_contact_requests_updated_at 
    BEFORE UPDATE ON contact_requests 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();
