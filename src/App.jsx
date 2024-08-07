import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './component/home';
import Practice from './component/practice';
import Results from './component/Results';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/practice" element={<Practice />} />
      <Route path="/results" element={<Results />} />
    </Routes>
  );
}


export default App;
