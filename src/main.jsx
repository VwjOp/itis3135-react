import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Introduction from './Introduction';
import Contact from './Contact';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/introduction" element={<Introduction />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);
