import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import HomePage from "./pages/homePage";

function App() {
  let authKey = useSelector(state => state.auth.token);
  const navigate = useNavigate();
  function checkUserLoged() {
    if (authKey === "") {
      navigate("/login")
    }
  }
  useEffect(() => {
    checkUserLoged()
  },[authKey])

  return (
    <Routes>
      <Route path="/" element={<></>}/>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />}/>
      <Route path="/home" element={<HomePage />}/>
    </Routes>
  );
}

export default App;

