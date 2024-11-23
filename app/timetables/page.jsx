import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const timetable = [
  {
    time: "9:00 AM - 10:30 AM",
    monday: "DS",
    tuesday: "COA",
    wednesday: "DLD",
    thursday: "DM",
    friday: "OOPS",
  },
  {
    time: "10:45 AM - 12:15 PM",
    monday: "OOPS",
    tuesday: "DM",
    wednesday: "DS",
    thursday: "DLD",
    friday: "COA",
  },
  {
    time: "1:00 PM - 2:30 PM",
    monday: "COA",
    tuesday: "R",
    wednesday: "ES",
    thursday: "DM",
    friday: "DS",
  },
  {
    time: "2:45 PM - 4:15 PM",
    monday: "ES",
    tuesday: "COA",
    wednesday: "OOPS",
    thursday: "DLD",
    friday: "DM",
  },
];

export default function Timetables() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Class Timetables</h1>
      <div className="mb-4">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select semester" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sem1">Semester 1</SelectItem>
            <SelectItem value="sem2">Semester 2</SelectItem>
            <SelectItem value="sem3">Semester 3</SelectItem>
            <SelectItem value="sem4">Semester 4</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Time</TableHead>
            <TableHead>Monday</TableHead>
            <TableHead>Tuesday</TableHead>
            <TableHead>Wednesday</TableHead>
            <TableHead>Thursday</TableHead>
            <TableHead>Friday</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {timetable.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.time}</TableCell>
              <TableCell>{row.monday}</TableCell>
              <TableCell>{row.tuesday}</TableCell>
              <TableCell>{row.wednesday}</TableCell>
              <TableCell>{row.thursday}</TableCell>
              <TableCell>{row.friday}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
