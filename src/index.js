import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from './themeContext';
import App from './App';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  rootElement
);
