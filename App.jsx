import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Workbook from './pages/Workbook';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Workbook />} />
      </Routes>
    </HashRouter>
  );
}

export default App;