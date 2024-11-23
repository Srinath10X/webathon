import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const courses = [
  {
    id: 1,
    name: "Introduction to Computer Science",
    code: "CS101",
    description:
      "A foundational course covering basic programming concepts and algorithms.",
  },
  {
    id: 2,
    name: "Data Structures and Algorithms",
    code: "CS201",
    description:
      "An in-depth study of various data structures and algorithmic techniques.",
  },
  {
    id: 3,
    name: "Web Development",
    code: "CS301",
    description:
      "Learn to create modern, responsive web applications using current technologies.",
  },
];

export default function Courses() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Our Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card key={course.id}>
            <CardHeader>
              <CardTitle>{course.name}</CardTitle>
              <CardDescription>{course.code}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{course.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
