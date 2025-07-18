import Dashboard from "@/assets/dashboard-dark.png";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

export default function AcademyPage() {
  const navigate = useNavigate();
  return (
    <section className="relative w-full h-lvh flex flex-col items-center justify-center text-center bg-black text-white px-4">
      {/* 개선된 그라데이션 배경 */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-800 via-emerald-900 via-black to-black z-0" />

      {/* 추가적인 그라데이션 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-emerald-900/30 z-0" />

      <div className="relative z-10 max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 왼쪽 텍스트 영역 */}
          <div className="space-y-8 text-left">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight opacity-0"
              style={{
                animation: "slideUp 0.8s ease-out 0.2s forwards",
                transform: "translateY(30px)",
              }}
            >
              회원 관리로
              <br />
              <span className="text-emerald-400">시간을 절약하세요</span>
            </h1>

            <p
              className="text-xl text-emerald-200 leading-relaxed opacity-0"
              style={{
                animation: "slideUp 0.8s ease-out 0.4s forwards",
                transform: "translateY(30px)",
              }}
            >
              복잡한 엑셀 파일, 수기 기록은 이제 그만!
              <br />
              <span className="font-semibold text-white">
                한 번의 클릭으로 모든 회원 정보를 관리
              </span>
              하고, 레슨 일정을 자동으로 조율하세요.
            </p>
          </div>

          {/* 오른쪽 이미지 영역 */}
          <div
            className="flex justify-center lg:justify-end opacity-0"
            style={{
              animation: "slideUp 0.8s ease-out 0.6s forwards",
              transform: "translateY(30px)",
            }}
          >
            <div className="relative">
              {/* 이미지 그림자 효과 */}
              <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full transform scale-110"></div>
              <img
                src={Dashboard}
                alt="dashboard"
                className="relative w-full max-w-lg lg:max-w-xl rounded-lg shadow-2xl shadow-emerald-500/20 border border-emerald-500/20"
              />
            </div>
          </div>
        </div>

        <div
          className="flex justify-center mt-12 opacity-0"
          style={{
            animation: "slideUp 0.8s ease-out 0.8s forwards",
            transform: "translateY(30px)",
          }}
        >
          <Button
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
            onClick={() => navigate("/academy/create")}
          >
            무료로 시작하기
          </Button>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `,
        }}
      />
    </section>
  );
}
