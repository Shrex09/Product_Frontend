import './OrderDetails.css';

interface OrderDetailsScreenProps {
    onBack: () => void;
}

const OrderDetailsScreen = ({ onBack }: OrderDetailsScreenProps) => {
    return (
        <div className="order-details-container">
            {/* Header */}
            <div className="order-details-header">
                <button className="order-details-back-btn" onClick={onBack}>←</button>
                <div className="order-details-title">Order Details</div>
            </div>

            {/* Featured Item */}
            <div className="od-featured-item">
                <img
                    src="https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&q=80&w=200"
                    alt="Double Chicken"
                    className="od-featured-image"
                />
                <div className="od-featured-info">
                    <div className="od-featured-title">Double Chicken & Cheese Fiesta</div>
                    <div className="od-featured-price">AED 10.99</div>
                    <div className="od-featured-addons">3 Add ons &gt;</div>
                </div>
            </div>

            {/* Order Number Row */}
            <div className="od-number-row">
                <div style={{ display: 'flex', gap: '4px' }}>
                    <span className="od-number-label">Order number:</span>
                    <span className="od-number-value">216358</span>
                </div>
                <div className="od-status-badge">Completed</div>
            </div>

            {/* Info Card */}
            <div className="od-info-card">
                <div className="od-info-row">
                    <span className="od-info-label">Table number:</span>
                    <span className="od-info-value">23</span>
                </div>
                <div className="od-info-row">
                    <span className="od-info-label">Date & Time:</span>
                    <span className="od-info-value">12 Dec 2025 · 8:45 PM</span>
                </div>
                <div className="od-info-row">
                    <span className="od-info-label">Payment Method:</span>
                    <span className="od-info-value">Apple Pay</span>
                </div>
            </div>

            <div style={{ fontSize: '0.95rem', fontWeight: '600', color: '#A0AEC0', marginBottom: '12px' }}>Price details</div>

            {/* Price Card */}
            <div className="od-price-details">
                <div className="od-price-row">
                    <span>Subtotal:</span>
                    <span style={{ color: '#1A1F2B', fontWeight: '600' }}>AED 72.00</span>
                </div>
                <div className="od-price-row">
                    <span>VAT:</span>
                    <span style={{ color: '#1A1F2B', fontWeight: '600' }}>AED 13.00</span>
                </div>
                <div className="od-price-row">
                    <span>Service charge:</span>
                    <span style={{ color: '#1A1F2B', fontWeight: '600' }}>AED 5.00</span>
                </div>
                <div className="od-total-row">
                    <span>Total:</span>
                    <span>AED 85.00</span>
                </div>
            </div>

            {/* Download Button */}
            <button className="od-download-btn" onClick={() => alert("Downloading Invoice...")}>
                Download Invoice
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
            </button>
        </div>
    );
};

export default OrderDetailsScreen;
