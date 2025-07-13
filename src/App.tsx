import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import OauthCallback from "./pages/callback";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/oauth/:provider/callback" element={<OauthCallback />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
