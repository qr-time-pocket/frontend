import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { verifyToken } from "../apis/auth";

const Home: React.FC = () => {
  useEffect(() => {
    verifyToken().then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">환영합니다!</h1>
          <p className="text-gray-600">
            QR 코드 애플리케이션에 오신 것을 환영합니다.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            to="/login"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors"
          >
            로그인하기
          </Link>

          <div className="text-sm text-gray-400">
            <p>계정이 없으신가요?</p>
            <Link to="/login" className="text-indigo-600 hover:text-indigo-500">
              회원가입
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
