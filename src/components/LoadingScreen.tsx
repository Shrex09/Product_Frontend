import './LoadingScreen.css';
import logoImage from '../assets/image.png';

const LoadingScreen = () => {
    return (
        <div className="splash">
            <div className="splash-content">
                <img src={logoImage} alt="Cheffest Logo" className="logo-image" />
                <div className="loader-section">
                    <div className="spinner"></div>
                    <p className="loading-text">Fetching your table</p>
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
