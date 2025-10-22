import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/pages/Home';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/institutions/*" element={<div style={{ paddingTop: '100px', padding: '100px 20px 20px' }}>Institutions Page</div>} />
      <Route path="/people/*" element={<div style={{ paddingTop: '100px', padding: '100px 20px 20px' }}>People Page</div>} />
      <Route path="/resources/*" element={<div style={{ paddingTop: '100px', padding: '100px 20px 20px' }}>Resources Page</div>} />
      <Route path="/partners" element={<div style={{ paddingTop: '100px', padding: '100px 20px 20px' }}>Partners Page</div>} />
      <Route path="/blog" element={<div style={{ paddingTop: '100px', padding: '100px 20px 20px' }}>Blog Page</div>} />
      <Route path="/trust-factor" element={<div style={{ paddingTop: '100px', padding: '100px 20px 20px' }}>Trust Factor Page</div>} />
      <Route path="/about" element={<div style={{ paddingTop: '100px', padding: '100px 20px 20px' }}>About Us Page</div>} />
      <Route path="/contact" element={<div style={{ paddingTop: '100px', padding: '100px 20px 20px' }}>Contact Us Page</div>} />
      <Route path="*" element={<div style={{ paddingTop: '100px', padding: '100px 20px 20px' }}>404 - Page Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;
