
import "./App.css";
import Login from "./components/login/index";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Chatroom from "./components/chatroom";
import AuthProvider from "./context/AuthProvider"
import AppContext from "./context/AppContext";
function App() {
  return (
    <>
      <BrowserRouter>

      <Routes>
        <Route path="/login" element={ <AuthProvider><AppContext><Login/></AppContext> </AuthProvider>}></Route>
        <Route path="/" element={<AuthProvider><AppContext><Chatroom/></AppContext></AuthProvider>}></Route>
      </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
