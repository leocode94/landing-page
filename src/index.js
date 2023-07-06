import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './global.css';
import Layout from './components/Layout';
import Home from "./pages/Home"
import About from './pages/Sobre';
import Contato from './pages/Contato';
import Servicos from './pages/Servicos';
import Projetos from './pages/Projetos';
import ThankYou from './pages/ThankYou';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='sobre' element={<About />} />
          <Route path='servicos' element={<Servicos />} />
          <Route path='projetos' element={<Projetos />} />
          <Route path='contato' element={<Contato />} />
          <Route path='thank-you' element={<ThankYou />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);