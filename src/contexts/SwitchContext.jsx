import { createContext, useState } from "react";

export const SwitchContext = createContext({});

export const SwitchProvider = ({ children }) => { 
  return (
    <SwitchContext.Provider value={{ }}>
      {children}
    </SwitchContext.Provider>
  )
}