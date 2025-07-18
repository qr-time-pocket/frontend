import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/ui/carousel";
import { H3 } from "@/components/ui/typography";
import { ExerciseCard } from "@/components/wrapper/excercise-card";
import ExerciseTable from "@/components/wrapper/exercise-table";

export default function ExercisePage() {
  return <ExercisePageView />;
}

function ExercisePageView() {
  // 운동 데이터 예시
  const exercises = [
    {
      id: 1,
      title: "리부트 아카데미 정기운동",
      description: "매주 월요일 정기 운동 클래스",
      action: "참여하기",
      content: "남은인원: 10명",
      footer: "시작시간: 2025-01-15 10:00",
    },
    {
      id: 2,
      title: "요가 클래스",
      description: "초보자를 위한 기초 요가",
      action: "참여하기",
      content: "남은인원: 5명",
      footer: "시작시간: 2025-01-16 14:00",
    },
    {
      id: 3,
      title: "헬스 트레이닝",
      description: "개인 맞춤형 헬스 프로그램",
      action: "참여하기",
      content: "남은인원: 3명",
      footer: "시작시간: 2025-01-17 18:00",
    },
    {
      id: 4,
      title: "줌바 댄스",
      description: "즐거운 댄스 운동",
      action: "참여하기",
      content: "남은인원: 15명",
      footer: "시작시간: 2025-01-18 19:00",
    },
    {
      id: 5,
      title: "필라테스",
      description: "코어 강화를 위한 필라테스",
      action: "참여하기",
      content: "남은인원: 8명",
      footer: "시작시간: 2025-01-19 16:00",
    },
  ];

  return (
    <div className="flex flex-1 flex-col gap-6 p-6">
      <>
        <H3 className="font-bold">곧 마감되는 운동</H3>
        <section id="exercise-carousel" className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {exercises.map((exercise) => (
                <CarouselItem
                  key={exercise.id}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <ExerciseCard
                    title={exercise.title}
                    description={exercise.description}
                    action={exercise.action}
                    content={exercise.content}
                    footer={exercise.footer}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className="right-0" />
          </Carousel>
        </section>
      </>

      <>
        <H3 className="font-bold">운동 목록</H3>
        <section id="exercise-data-table">
          <ExerciseTable />
        </section>
      </>
    </div>
  );
}
