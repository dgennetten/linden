import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import History from './pages/History';
import Construction from './pages/Construction';
import Tenants from './pages/Tenants';
import Timeline from './pages/Timeline';
import About from './pages/About';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="history" element={<History />} />
        <Route path="construction" element={<Construction />} />
        <Route path="tenants" element={<Tenants />} />
        <Route path="timeline" element={<Timeline />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;