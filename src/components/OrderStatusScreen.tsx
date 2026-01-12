import './OrderStatus.css';

interface OrderStatusScreenProps {
    onBack?: () => void;
}

const OrderStatusScreen = ({ onBack }: OrderStatusScreenProps) => {

    // Mock Timeline Data
    const steps = [
        {
            title: "Order Placed",
            subtitle: "We've received your order",
            status: "completed", // completed, active, pending
            icon: "check"
        },
        {
            title: "Preparing",
            subtitle: "We are preparing your order",
            status: "active",
            icon: "dot"
        },
        {
            title: "Ready to Serve",
            subtitle: "Your order is ready to serve",
            status: "pending",
            icon: "cloche"
        },
        {
            title: "Order Served",
            subtitle: "Your order has been served",
            status: "pending",
            icon: "serving"
        }
    ];

    return (
        <div className="status-container">
            {/* Header */}
            <div className="status-header">
                <button className="back-btn-circle" onClick={onBack}>
                    ←
                </button>
                <div className="status-page-title">Order Status</div>
            </div>

            {/* Order Card */}
            <div className="order-card-container">
                <div className="order-status-card">
                    <img src="https://via.placeholder.com/70" alt="Order Thumbnail" className="order-thumb" />
                    <div className="order-info">
                        <div className="order-item-title">Double Chicken & Cheese Fiesta</div>
                        <div className="order-number">Order number: <span>216358</span></div>
                    </div>
                </div>
            </div>

            {/* Timeline */}
            <div className="timeline-section">
                <div className="estimated-time">
                    Estimated time: <span>30 mins</span>
                </div>

                <div className="timeline">
                    {steps.map((step, index) => (
                        <div key={index} className={`timeline-item ${step.status}`}>
                            <div className="timeline-icon-container">
                                {step.status === 'completed' && (
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                )}
                                {step.status === 'active' && <div className="dot"></div>}
                                {step.status === 'pending' && <div className="dot" style={{ backgroundColor: '#E2E8F0' }}></div>}
                            </div>
                            <div className="timeline-content">
                                <h4>{step.title}</h4>
                                <p>{step.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Call Waiter FAB */}
            <button className="call-waiter-fab" onClick={() => alert("Waiter Called!")}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
                Call Waiter
            </button>
        </div>
    );
};

export default OrderStatusScreen;
