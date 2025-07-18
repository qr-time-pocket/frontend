import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginWithKakao } from "../apis/auth";

export default function OauthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {
      loginWithKakao(code)
        .then((res) => {
          navigate("/");
        })
        .catch((err) => {
          alert("로그인 실패");
        });
    }
  }, []);

  return <div>로그인 처리중입니다. 잠시 기다려주세요. </div>;
}
