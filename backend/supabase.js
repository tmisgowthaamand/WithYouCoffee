require('dotenv').config()
const { createClient } = require('@supabase/supabase-js')

// Supabase configuration from environment variables
const supabaseUrl = process.env.SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

let supabase = null

if (!supabaseUrl || !supabaseServiceKey) {
  console.warn('Supabase URL or service role key is missing. Backend will run without Supabase. Check backend/.env.')
} else {
  // Create Supabase client with service role key for backend operations
  supabase = createClient(supabaseUrl, supabaseServiceKey)
}

module.exports = supabase
