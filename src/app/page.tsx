'use client'

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
// import pool from "../utils/postgres";

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

/* fetchDataFromDB()
  .then(data => {
    console.log("Received data: ", data);
  })
  .catch(err => {
    console.log("Error: ", err);
  }); */

export interface QuizCategory {
  id: number;
  name: string;
}

export default function Home() {
  const [quizCategory, setQuizCategory] = useState<QuizCategory[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<QuizCategory[]>('/api/quizcategory');
        
        setQuizCategory(response.data);

        console.log("Data: ", response?.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
        // setLoading(false);
      }
    };

    fetchData();
  }, []);
  
  const openQuizzes = async (catId: number) => {
    // `${featureURL}?id=${id}`
    try {
        const response = await axios.get<QuizCategory[]>(`/api/quizzes?categoryId=${catId}`);
        
        setQuizCategory(response.data);

        console.log("Data: ", response?.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
        // setLoading(false);
      }
  }

  return (
    <div className="font-sans flex items-center justify-center w-full min-h-screen">
      <ul className="space-y-2 items-center">
        {quizCategory.map((category) => (
          <li key={category.id} className="p-4 border rounded-lg shadow-sm" onClick={() => openQuizzes(category.id)}>
            <div className="flex justify-between items-center">
              <span>{category.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
