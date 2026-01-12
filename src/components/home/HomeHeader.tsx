import logoImage from '../../assets/image.png';

const HomeHeader = () => {
    return (
        <div className="home-header">
            <div className="header-logo">
                <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: '#FF6B35',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden'
                }}>
                    {/* Using inline style for small logo wrapper to match splash theme roughly */}
                    <img src={logoImage} alt="Cheffest" style={{ width: '24px', height: '24px', objectFit: 'contain', mixBlendMode: 'plus-lighter' }} />
                </div>
                <h1>Cheffest</h1>
            </div>
            <button className="cart-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 20C9 21.1 8.1 22 7 22C5.9 22 5 21.1 5 20C5 18.9 5.9 18 7 18C8.1 18 9 18.9 9 20Z" stroke="#1A1F2B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M20 20C20 21.1 19.1 22 18 22C16.9 22 16 21.1 16 20C16 18.9 16.9 18 18 18C19.1 18 20 18.9 20 20Z" stroke="#1A1F2B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="#1A1F2B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </div>
    );
};

export default HomeHeader;
