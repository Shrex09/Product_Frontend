import { useState } from 'react';
import './cart/Cart.css';
import CartHeader from './cart/CartHeader';
import CartItem from './cart/CartItem';
import KitchenNotes from './cart/KitchenNotes';
import OrderSummary from './cart/OrderSummary';
import PhoneLoginModal from './checkout/PhoneLoginModal';
import OTPVerificationModal from './checkout/OTPVerificationModal';

// Mock Data
const cartItems = [
    {
        id: 1,
        title: 'Double Chicken & Cheese Fiesta',
        addonsText: '3 Add ons',
        price: 'AED 30.99',
        quantity: 2,
        image: '🥘' // Using emoji as placeholder matching the mood
    },
    {
        id: 2,
        title: 'Buff Choila',
        addonsText: '2 Add ons',
        price: 'AED 10.99',
        quantity: 1,
        image: '🍕'
    },
    {
        id: 3,
        title: 'Kachila with Mustard Oil and Garlic',
        addonsText: '3 Add ons',
        price: 'AED 20.99',
        quantity: 1,
        image: '🥗'
    }
];

interface CartScreenProps {
    onBack: () => void;
    onCheckout: () => void;
}

const CartScreen = ({ onBack, onCheckout }: CartScreenProps) => {
    const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);
    const [isOTPModalOpen, setIsOTPModalOpen] = useState(false);
    
    // phoneNumber state removed as it's not currently used in UI
    // const [phoneNumber, setPhoneNumber] = useState(''); 

    const handleCheckoutClick = () => {
        setIsPhoneModalOpen(true);
    };

    const handlePhoneSubmit = (phone: string) => {
        console.log("Phone submitted:", phone);
        setIsPhoneModalOpen(false);
        setTimeout(() => setIsOTPModalOpen(true), 300);
    };

    const handleOTPSubmit = (otp: string) => {
        console.log("OTP submitted:", otp);
        setIsOTPModalOpen(false);
        onCheckout();
    };

    return (
        <div className="cart-container">
            <CartHeader onBack={onBack} />

            <div style={{ flex: 1 }}> {/* Scrollable content wrapper */}
                {cartItems.map(item => (
                    <CartItem
                        key={item.id}
                        title={item.title}
                        addonsText={item.addonsText}
                        price={item.price}
                        quantity={item.quantity}
                        image={item.image}
                    />
                ))}

                <KitchenNotes />
                <OrderSummary onCheckout={handleCheckoutClick} />

                {/* Bottom padding */}
                <div style={{ height: '40px' }}></div>
            </div>

            <PhoneLoginModal
                isOpen={isPhoneModalOpen}
                onClose={() => setIsPhoneModalOpen(false)}
                onSubmit={handlePhoneSubmit}
            />

            <OTPVerificationModal
                isOpen={isOTPModalOpen}
                onClose={() => setIsOTPModalOpen(false)}
                onSubmit={handleOTPSubmit}
            />
        </div>
    );
};

export default CartScreen;
