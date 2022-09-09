
import "./App.css";
import Login from "./components/login/index";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Chatroom from "./components/chatroom";
import AuthProvider from "./context/AuthProvider"
function App() {
  return (
    <>
      <BrowserRouter>

      <Routes>
       
        <Route path="/login" element={ <AuthProvider><Login/></AuthProvider>}></Route>
        <Route path="/" element={<AuthProvider><Chatroom/></AuthProvider>}></Route>
   
      </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
