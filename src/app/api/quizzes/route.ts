import pool from "@/utils/postgres";
import { NextRequest, NextResponse } from "next/server";

const fetchDataFromDB = async (categoryId: number) => {
  try {
    const client = await pool.connect();
    console.log("Connected to Database");

    const result = await client.query(`SELECT * FROM quizzes where cat_id=${categoryId}`);
    const data = result.rows;
    console.log("Fetched Data: ", data);

    client.release();
    return data;
  } catch(err) {
    console.log("Error fetching data...", err);
    throw err;
  }
}

// Get All Quiz Category
export async function GET(req: NextRequest) {
    
    try {
        const { searchParams } = new URL(req.url);
        const categoryId = searchParams.get("categoryId");
        console.log("Quiz Category API called with Category: ", categoryId);

        if (!categoryId) {
            return NextResponse.json(
                {
                    status: 400,
                    message: "Category ID is required.",
                }
            );
        }

        const data = await fetchDataFromDB(parseInt(categoryId ?? ""));
        console.log("Received data: ", data);

        return NextResponse.json(data, { status: 200 });
    } catch (error: any) {
        console.error("ERROR: ", error.message);
        return NextResponse.json(
            {
                status: 500,
                message:
                    error?.response?.data?.message || error.message || "An unexpected error occurred.",
            },
            { status: 500 }
        );
    }
}
