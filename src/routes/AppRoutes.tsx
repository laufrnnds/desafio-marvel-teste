import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutDefault from '../config/layout/Default';
import Home from '../pages/home/Home';
import Characters from '../pages/characters/Characters';
import Gibis from '../pages/gibis/Gibis';
import Series from '../pages/series/Series';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutDefault component={Home} />} />
        <Route path="/gibis" element={<LayoutDefault component={Gibis} />} />
        <Route path="/series" element={<LayoutDefault component={Series} />} />
        <Route
          path="/personagens"
          element={<LayoutDefault component={Characters} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
