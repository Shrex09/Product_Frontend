import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import MobileContainer from './components/layout/MobileContainer';

function App() {
  return (
    <BrowserRouter>
      <MobileContainer>
        <AppRoutes />
      </MobileContainer>
    </BrowserRouter>
  );
}

export default App;
