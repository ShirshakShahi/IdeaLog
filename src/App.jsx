import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import NotePage from "./components/NotePage/NotePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<h3>Welcome</h3>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/notepage" element={<NotePage />} />
    </Routes>
  );
};

export default App;
