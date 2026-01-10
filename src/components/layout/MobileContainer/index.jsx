
// Prompt said "Use Vanilla CSS for maximum flexibility". 
// I will use CSS modules or standard class names. Let's use standard CSS + modules for scoped.
// Actually, for MobileContainer, simple CSS is fine.

import React from 'react';
import '../../../styles/variables.css'; // Just to ensure vars are avail if used directly, though main.css loads them globally usually if imported in main.jsx

const MobileContainer = ({ children }) => {
    const containerStyle = {
        width: '100%',
        maxWidth: 'var(--max-width)',
        minHeight: '100vh',
        backgroundColor: 'var(--background)',
        position: 'relative',
        boxShadow: '0 0 20px rgba(0,0,0,0.05)',
        margin: '0 auto',
        overflow: 'hidden', // Contain scrolls
        display: 'flex',
        flexDirection: 'column'
    };

    return (
        <div style={containerStyle}>
            {children}
        </div>
    );
};

export default MobileContainer;
