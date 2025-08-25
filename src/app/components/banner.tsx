import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative bg-gray-200 h-60 rounded-lg overflow-hidden shadow mb-8">
      <Image
        src="/categories/banner.jpg"
        alt="Latest Quiz Banner"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h2 className="text-3xl font-bold text-white">🔥 Play Quiz</h2>
      </div>
    </div>
  );
}
