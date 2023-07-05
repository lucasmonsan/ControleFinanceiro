import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import { App } from './App';
import { SwitchThemeProvider } from './contexts/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SwitchThemeProvider>
      <App/>
    </SwitchThemeProvider>
  </React.StrictMode>
)