import pool from "@/utils/postgres";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();
export async function GET() {
    try {
        console.log("Call to GET QUIZZE in CATEGORIES API");
        const cat_id = "emelie@prisma.io";
        const quizList = await prisma.$queryRaw`SELECT * FROM User WHERE email = ${cat_id}`;
        console.log("QUIZ CATEGORY LIST is ", quizList);
        return NextResponse.json(quizList);
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
