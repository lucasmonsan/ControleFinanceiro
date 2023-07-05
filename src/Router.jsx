import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorPage } from "./pages/public/ErrorPage";
import { HomePage } from "./pages/public/HomePage";
import { LoginPage } from "./pages/public/LoginPage";

export const Router = () => {
  return (
    <BrowserRouter>      
      <Routes>
        <Route index element={<HomePage/>} />
        <Route path="login" element={<LoginPage/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export const goToHome = (navigate) => navigate("/")
export const goToLogin = (navigate) => navigate("/login")
export const goToSignUp = (navigate) => navigate("/signup")
export const goToError = (navigate) => navigate("/error")