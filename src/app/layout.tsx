import Footer from "./components/footer";
import Header from "./components/header";
import "./globals.css";


export const metadata = {
  title: "QuizMaster",
  description: "Test your skills with fun quizzes",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 max-w-6xl mx-auto px-4 py-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
