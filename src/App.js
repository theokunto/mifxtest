/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import HomePage from "./pages/homePage";
import ProductDetail from "./pages/product/productDetail";

function App() {
  let authKey = useSelector(state => state.auth.token);
  const navigate = useNavigate();
  const location = useLocation(); 
  function checkUserLoged() {
    if (authKey === "") {
      navigate("/login")
    } else if (location.pathname === "/"){
      navigate("/home")
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
      <Route path="/detail-product/:id" element={<ProductDetail />}/>
    </Routes>
  );
}

export default App;

