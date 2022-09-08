import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login/index";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Chatroom from "./components/chatroom";
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="" element={<Chatroom/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
