import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            페이지를 찾을 수 없습니다
          </h2>
          <p className="text-gray-500 mb-8">
            요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            to="/"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors"
          >
            홈으로 돌아가기
          </Link>

          <div className="text-sm text-gray-400">
            <p>또는</p>
            <Link to="/login" className="text-indigo-600 hover:text-indigo-500">
              로그인 페이지로 이동
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
