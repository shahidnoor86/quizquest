import { Pool } from "pg";

const pool = new Pool(
    {
        host: "localhost",
        port: "5432",
        user: "postgres",
        password: "test",
        database: "quizquestdb"
    }
);

export default pool;