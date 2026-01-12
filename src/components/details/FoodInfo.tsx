import './Details.css';

const FoodInfo = () => {
    return (
        <div className="info-section">
            <h2 className="food-title">Black Lentil Bara with Minced Buff</h2>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span className="price-badge">AED 30.99</span>

                <div className="rating-row" style={{ marginTop: 0, marginBottom: 0 }}>
                    <span className="rating-pill">4.5</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFC107" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                    <span className="rating-count">(123)</span>
                </div>
            </div>

            <p className="description" style={{ marginTop: '20px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
    );
};

export default FoodInfo;
