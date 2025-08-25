import Link from "next/link";
import Image from "next/image";

interface CategoryCardProps {
  title: string;
  image: string;
  slug: string;
}

export default function CategoryCard({ title, image, slug }: CategoryCardProps) {
  return (
    <Link
      href={`/categories/${slug}`}
      className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden w-60"
    >
      <div className="relative h-40">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    </Link>
  );
}
