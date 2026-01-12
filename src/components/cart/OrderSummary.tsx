import './Cart.css';

interface OrderSummaryProps {
    onCheckout: () => void;
}

const OrderSummary = ({ onCheckout }: OrderSummaryProps) => {
    return (
        <div className="summary-section">
            <h3 className="summary-title">Order Summary</h3>

            <div className="summary-row">
                <span>Subtotal:</span>
                <span style={{ color: '#1A1F2B', fontWeight: 600 }}>AED 72.00</span>
            </div>

            <div className="summary-row">
                <span>Tax / VAT (5%):</span>
                <span style={{ color: '#1A1F2B', fontWeight: 600 }}>AED 3.60</span>
            </div>

            <div className="summary-row total">
                <span>Total:</span>
                <span>AED 75.60</span>
            </div>

            <button className="checkout-btn" onClick={onCheckout}>
                Checkout
            </button>
        </div>
    );
};

export default OrderSummary;
