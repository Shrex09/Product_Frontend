import { useState } from 'react';
import './Checkout.css';

interface OTPVerificationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (otp: string) => void;
    phoneNumber?: string;
}

const OTPVerificationModal = ({ isOpen, onClose, onSubmit }: OTPVerificationModalProps) => {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);

    if (!isOpen) return null;

    const handleChange = (element: HTMLInputElement, index: number) => {
        if (isNaN(Number(element.value))) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        // Focus next input
        if (element.nextSibling) {
            (element.nextSibling as HTMLInputElement).focus();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            // Focus previous input on backspace if current is empty
            const prev = (e.target as HTMLInputElement).previousSibling as HTMLInputElement;
            if (prev) prev.focus();
        }
    };


    const handleSubmit = () => {
        const otpString = otp.join('');
        if (otpString.length === 6) {
            onSubmit(otpString);
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="bottom-sheet" onClick={(e) => e.stopPropagation()}>
                <div className="modal-handle"></div>

                <h3 className="modal-title">OTP Verification</h3>

                <h2 className="modal-description" style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Enter the verification code sent to your phone number</h2>

                {/* Optional: Show phone number if available */}
                {/* <p className="modal-subtitle">{phoneNumber || "+1 123 456 7890"}</p> */}

                <p className="modal-subtitle" style={{ marginTop: '24px', marginBottom: '12px' }}>Enter the code</p>

                <div className="otp-modal-inputs">
                    {otp.map((data, index) => (
                        <input
                            className="otp-modal-box"
                            type="text"
                            name="otp"
                            maxLength={1}
                            key={index}
                            value={data}
                            onChange={e => handleChange(e.target, index)}
                            onKeyDown={e => handleKeyDown(e, index)}
                        />
                    ))}
                </div>

                <button
                    className={`continue-btn active`}
                    style={{ backgroundColor: '#FF5252', background: '#FF5252', color: 'white', border: 'none' }}
                    onClick={handleSubmit}
                >
                    Submit
                </button>

                <div className="resend-text" style={{ marginTop: '24px', marginBottom: '12px' }}>
                    Didn't recieve the code?
                </div>
            </div>
        </div>
    );
};

export default OTPVerificationModal;
