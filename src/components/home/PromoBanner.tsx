import './Home.css';

const PromoBanner = () => {
    return (
        <div style={{
            width: '100%',
            height: '160px',
            borderRadius: '24px',
            background: 'linear-gradient(90deg, #FFB703 0%, #FF6B35 100%)',
            position: 'relative',
            overflow: 'hidden',
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'center',
            padding: '20px',
            boxSizing: 'border-box',
            boxShadow: '0 8px 24px rgba(255, 107, 53, 0.25)'
        }}>
            {/* Shapes for decoration */}
            <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.2)'
            }}/>
            
            <div style={{
                flex: 1,
                color: 'white',
                zIndex: 1
            }}>
                <span style={{
                    fontFamily: 'cursive', 
                    fontSize: '1.2rem',
                    opacity: 0.9
                }}>Delicious</span>
                <h2 style={{
                    fontSize: '1.8rem',
                    fontWeight: 900,
                    margin: '5px 0',
                    lineHeight: 1,
                    textTransform: 'uppercase'
                }}>Tasty<br/>Burger</h2>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.8rem',
                    marginTop: '10px'
                }}>
                    <span>www.namecompany.com</span>
                </div>
            </div>
            
            <div style={{
                width: '120px',
                height: '120px',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {/* Burger Placeholder Emoji since we don't have the specific burger cut-out */}
                <span style={{ fontSize: '80px', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))' }}>🍔</span>
            </div>
        </div>
    );
};

export default PromoBanner;
