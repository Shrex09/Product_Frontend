import './Cart.css';

interface CartHeaderProps {
    onBack: () => void;
}

const CartHeader = ({ onBack }: CartHeaderProps) => {
    return (
        <div className="cart-header">
            <button className="back-btn" onClick={onBack}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 12H5" stroke="#1A1F2B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 19L5 12L12 5" stroke="#1A1F2B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            <h1 className="cart-title">Cart</h1>
            <div style={{ width: '40px' }}></div> {/* Spacer for centering */}
        </div>
    );
};

export default CartHeader;
