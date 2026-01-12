import { useState } from 'react';
import './Checkout.css';

interface PhoneLoginModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (phoneNumber: string) => void;
}

const PhoneLoginModal = ({ isOpen, onClose, onSubmit }: PhoneLoginModalProps) => {
    const [phoneNumber, setPhoneNumber] = useState('');

    if (!isOpen) return null;

    const handleSubmit = () => {
        if (phoneNumber.length > 3) {
            onSubmit(phoneNumber);
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="bottom-sheet" onClick={(e) => e.stopPropagation()}>
                <div className="modal-handle"></div>

                <h3 className="modal-title">Enter Phone Number</h3>

                <h2 className="modal-description">Enter your phone number to Continue</h2>
                <p className="modal-subtitle">Phone number</p>

                <div className="phone-input-group">
                    <div className="country-code">+1</div>
                    <input
                        type="tel"
                        className="phone-input"
                        placeholder="Enter phone number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        autoFocus
                    />
                </div>

                <button
                    className={`continue-btn ${phoneNumber.length > 3 ? 'active' : ''}`}
                    onClick={handleSubmit}
                >
                    Continue
                </button>
            </div>
        </div>
    );
};

export default PhoneLoginModal;
