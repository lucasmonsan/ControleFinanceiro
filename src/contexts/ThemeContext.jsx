import { createContext, useState } from "react";

export const lightTheme = {
  color01: '#ffffff',
  color02: '#ecebf3',
  color03: '#9fa5b6',
  color04: '#27314a',
  color05: '#151928'
};

export const darkTheme = {
  color01: '#27314a',
  color02: '#151928',
  color03: '#9fa5b6',
  color04: '#f4f4f9',
  color05: '#ffffff'
};

export const SwitchThemeContext = createContext({});

export const SwitchThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('light');
  
  return (
    <SwitchThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      {children}
    </SwitchThemeContext.Provider>
  )
}