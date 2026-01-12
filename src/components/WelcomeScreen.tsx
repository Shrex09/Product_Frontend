import './WelcomeScreen.css';
import logoImage from '../assets/image.png';

interface WelcomeScreenProps {
    onStart: () => void;
}

const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
    return (
        <div className="welcome-container">
            <div className="welcome-content">
                {/* Top: Logo */}
                <div className="welcome-logo-section">
                    <img src={logoImage} alt="Cheffest Logo" className="welcome-logo-image" />
                </div>

                {/* Center: Language Selection */}
                <div className="language-section">
                    <button className="lang-option active">English</button>
                    <button className="lang-option">Arabic</button>
                </div>

                {/* Bottom: Table Info & Action */}
                <div className="bottom-section">
                    <p className="table-number">Table number: <strong>21</strong></p>
                    
                    <button className="start-button" onClick={onStart}>
                        <span>Start Ordering</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WelcomeScreen;
