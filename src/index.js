import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App/App';
import { ToastContainer } from 'react-toastify'
import './index.css';
import 'react-toastify/dist/ReactToastify.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter >
      <App />
      <ToastContainer />
    </BrowserRouter>
  </React.StrictMode>
);

// basename = '/goit-react-woolf-hw-05-movies'
