import {
  AcademyUserTable,
  columns,
  students,
} from "@/components/wrapper/academy-user-table";

export default function AcademyDetailPage() {
  return <AcademyDetailPageView />;
}

function AcademyDetailPageView() {
  const navigate = useNavigate();

  return (
    <section>
      <p>차트 예시</p>
      <section className="flex flex-row gap-4">
        <ChartContainer config={chartConfig} className="min-h-[200px] w-1/3">
          <BarChart accessibilityLayer data={chartData}>
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          </BarChart>
        </ChartContainer>

        <ChartContainer config={chartConfig} className="min-h-[200px] w-1/3">
          <BarChart accessibilityLayer data={chartData}>
            <Bar dataKey="desktop" fill="orange" radius={4} />
          </BarChart>
        </ChartContainer>
      </section>

      <section>
        <div className="flex flex-row gap-4 justify-between">
          <p>회원 현황</p>
          <Button onClick={() => navigate("/academy/student/register")}>
            회원 등록하기
          </Button>
        </div>
        <AcademyUserTable columns={columns} data={students} />
      </section>

      <p>운동 현황</p>
      <AcademyUserTable columns={columns} data={students} />
    </section>
  );
}

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

import { Button } from "@/components/ui/button";
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";
import { useNavigate } from "react-router";
import { Bar, BarChart } from "recharts";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

// 무슨 기능이 필요한가?
// 회원 증감 현황
// 수익 증감 현황
// 누적 운동 수
// 운동 리스트
// 회원 리스트

// 메뉴 관리
// 회원관리
// 매니저관리
// pricing
// 출석 관리
