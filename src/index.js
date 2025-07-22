import ReactDOM from 'react-dom/client';
import App from './App';
import EmployeeProvider from './context/EmployeeContext';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <EmployeeProvider>
      <App />
    </EmployeeProvider>
  </BrowserRouter>
   </React.StrictMode>
  
);
