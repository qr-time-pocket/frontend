import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/layout";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import AcademyPage from "./pages/academy";
import CreateAcademyPage from "./pages/academy/create";
import OauthCallback from "./pages/callback";
import ExercisePage from "./pages/exercise";

function App() {
  return (
    <Routes>
      {/* 일반 사용자 레이아웃을 사용하는 중첩 라우트들 */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/exercise" element={<ExercisePage />} />
        <Route path="/login" element={<Login />} />
      </Route>

      {/* 아카데미 레이아웃을 사용하는 중첩 라우트들 */}
      <Route path="/academy" element={<Outlet />}>
        <Route path="/academy" index element={<AcademyPage />} />
        <Route path="/academy/create" element={<CreateAcademyPage />} />
      </Route>

      {/* Layout을 사용하지 않는 독립적인 라우트들 */}
      <Route path="/oauth/:provider/callback" element={<OauthCallback />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
