import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoutes } from './routes';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          {AppRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
      </Router>
    </HelmetProvider>
  );
};

export default App;