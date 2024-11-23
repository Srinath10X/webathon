import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faculty = [
  {
    id: 1,
    name: "Palepu Vamsi",
    email: "vamsi@mrec.au.in",
  },
  {
    id: 2,
    name: "Jamalpur Anurag",
    email: "anurag@mrec.au.in",
  },
  {
    id: 3,
    name: "Navireddi ShivaSai",
    email: "shivasai@mrec.ac.in",
  },
  {
    id: 4,
    name: "",
    position: "Damera Kalyan",
    email: "kalyan@mrec.ac.in",
  },
];

export default function Toppers() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Our Faculty</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {faculty.map((member) => (
          <Card key={member.id}>
            <CardHeader>
              <Image
                src={`/placeholder.svg?height=200&width=200&text=${member.name}`}
                alt={member.name}
                width={200}
                height={200}
                className="rounded-full mx-auto"
              />
              <CardTitle className="text-center mt-4">{member.name}</CardTitle>
            </CardHeader>
            <CardContent>
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
