import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import NotePage from "./components/NotePage/NotePage";
import AddNote from "./components/NotePage/AddNote";
import User from "./components/User";

const App = () => {

  return (<>
    <Routes>
      <Route path="/" element={<h1>welcome page</h1>} />
      <Route path="/user/:userId" element={<User />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/notepage" element={<NotePage />} />
      <Route path="/mynote" element={<h3>as lfhkjsla;d</h3>} />
      <Route path="/addnote/:userId" element={<AddNote />} />
      <Route path="*" element={<h1>ERROR! PAGE NOT FOUND</h1>} />
    </Routes>
  </>
  );
};

export default App;
