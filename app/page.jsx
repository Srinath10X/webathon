import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to Department Of Cse</h1>
      <p className="text-xl mb-8">
        Discover our courses, activities, and achievements. Explore faculty
        profiles, timetables, and celebrate our top performers.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          "Courses",
          "Activities",
          "Achievements",
          "Faculty",
          "Timetables",
          "Toppers",
        ].map((item) => (
          <div
            key={item}
            className="bg-card text-card-foreground rounded-lg shadow-md p-6"
          >
            <h2 className="text-2xl font-semibold mb-4">{item}</h2>
            <p className="mb-4">
              Explore our {item.toLowerCase()} section to learn more.
            </p>
            <Button asChild>
              <Link href={`/${item.toLowerCase()}`}>View {item}</Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
