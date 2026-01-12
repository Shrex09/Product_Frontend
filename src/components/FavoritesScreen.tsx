import './Favorites.css';

interface FavoritesScreenProps {
    onBack: () => void;
}

const FavoritesScreen = ({ onBack }: FavoritesScreenProps) => {
    // Mock Data based on design
    const favorites = [
        { id: 1, title: 'Double Chicken & Cheese Fiesta', image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&q=80&w=200', price: 10.99 },
        { id: 2, title: 'Chicken and Vegetable Kebabs with Rice Pilaf', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=200', price: 10.99 },
        { id: 3, title: 'Butter Chicken', image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=200', price: 10.99 },
        { id: 4, title: 'La Margherita pizza slice', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=200', price: 10.99 },
        { id: 5, title: 'Beef and Broccoli Stir Fry with Rice', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=200', price: 10.99 },
    ];

    return (
        <div className="favorites-container">
            {/* Header */}
            <div className="favorites-header">
                <button className="favorites-back-btn" onClick={onBack}>←</button>
                <div className="favorites-title">Favorites</div>
            </div>

            {/* List */}
            <div className="favorites-list">
                {favorites.map(item => (
                    <div key={item.id} className="favorite-item-card">
                        <div className="favorite-image-wrapper">
                            <img src={item.image} alt={item.title} className="favorite-image" />
                            <div className="favorite-heart-icon">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="#FF5252" stroke="#FF5252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="favorite-details">
                            <div className="favorite-title">{item.title}</div>
                            <div className="favorite-actions">
                                <span className="favorite-price">AED {item.price.toFixed(2)}</span>
                                <button className="favorite-add-btn">
                                    Add +
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FavoritesScreen;
