"use client"

import axios from "axios";
import { useEffect, useState } from "react";
import Banner from "./components/banner";
import CategoryCard from "./components/categorycard";

export interface QuizCategory {
  id: number;
  name: string;
  image: string;
  slug: string;
}

export default function Home() {
  const [quizzes, setQuizzes] = useState<QuizCategory[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<QuizCategory[]>('/api/quizcategory');
        
        setQuizzes(response.data);

        console.log("Data: ", response?.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
        // setLoading(false);
      }
    };

    fetchData();
  }, []);
  
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <Banner />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {quizzes.length === 0 && (
          <div className="col-span-full text-center text-gray-500">
            No quizzes available at the moment.
          </div>
        )}
        {quizzes.map((quiz) => (
          <CategoryCard
            key={quiz.id}
            title={quiz.name}
            image={quiz.image}
            slug={quiz.slug}
          />
        ))}
      </div>
    </div>
  );
 /*  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center -mt-16">
      <h1 className="text-4xl font-bold mb-8 font-[family-name:var(--font-geist-sans)] text-[#333333]">
        Superblog
      </h1>
      <ol className="list-decimal list-inside font-[family-name:var(--font-geist-sans)]">
        {quizzes.map((user: QuizCategory) => (
          <li key={user.id} className="mb-2">
            {user.name}
          </li>
        ))}
      </ol>
    </div>
  ); */
}
