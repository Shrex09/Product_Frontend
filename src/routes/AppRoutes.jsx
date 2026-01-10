import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Placeholder Pages (we will implement these next)
const Placeholder = ({ title }) => (
    <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>{title}</h2>
        <p>Coming Soon</p>
    </div>
);

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/splash" replace />} />
            <Route path="/splash" element={<Placeholder title="Splash Screen" />} />
            <Route path="/language" element={<Placeholder title="Language Select" />} />
            <Route path="/login" element={<Placeholder title="Login" />} />
            <Route path="/home" element={<Placeholder title="Home" />} />
            <Route path="/cart" element={<Placeholder title="Cart" />} />
            <Route path="/profile" element={<Placeholder title="Profile" />} />
            <Route path="*" element={<Placeholder title="404 Not Found" />} />
        </Routes>
    );
};

export default AppRoutes;
