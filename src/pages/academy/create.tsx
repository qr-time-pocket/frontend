import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormProvider, useForm, useFormContext } from "react-hook-form";

export default function CreateAcademyPage() {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <CreateAcademyPageView />
    </FormProvider>
  );
}

function CreateAcademyPageView() {
  const { register, handleSubmit } = useFormContext();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div>
      {/* 브랜드는 가상의 개념이라고 생각해야겠다. */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="brand">브랜드명</Label>
          <Input
            id="brand"
            placeholder="브랜드명을 입력해주세요"
            {...register("brand")}
          />
        </div>

        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="address">주소</Label>
          <Input
            id="address"
            placeholder="주소를 입력해주세요"
            {...register("address")}
          />
        </div>

        <div className="grid w-full max-w-sm items-center gap-3">
          s<Label htmlFor="phone">연락처</Label>
          <Input
            id="phone"
            placeholder="연락처를 입력해주세요"
            {...register("phone")}
          />
        </div>

        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="coach">대표 코치</Label>
          <Input
            id="coach"
            placeholder="대표 코치를 입력해주세요"
            {...register("coach")}
          />
        </div>

        <Button>생성하기</Button>
      </form>
    </div>
  );
}
