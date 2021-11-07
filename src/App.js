import React, { useState, useEffect } from 'react';
import { findIndex } from './utils';
import AppRoutes from './router/AppRoutes';
import Navbar from './components/Navbar/Navbar';
import routesArray from './router/routesArray';
import { useLocation } from 'react-router-dom';

const App = () => {
  const [value, setValue] = useState(0);

  const location = useLocation();

  useEffect(() => {
    setValue(findIndex(location.pathname, routesArray));
  }, [location]);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#000' }}>
      <Navbar value={value} />
      <AppRoutes />
    </div>
  );
};

export default App;
