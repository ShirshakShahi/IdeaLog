import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import NotePage from "./components/NotePage/NotePage";
import AddNote from "./components/NotePage/AddNote";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<h3>Welcome</h3>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/notepage" element={<NotePage />} />
      <Route path="/mynote" element={<h3>as lfhkjsla;d</h3>} />
      <Route path="/addnote" element={<AddNote />} />
    </Routes>
  );
};

export default App;
