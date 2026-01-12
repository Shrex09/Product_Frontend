import './Cart.css';

interface CartItemProps {
    title: string;
    addonsText: string;
    price: string;
    quantity: number;
    image: string; // Placeholder or emoji
}

const CartItem = ({ title, addonsText, price, quantity, image }: CartItemProps) => {
    return (
        <div className="cart-item">
            {/* Image Placeholder */}
            {/* If real image url provided use img tag, else use div with color */}
            {image.startsWith('http') || image.startsWith('/') || image.startsWith('data') ?
                <img src={image} alt={title} className="item-image" /> :
                <div className="item-image" style={{ backgroundColor: '#F1F2F6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px' }}>
                    {image}
                </div>
            }

            <div className="item-details">
                <div>
                    <h3 className="item-title">{title}</h3>
                    <p className="item-addons-text">{addonsText}</p>
                </div>

                <div className="item-controls">
                    <div className="qty-stepper">
                        <button className="stepper-btn">−</button>
                        <span className="qty-display">{quantity}</span>
                        <button className="stepper-btn">+</button>
                    </div>
                    <span className="item-price">{price}</span>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
