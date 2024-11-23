import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const activities = [
  {
    id: 1,
    name: "Annual Tech Symposium",
    date: "October 15-17, 2023",
    description:
      "A three-day event showcasing the latest in technology and research.",
  },
  {
    id: 2,
    name: "Code-a-thon",
    date: "November 5, 2023",
    description:
      "A 24-hour coding competition for students to solve real-world problems.",
  },
  {
    id: 3,
    name: "Industry Expert Lecture Series",
    date: "Every Tuesday",
    description:
      "Weekly lectures by industry professionals on current trends and technologies.",
  },
  {
    id: 4,
    name: "Student Project Exhibition",
    date: "December 10, 2023",
    description:
      "An exhibition where students showcase their innovative projects to the public.",
  },
];

export default function Activities() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Department Activities</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {activities.map((activity) => (
          <Card key={activity.id}>
            <CardHeader>
              <CardTitle>{activity.name}</CardTitle>
              <CardDescription>{activity.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{activity.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
