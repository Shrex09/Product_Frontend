import './Details.css';
import foodImage from '../../assets/image.png'; // Using placeholder for now

interface DetailsHeaderProps {
    onBack: () => void;
}

const DetailsHeader = ({ onBack }: DetailsHeaderProps) => {
    return (
        <div className="details-header">
            <button className="header-btn back-btn" onClick={onBack}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 12H5" stroke="#1A1F2B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 19L5 12L12 5" stroke="#1A1F2B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            <img src={foodImage} alt="Food Detail" className="header-image" style={{ objectFit: 'cover' }} />

            <button className="header-btn fav-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.84 4.60999C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.60999L12 5.66999L10.94 4.60999C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.60999C1.08 6.68999 1.08 10.06 3.16 12.14L12 21L20.84 12.14C21.8717 11.1083 22.4513 9.70903 22.4513 8.24999C22.4513 6.79096 21.8717 5.39169 20.84 4.60999Z" stroke="#1A1F2B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            <div className="carousel-dots">
                <div className="dot active"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </div>
    );
};

export default DetailsHeader;
