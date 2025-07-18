import { client } from "./client";

export const loginWithKakao = async (code: string) => {
  const response = await client.post("/auth/login", { code });
  return response.data;
};

export const verifyToken = async () => {
  const response = await client.get("/auth/verify-token");
  return response.data;
};
