import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { P } from "../ui/typography";

interface Props {
  title: string;
  description: string;
  action: string;
  content: string;
  footer: string;
}

export function ExerciseCard({
  title,
  description,
  action,
  content,
  footer,
}: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <P className="text-sm">남은인원: 10명</P>
      </CardContent>
      <CardFooter>
        <P className="text-sm">시작시간: 2025-07-15 10:00</P>
      </CardFooter>
    </Card>
  );
}
