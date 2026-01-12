import { useState } from 'react';
import './Profile.css';

interface ProfileScreenProps {
    onBack: () => void;
    onSave: () => void;
}

const ProfileScreen = ({ onBack, onSave }: ProfileScreenProps) => {
    const [name, setName] = useState("Mary Richards");
    const [phone, setPhone] = useState("(+33)7 35 55 21 02");

    return (
        <div className="profile-container">
            {/* Header */}
            <div className="profile-header">
                <button className="profile-back-btn" onClick={onBack}>←</button>
                <div className="profile-title">Profile info</div>
            </div>

            {/* Avatar */}
            <div className="profile-avatar-section">
                <div className="profile-avatar-wrapper">
                    <img src="https://i.pravatar.cc/150?img=12" alt="Profile" className="profile-avatar" />
                    <div className="profile-edit-badge">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg>
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="profile-form">
                <div className="profile-field">
                    <label className="profile-label">Name</label>
                    <input
                        className="profile-input"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="profile-field">
                    <label className="profile-label">Phone number</label>
                    <div style={{ display: 'flex', gap: '8px' }}>
                        <input
                            className="profile-input"
                            style={{ width: '60px', textAlign: 'center', color: '#FF5252', fontWeight: 'bold' }}
                            value="+1"
                            readOnly
                        />
                        <input
                            className="profile-input"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <button className="profile-save-btn" onClick={onSave}>
                Save
            </button>
        </div>
    );
};

export default ProfileScreen;
