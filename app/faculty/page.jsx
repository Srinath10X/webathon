import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const faculty = [
  {
    id: 1,
    name: "Dr. Someone",
    position: "Professor",
    specialization: "Artificial Intelligence",
    email: "someone@mrec.au.in",
  },
  {
    id: 2,
    name: "Prof. Another proff",
    position: "Associate Professor",
    specialization: "Data Science",
    email: "someanother@mrec.au.in",
  },
  {
    id: 3,
    name: "Dr. Priya",
    position: "Assistant Professor",
    specialization: "Cybersecurity",
    email: "priya@mrec.ac.in",
  },
  {
    id: 4,
    name: "Prof. Doumni",
    position: "Lecturer",
    specialization: "Software Engineering",
    email: "doumni@mrec.ac.in",
  },
];

export default function Faculty() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Our Faculty</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {faculty.map((member) => (
          <Card key={member.id}>
            <CardHeader>
              <Image
                src={`/placeholder.svg?height=200&width=200&text=${member.name}`}
                width={200}
                height={200}
                className="rounded-full mx-auto"
              />
              <CardTitle className="text-center mt-4">{member.name}</CardTitle>
              <CardDescription className="text-center">
                {member.position}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center mb-2">
                <strong>Specialization:</strong> {member.specialization}
              </p>
              <p className="text-center">
                <strong>Email:</strong> {member.email}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
