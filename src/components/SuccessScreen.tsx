import './SuccessScreen.css';

interface SuccessScreenProps {
    onGoHome: () => void;
    onViewStatus: () => void;
    onMakePayment: () => void;
}

const SuccessScreen = ({ onGoHome, onViewStatus, onMakePayment }: SuccessScreenProps) => {
    return (
        <div className="success-container">
            {/* Green Seal Animation */}
            <div className="success-seal-container">
                <svg className="seal-svg" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Wavy Seal Shape */}
                    <path d="M60 0C66.5 0 71.5 5 77 6C82 7 88 4 93 6C99 8 101 14 105 18C109 21 116 22 118 27C120 32 117 38 118 43C119 49 125 53 125 58C125 64 119 68 118 73C117 79 120 85 118 90C116 95 109 96 105 100C101 104 99 110 93 112C88 114 82 110 77 112C71.5 113 66.5 118 60 118C53.5 118 48.5 113 43 112C38 110 32 114 27 112C21 110 19 104 15 100C11 96 4 95 2 90C0 85 3 79 2 73C1 68 -5 64 -5 58C-5 53 1 49 2 43C3 38 0 32 2 27C4 22 11 21 15 18C19 14 21 8 27 6C32 4 38 7 43 6C48.5 5 53.5 0 60 0Z" fill="#2ECC71" transform="translate(0, 5) scale(0.9)" />
                    {/* Checkmark */}
                    <path d="M38 60L52 74L82 44" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>

            <h1 className="success-title">Order Placed Successfully!</h1>

            {/* Details Card */}
            <div className="details-card">
                <div className="details-row">
                    <span className="details-label">Order number:</span>
                    <span className="details-value">216358</span>
                </div>
                <div className="details-row">
                    <span className="details-label">Table number:</span>
                    <span className="details-value">23</span>
                </div>
                <div className="details-row">
                    <span className="details-label">Estimated preparation time:</span>
                    <span className="details-value">15 mins</span>
                </div>
            </div>

            <p className="success-description">
                Phasellus accumsan imperdiet tempor. Cras tincidunt, arcu nec eleifend porttitor.
            </p>

            <div className="success-actions">
                <button className="payment-btn" onClick={onMakePayment}>
                    Make payment
                </button>
                <button className="status-btn" onClick={onViewStatus}>
                    View Order Status
                </button>

                {/* Hidden home button for dev flow reset if needed, or integrate into View Status */}
                <div style={{ marginTop: '10px', height: '20px', cursor: 'pointer', opacity: 0.5, fontSize: '0.8rem', color: '#ccc' }} onClick={onGoHome}>
                    (Reset Flow)
                </div>
            </div>
        </div>
    );
};

export default SuccessScreen;
