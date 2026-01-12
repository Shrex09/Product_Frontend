import './PaymentSuccess.css';
// import { GreenSeal } from './SuccessScreen'; // Removed invalid import

// Assuming GreenSeal is not exported, defining a local SVG or component.
// Reusing SVG pattern for consistency.

const PaymentSuccessIcon = () => (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
        <path d="M50 0C55.4 0 60.1 3.2 62.3 8.1C64.9 7.4 67.7 7.4 70.4 8.2C75.6 9.7 79.1 14.7 78.9 20.1C81.6 20.8 84.2 22.3 86.1 24.3C89.9 28.5 90.5 34.6 87.7 39.4C89.5 41.3 90.6 43.8 90.8 46.5C91.2 52 87.8 56.8 82.6 58.7C83.3 61.3 83.1 64.1 82.1 66.7C80.0 71.8 74.8 74.9 69.4 74.5C68.3 77.1 66.4 79.3 64.0 80.8C59.3 83.7 53.4 83.1 49.3 79.5C47.2 81.3 44.6 82.3 41.9 82.4C36.4 82.5 31.4 79.3 29.2 74.3C26.7 75.0 24.0 74.9 21.4 74.0C16.4 72.5 13.0 67.8 13.3 62.5C10.7 61.8 8.3 60.3 6.5 58.3C2.8 54.3 2.3 48.4 5.2 43.7C3.5 41.9 2.5 39.5 2.4 36.9C2.0 31.5 5.5 26.6 10.8 24.7C10.2 22.1 10.5 19.3 11.5 16.8C13.6 11.7 18.7 8.5 24.2 8.7C25.3 6.0 27.2 3.8 29.7 2.2C34.4 -0.8 40.4 -0.2 44.5 3.5C46.3 1.9 48.6 1.0 51.0 1.0" fill="#2ECC71" />
        <path d="M32 42L44 54L68 30" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

interface PaymentSuccessScreenProps {
    onBack: () => void;
    onLeaveFeedback: () => void;
    onCallCaptain: () => void;
}

const PaymentSuccessScreen = ({ onBack, onLeaveFeedback, onCallCaptain }: PaymentSuccessScreenProps) => {
    return (
        <div className="payment-success-container">
            <button className="payment-success-back-btn" onClick={onBack}>←</button>

            <div className="payment-success-icon-wrapper">
                <PaymentSuccessIcon />
            </div>

            <h1 className="payment-success-title">Payment Successful!</h1>

            <div className="payment-success-card">
                <span className="payment-success-label">Amount paid:</span>
                <span className="payment-success-amount">AED 90.00</span>
            </div>

            <p className="payment-success-desc">
                Phasellus accumsan imperdiet tempor. Cras tincidunt, arcu nec eleifend porttitor.
            </p>

            <div className="payment-success-actions">
                <button className="leave-feedback-btn" onClick={onLeaveFeedback}>
                    {/* Thumbs Up Icon */}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                    </svg>
                    Leave Feedback
                </button>

                <button className="call-captain-btn" onClick={onCallCaptain}>
                    {/* Phone Icon */}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    Call Captain
                </button>
            </div>
        </div>
    );
};

export default PaymentSuccessScreen;
