import { Pool } from "pg";

/* const pool = new Pool(
    {
        host: "localhost",
        port: "5432",
        user: "postgres",
        password: "test",
        database: "quizquestdb"
    }
); */

const pool = new Pool(
    {
        database: PGDATABASE,
        host: POSTGRES_URL,
        
        user: PGUSER,
        password: PGPASSWORD,
        port: 5432
    }
);

/* const pool = new Pool({
  connectionString: process.env.DATABASE_URL
}); */

export default pool;


// const sql = postgres(process.env.DATABASE_URL,  { ssl: 'verify-full' });