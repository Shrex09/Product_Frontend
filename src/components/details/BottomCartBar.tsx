import './Details.css';

interface BottomCartBarProps {
    onAdd?: () => void;
}

const BottomCartBar = ({ onAdd }: BottomCartBarProps) => {
    return (
        <div className="bottom-cart-bar">
            <div className="item-count-control">
                <button className="count-btn">-</button>
                <span className="item-count">1</span>
                <button className="count-btn">+</button>
            </div>

            <button className="add-to-cart-btn" onClick={onAdd}>
                <span>Add to Cart</span>
                <span>AED 30.99</span>
            </button>
        </div>
    );
};

export default BottomCartBar;
