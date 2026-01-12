import { useState } from 'react';
import './Details.css';

const AddOns = () => {
    const [addons, setAddons] = useState({
        cheese: true, // Default checked from design
        sauce: false
    });

    const toggle = (key: keyof typeof addons) => {
        setAddons(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div className="addons-section">
            <h3 className="addons-header">Add-ons ✨</h3>

            <div className="addon-item" onClick={() => toggle('cheese')}>
                <div className="addon-label">
                    <div className={`custom-checkbox ${addons.cheese ? 'checked' : ''}`}>
                        {addons.cheese && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>}
                    </div>
                    <span>Extra Cheese</span>
                </div>
                <span className="addon-price">AED 5.00</span>
            </div>

            <div className="addon-item" onClick={() => toggle('sauce')}>
                <div className="addon-label">
                    {/* Design shows radio-like circle for second option, but let's implement as checkbox for add-ons */}
                    <div className={`custom-checkbox ${addons.sauce ? 'checked' : ''}`} style={{ borderRadius: '50%' }}>
                        {addons.sauce && <div style={{ width: '10px', height: '10px', backgroundColor: 'white', borderRadius: '50%' }}></div>}
                    </div>
                    <span>Sauce</span>
                </div>
                <span className="addon-price">AED 8.00</span>
            </div>
        </div>
    );
};

export default AddOns;
