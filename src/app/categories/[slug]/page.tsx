/* interface CategoryPageProps {
  params: { slug: string };
}
 */

type Params = Promise<{ slug: string }>
export default async function CategoryPage( props: { params: Params }) {
  const params = await props.params;
  const quiz = params.slug;

  return (
    <div>
      <h1 className="text-2xl font-bold capitalize">{quiz} Quiz</h1>
      <p className="mt-2 text-gray-600">Here will be the quizzes for {quiz}.</p>
    </div>
  );
}
