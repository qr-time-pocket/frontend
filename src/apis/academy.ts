import type { CreateAcademyDto } from "@/types/dto/academy";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { client } from "./client";
import queryKeys from "./keys";

async function createAcademy(data: CreateAcademyDto) {
  const response = await client.post("/academy", data);
  return response.data;
}

export function useCreateAcademy(options?: {
  onSuccess?: (data: any) => void;
  onError?: (error: Error) => void;
}) {
  return useMutation({
    mutationFn: createAcademy,
    onSuccess: (data) => {
      // 공통 성공 처리
      toast.success("아카데미가 성공적으로 생성되었습니다.");

      // 컴포넌트별 성공 처리
      options?.onSuccess?.(data);
    },
    onError: (error: Error) => {
      // 공통 에러 처리
      toast.error("아카데미 생성에 실패했습니다.");
      console.error("Create academy error:", error);

      // 컴포넌트별 에러 처리
      options?.onError?.(error);
    },
  });
}

async function getAcademies() {
  const response = await client.get("/academy");
  return response.data;
}

export function useGetAcademies() {
  return useQuery({
    queryKey: queryKeys.academy.list(),
    queryFn: getAcademies,
  });
}
