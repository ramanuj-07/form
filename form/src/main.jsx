import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Acknowledge from './Acknowledge.jsx';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing:border-box;
    margin:0;
    padding:0;
  }
  body{
  font-family: "Poppins", sans-serif;

  }
`
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/acknowledge" element={<Acknowledge />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)

