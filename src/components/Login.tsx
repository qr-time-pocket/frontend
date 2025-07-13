import React from "react";

const handleKakaoLogin = () => {
  window.Kakao.Auth.authorize({
    redirectUri: "http://localhost:5173/oauth/kakao/callback",
    throughTalk: false,
  });
};

const Login: React.FC = () => {
  return (
    <div>
      <button onClick={handleKakaoLogin}>카카오 로그인</button>
    </div>
  );
};

export default Login;
