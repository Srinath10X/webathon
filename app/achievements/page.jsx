import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const achievements = [
  {
    id: 1,
    title: "Best Research Paper Award",
    recipient: "Srinath",
    description:
      "Awarded at the International Conference on Computer Science for groundbreaking work in AI.",
  },
  {
    id: 2,
    title: "National Coding Competition Winners",
    recipient: "Student Team Alpha",
    description: "First place in the national collegiate coding competition.",
  },
  {
    id: 3,
    title: "Industry Partnership Grant",
    recipient: "Department of Computer Science",
    description:
      "500,000 grant received for collaborative research with leading tech companies.",
  },
  {
    id: 4,
    title: "Outstanding Teaching Award",
    recipient: "Prof. John Doe",
    description:
      "Recognized for exceptional teaching and mentorship of undergraduate students.",
  },
];

export default function Achievements() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Our Achievements</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((achievement) => (
          <Card key={achievement.id}>
            <CardHeader>
              <CardTitle>{achievement.title}</CardTitle>
              <CardDescription>{achievement.recipient}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{achievement.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
