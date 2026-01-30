import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ServicesPage from './components/Services';
import HomePage from './components/HomePage';


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/Services" element={<ServicesPage/>} />
         <Route path="/" element={<HomePage/>} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;