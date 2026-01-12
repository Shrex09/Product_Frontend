import { useEffect, useState } from 'react';
import './App.css'
import LoadingScreen from './components/LoadingScreen'
import WelcomeScreen from './components/WelcomeScreen'
import HomeScreen from './components/HomeScreen'
import FoodDetailsScreen from './components/FoodDetailsScreen'
import CartScreen from './components/CartScreen'
import SuccessScreen from './components/SuccessScreen'
import OrderStatusScreen from './components/OrderStatusScreen';
import PaymentScreen from './components/PaymentScreen';
import PaymentSuccessScreen from './components/PaymentSuccessScreen';
import FeedbackScreen from './components/FeedbackScreen';
import OrderHistoryScreen from './components/OrderHistoryScreen';
import MenuScreen from './components/MenuScreen';
import ProfileScreen from './components/ProfileScreen';
import FavoritesScreen from './components/FavoritesScreen';
import LoyaltyScreen from './components/LoyaltyScreen';
import OrderDetailsScreen from './components/OrderDetailsScreen';

function App() {
  const [screen, setScreen] = useState<'loading' | 'welcome' | 'home' | 'details' | 'cart' | 'success' | 'status' | 'payment' | 'payment-success' | 'feedback' | 'history' | 'profile' | 'favorites' | 'loyalty' | 'order-details'>('loading');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Simulate loading process
  useEffect(() => {
    // In a real app, this would check auth status, fetch initial data, etc.
    const timer = setTimeout(() => {
      setScreen('welcome');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleStartOrdering = () => {
    setScreen('home');
  };

  const handleItemClick = () => {
    setScreen('details');
  };

  const handleBackToHome = () => {
    setScreen('home');
  };

  const handleAddToCart = () => {
    setScreen('cart');
  };

  const handleBackFromCart = () => {
    setScreen('details'); // Or home
  };

  const handleCheckoutSuccess = () => {
    setScreen('success');
  };

  const handleViewStatus = () => {
    setScreen('status');
  };

  const handleMakePayment = () => {
    setScreen('payment');
  };

  const handlePaymentComplete = () => {
    setScreen('payment-success');
  };

  const handleLeaveFeedback = () => {
    setScreen('feedback');
  };

  const handleSubmitFeedback = () => {
    alert("Feedback Submitted!");
    setScreen('home');
  };

  // const handleViewHistory = () => {
  //   setScreen('history');
  // };

  const handleOpenMenu = () => {
      // Instead of navigating, we might want to overlay, but for this simple routing let's say "profile icon" click opens menu
      setIsMenuOpen(true);
  };

  const handleMenuNavigate = (route: string) => {
      setIsMenuOpen(false);
      if (route === 'profile') setScreen('profile');
      if (route === 'history') setScreen('history');
      if (route === 'favorites') setScreen('favorites');
      if (route === 'loyalty') setScreen('loyalty');
      if (route === 'logout') setScreen('welcome');
  };

  return (
    <>
      {screen === 'loading' && <LoadingScreen />}
      {screen === 'welcome' && <WelcomeScreen onStart={handleStartOrdering} />}
      {screen === 'home' && (
        <>
            <HomeScreen onItemClick={handleItemClick} onViewHistory={handleOpenMenu} />
            {isMenuOpen && <MenuScreen onClose={() => setIsMenuOpen(false)} onNavigate={handleMenuNavigate} />}
        </>
      )}
      {screen === 'details' && <FoodDetailsScreen onBack={handleBackToHome} onAddToCart={handleAddToCart} />}
      {screen === 'cart' && <CartScreen onBack={handleBackFromCart} onCheckout={handleCheckoutSuccess} />}
      {screen === 'success' && <SuccessScreen onGoHome={handleBackToHome} onViewStatus={handleViewStatus} onMakePayment={handleMakePayment} />}
      {screen === 'status' && <OrderStatusScreen onBack={handleBackToHome} />}
      {screen === 'payment' && <PaymentScreen onBack={handleBackToHome} onPay={handlePaymentComplete} />}
      {screen === 'payment-success' && 
        <PaymentSuccessScreen 
          onBack={handleBackToHome} 
          onLeaveFeedback={handleLeaveFeedback} 
          onCallCaptain={() => alert("Captain Called")} 
        />
      }
      {screen === 'feedback' && 
        <FeedbackScreen 
          onBack={() => setScreen('payment-success')} 
          onSubmit={handleSubmitFeedback} 
        />
      }
      {screen === 'history' && <OrderHistoryScreen onBack={handleBackToHome} />}
      {screen === 'profile' && <ProfileScreen onBack={handleBackToHome} onSave={handleBackToHome} />}
      {screen === 'favorites' && <FavoritesScreen onBack={handleBackToHome} />}
      {screen === 'loyalty' && <LoyaltyScreen onBack={handleBackToHome} />}
      {screen === 'order-details' && <OrderDetailsScreen onBack={() => setScreen('history')} />}
    </>
  )
}

export default App
