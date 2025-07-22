import { useCreateAcademy } from "@/apis/academy";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import z from "zod";

const createAcademySchema = z.object({
  name: z.string().min(1, { message: "아카데미 이름을 입력해주세요" }),
  address: z.string().min(1, { message: "주소를 입력해주세요" }),
  contact: z
    .string()
    .min(1, { message: "연락처를 입력해주세요" })
    .regex(/^(01[016789]|02|0[3-9]{1}[0-9]{1})[0-9]{3,4}[0-9]{4}$/, {
      message: "올바른 전화번호 형식을 입력해주세요",
    }),
});

type CreateAcademyFormData = z.infer<typeof createAcademySchema>;

export default function CreateAcademyPage() {
  const methods = useForm<CreateAcademyFormData>({
    resolver: zodResolver(createAcademySchema),
  });

  return (
    <FormProvider {...methods}>
      <CreateAcademyPageView />
    </FormProvider>
  );
}

function CreateAcademyPageView() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useFormContext<CreateAcademyFormData>();

  const navigate = useNavigate();

  const { mutate, isPending } = useCreateAcademy({
    onSuccess: (data) => {
      // 컴포넌트별 성공 처리
      console.log("아카데미 생성 성공:", data);
      reset(); // 폼 초기화
      navigate("/academy"); // 아카데미 목록 페이지로 이동
    },
    onError: (error) => {
      // 컴포넌트별 에러 처리
      console.error("아카데미 생성 실패:", error);
      // 추가적인 에러 처리 로직 (예: 특정 필드 하이라이트 등)
    },
  });

  const onSubmit = (data: CreateAcademyFormData) => {
    mutate(data);
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">아카데미 생성</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid w-full items-center gap-3">
          <Label htmlFor="brand">아카데미 이름</Label>
          <Input
            id="academy"
            placeholder="아카데미 이름을 입력해주세요"
            {...register("name", {
              required: "아카데미 이름을 입력해주세요",
            })}
          />
          <p className="text-red-500">{errors.name?.message?.toString()}</p>
        </div>

        <div className="grid w-full items-center gap-3">
          <Label htmlFor="address">주소</Label>
          <Input
            id="address"
            placeholder="주소를 입력해주세요"
            {...register("address", {
              required: "주소를 입력해주세요",
            })}
          />
          <p className="text-red-500">{errors.address?.message?.toString()}</p>
        </div>

        <div className="grid w-full items-center gap-3">
          <Label htmlFor="phone">연락처</Label>
          <Input
            id="contact"
            type="tel"
            inputMode="numeric"
            placeholder="연락처를 입력해주세요"
            {...register("contact", {
              required: "연락처를 입력해주세요",
            })}
          />
          <p className="text-red-500">{errors.contact?.message?.toString()}</p>
        </div>

        <Button type="submit" disabled={isPending} className="w-full">
          {isPending ? "생성 중..." : "생성하기"}
        </Button>
      </form>
    </div>
  );
}
