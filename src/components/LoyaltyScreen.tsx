import './Loyalty.css';

interface LoyaltyScreenProps {
    onBack: () => void;
}

const LoyaltyScreen = ({ onBack }: LoyaltyScreenProps) => {
    const loyaltyItems = [
        { id: 1, title: 'Double Chicken & Cheese Fiesta', image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&q=80&w=200', points: 10, price: 10.99, date: '12 Dec 2025' },
        { id: 2, title: 'Double Chicken & Cheese Fiesta', image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&q=80&w=200', points: 20, price: 10.99, date: '12 Dec 2025' },
        { id: 3, title: 'Double Chicken & Cheese Fiesta', image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&q=80&w=200', points: 15, price: 10.99, date: '12 Dec 2025' },
        { id: 4, title: 'Double Chicken & Cheese Fiesta', image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&q=80&w=200', points: 20, price: 10.99, date: '12 Dec 2025' },
        { id: 5, title: 'Double Chicken & Cheese Fiesta', image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&q=80&w=200', points: 30, price: 10.99, date: '12 Dec 2025' },
    ];

    return (
        <div className="loyalty-container">
            {/* Header */}
            <div className="loyalty-header">
                <button className="loyalty-back-btn" onClick={onBack}>←</button>
                <div className="loyalty-title">Loyalty Points</div>
            </div>

            {/* Total Points */}
            <div className="loyalty-card">
                <div className="loyalty-card-label">
                    <div className="loyalty-card-icon">★</div>
                    Loyalty Points:
                </div>
                <div className="loyalty-card-value">240</div>
            </div>

            <div className="loyalty-history-title">Loyalty Points Earned</div>

            {/* List */}
            <div className="loyalty-list">
                {loyaltyItems.map(item => (
                    <div key={item.id} className="loyalty-item">
                        <img src={item.image} alt={item.title} className="loyalty-item-image" />
                        <div className="loyalty-item-details">
                            <div className="loyalty-item-title">{item.title}</div>
                            <div className="loyalty-item-points">
                                <span className="loyalty-star-small">★</span> {item.points} Loyalty Points
                            </div>
                            <div className="loyalty-item-footer">
                                <span className="loyalty-price">AED {item.price.toFixed(2)}</span>
                                <span>{item.date}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LoyaltyScreen;
