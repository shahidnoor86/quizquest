interface CategoryPageProps {
  params: { slug: string };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
const { slug } = params;
  return (
    <div>
      <h1 className="text-2xl font-bold capitalize">{slug} Quiz</h1>
      <p className="mt-2 text-gray-600">Here will be the quizzes for {slug}.</p>
    </div>
  );
}
