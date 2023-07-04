import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage";
import { HomePage } from "./pages/HomePage";

export const Router = () => {
  return (
    <BrowserRouter>      
      <Routes>
        <Route index element={<HomePage/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export const goToHome = (navigate) => navigate("/")
export const goToLogin = (navigate) => navigate("/login")
export const goToSignUp = (navigate) => navigate("/signup")
export const goToError = (navigate) => navigate("/error")