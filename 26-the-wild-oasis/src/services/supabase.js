import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://hkcpyelycjtwcvyswohe.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhrY3B5ZWx5Y2p0d2N2eXN3b2hlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIzMjg2NzIsImV4cCI6MjAwNzkwNDY3Mn0.acHoy76mEe5l6qUz_RYMFJ4BQBngcPc5Aovf2TKvUhw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
