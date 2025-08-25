// import pool from "@/utils/postgres";
import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
    try {
        console.log("Call to GET QUIZ CATEGORIES API");
        const quizCategories = await prisma.quiz_categories.findMany();
        console.log("QUIZ CATEGORY LIST is ", quizCategories);
        return NextResponse.json(quizCategories);
    } catch (error: unknown) {

        if (error instanceof Error) {
            console.error("ERROR: ", error.message);
            return NextResponse.json(
                {
                    status: 500,
                    message:
                        error.message || "An unexpected error occurred.",
                }
            );
        }
    }
}

/* const fetchDataFromDB = async () => {
  try {
    const client = await pool.connect();
    console.log("Connected to Database");

    const result = await client.query("SELECT * FROM quiz_categories");
    const data = result.rows;
    console.log("Fetched Data: ", data);

    client.release();
    return data;
  } catch(err) {
    console.log("Error fetching data...", err);
    throw err;
  }
} */

// Get All Quiz Category
/* export async function GET(req: NextRequest) {
    
    try {
        console.log("Quiz Category API called", req.body);

        // const data = await fetchDataFromDB();
        const data = await prisma.user.findMany();
        console.log("Received data: ", data);
        return NextResponse.json(data);
        

        return NextResponse.json(data, { status: 200 });
    } catch (error: unknown) {

        if (error instanceof Error) {
            console.error("ERROR: ", error.message);
        return NextResponse.json(
            {
                status: 500,
                message:
                    error.message || "An unexpected error occurred.",
            },
            { status: 500 }
        );
    }
    }
} */

// API Route to add a new feature
/* export async function POST(req: NextRequest) {
    try {
        const { featureName } = await req.json();

        if (!featureName || !featureName.trim()) {
            return NextResponse.json(
                {
                    status: 400,
                    message:"Feature Name is required.",
                },
            );
        }

        const response = await addUpdateFeature(featureName);

        return NextResponse.json(response.data);
        // return NextResponse.json({"success":true,"message":"Successfully updated","status":200});
    } catch (error: any) {
        return NextResponse.json(
            {
                status: 500,
                message:
                    error.response?.data?.message || error.message || "An unexpected error occurred.",
            },
        );
    }
}

// API Route to edit an existing feature
export async function PUT(req: NextRequest) {
    try {
        const { id, featureName } = await req.json();

        if (!id || !featureName || !featureName.trim()) {
            return NextResponse.json(
                {
                    status: 400,
                    message:"Feature ID / Name is missing.",
                },
            );
        }

        const response = await addUpdateFeature(featureName, id);

        return NextResponse.json(response.data);
        // return NextResponse.json({"success":true,"message":"Successfully updated","status":200});
    } catch (error: any) {
        return NextResponse.json(
            {
                status: 500,
                message:
                    error.response?.data?.message || error.message || "An unexpected error occurred.",
            },
        );
    }
}

// API Route to delete a feature
export async function DELETE(req: NextRequest) {
    try {
        // const { id } = await req.json();
        const searchParams = req.nextUrl.searchParams;
        const id = searchParams.get('id')
        console.log("Delete Feature called for ", id);
        
        if (!id) {
            return NextResponse.json(
                {
                    status: 400,
                    message:"Feature ID is missing.",
                },
            );
        }

        const featureBackendUrl = featureAPIUrl();
        const response = await axios.delete(`${featureBackendUrl}/${id}`);

        console.log("Delete Response for URL - " + `${featureBackendUrl}/${id}`, response.data);

        return NextResponse.json(response.data);
        // return NextResponse.json({"success":true,"message":"Successfully deleted","status":200});
    } catch (error: any) {
        return NextResponse.json(
            {
                status: 500,
                message:
                    error.response?.data?.message || error.message || "An unexpected error occurred.",
            },
        );
    }
}

async function addUpdateFeature(featureName: string, featureId: string = "") {
    console.log(`${featureId ? "update" : "create"}`, featureName);

    try {
        let body = featureId ? {
            featureId,
            featureName
        } : {
            featureName
        }

        console.table(body);
        const featureBackendUrl = featureAPIUrl();

        const res = axios({
            method: featureId? 'put' : 'post',
            url: `${featureBackendUrl}`,
            data: body
          });
        return res;
    } catch (error: any) {
        console.error("Failed to map role features:", error);
        throw new Error(error.message || "Failed to map role features");
    }
} */
