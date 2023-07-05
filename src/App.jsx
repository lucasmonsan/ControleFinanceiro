import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, SwitchThemeContext } from "./contexts/ThemeContext";

import { Header } from "./components/interface/Header";
import { Footer } from "./components/interface/Footer";
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