import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://fkcbldetobxaqayutais.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZrY2JsZGV0b2J4YXFheXV0YWlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQxNzg0MTIsImV4cCI6MjA2OTc1NDQxMn0.5hn0SdK4eAdYvgFoWN4421_4U5CK1jb86XZlf4ppJ48"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)