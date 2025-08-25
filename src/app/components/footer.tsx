export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4 mt-10">
      <div className="max-w-6xl mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} QuizMaster. All rights reserved.</p>
      </div>
    </footer>
  );
}
