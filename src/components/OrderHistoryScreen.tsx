import './OrderHistory.css';
// Using imported images or placeholders.

interface OrderHistoryScreenProps {
    onBack: () => void;
}

interface HistoryItem {
    id: number;
    title: string;
    image: string;
    addonsCount: number;
    price: number;
}

interface HistoryGroup {
    date: string;
    items: HistoryItem[];
}

const OrderHistoryScreen = ({ onBack }: OrderHistoryScreenProps) => {
    // Mock Data based on design
    const historyData: HistoryGroup[] = [
        {
            date: '12 Dec 2025',
            items: [
                { id: 1, title: 'Double Chicken & Cheese Fiesta', image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&q=80&w=200', addonsCount: 3, price: 10.99 },
                { id: 2, title: 'Naked Jackfruit Burrito Bowl', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=200', addonsCount: 3, price: 10.99 },
                { id: 3, title: 'Pasta Alla Gricia', image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=200', addonsCount: 3, price: 10.99 },
            ]
        },
        {
            date: '10 Dec 2025',
            items: [
                { id: 4, title: 'Pretzel Chicken Noodle Soup', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=200', addonsCount: 3, price: 10.99 },
                { id: 5, title: 'Spicy BBQ Jackfruit Tacos', image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=200', addonsCount: 3, price: 10.99 },
            ]
        }
    ];

    return (
        <div className="history-container">
            {/* Header */}
            <div className="history-header">
                <button className="history-back-btn" onClick={onBack}>←</button>
                <div className="history-title">Order History</div>
            </div>

            {/* Content */}
            <div className="history-content">
                {historyData.map((group, index) => (
                    <div key={index}>
                        <div className="history-date-group">{group.date}</div>
                        {group.items.map(item => (
                            <div key={item.id} className="history-item-card">
                                <img src={item.image} alt={item.title} className="history-item-image" />
                                <div className="history-item-details">
                                    <div className="history-item-title">{item.title}</div>
                                    <div className="history-item-addons">{item.addonsCount} Add ons</div>
                                    <div className="history-item-price">AED {item.price.toFixed(2)}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrderHistoryScreen;
