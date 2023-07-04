import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, SwitchThemeContext } from "./contexts/ThemeContext";

import { Header } from "./components/template/Header";
import { Footer } from "./components/template/Footer";
import { Router } from "./Router";
import { useContext } from "react";

export const App = () => {
  const { currentTheme } = useContext(SwitchThemeContext);
  
  return (
    <ThemeProvider theme={currentTheme === 'light' ? lightTheme : darkTheme}>
      <Header />      
      <Router/>      
      <Footer/>
    </ThemeProvider>
  );
}