import { useState } from 'react';
import './Payment.css';
import SplitBillModal from './SplitBillModal';

interface PaymentScreenProps {
    onBack: () => void;
    onPay: () => void;
}

const PaymentScreen = ({ onBack, onPay }: PaymentScreenProps) => {
    const [selectedTip, setSelectedTip] = useState<number | null>(null);
    const [selectedMethod, setSelectedMethod] = useState<'benefit' | 'apple' | 'google' | 'card'>('apple');
    const [isSplitModalOpen, setIsSplitModalOpen] = useState(false);

    const subtotal = 72.00;
    const vat = 13.00;
    const service = 5.00;
    const initialTotal = 90.00;
    
    // Calculate total based on tip
    const total = initialTotal + (selectedTip || 0);

    const tips = [5, 10, 20, 30, 50];

    return (
        <div className="payment-container">
            {/* Scrollable Content Wrapper */}
            <div className="payment-scroll-content">
                {/* Header */}
                <div className="payment-header">
                    <button className="back-btn-circle" onClick={onBack}>
                        ←
                    </button>
                    <div className="payment-title">Your Bill</div>
                </div>

                {/* Bill Details */}
                <div className="bill-section">
                    <div className="bill-row">
                        <span>Subtotal:</span>
                        <span>AED {subtotal.toFixed(2)}</span>
                    </div>
                    <div className="bill-row">
                        <span>VAT:</span>
                        <span>AED {vat.toFixed(2)}</span>
                    </div>
                    <div className="bill-row">
                        <span>Service charge:</span>
                        <span>AED {service.toFixed(2)}</span>
                    </div>
                    
                    {/* Dashed Line handled by CSS border-top on .total */}
                    
                    <div className="bill-row total">
                        <span>Total:</span>
                        <span>AED {total.toFixed(2)}</span>
                    </div>

                    <button className="split-bill-btn" onClick={() => setIsSplitModalOpen(true)}>
                        Split Bill
                    </button>
                </div>

                {/* Tip Section */}
                <div className="tip-section">
                    <div className="section-label">Tip for waiter</div>
                    <div className="tip-options">
                        {tips.map(amount => (
                            <div 
                                key={amount}
                                className={`tip-chip ${selectedTip === amount ? 'selected' : ''}`}
                                onClick={() => setSelectedTip(selectedTip === amount ? null : amount)}
                            >
                                AED {amount}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Payment Methods */}
                <div className="payment-methods-section">
                    <div className="section-label">Choose a payment method</div>
                    
                    {/* Benefit Pay */}
                    <div 
                        className={`method-row ${selectedMethod === 'benefit' ? 'selected' : ''}`}
                        onClick={() => setSelectedMethod('benefit')}
                    >
                        <div className="method-radio"></div>
                        <div className="method-icon" style={{color: '#0072CE'}}>
                             {/* Benefit Pay Icon Placeholder - Blue Credit Card / Signal */}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="2" y="5" width="20" height="14" rx="2" />
                                <line x1="2" y1="10" x2="22" y2="10" />
                            </svg>
                        </div>
                        <div className="method-name">Benefit Pay</div>
                    </div>

                    {/* Apple Pay */}
                    <div 
                        className={`method-row ${selectedMethod === 'apple' ? 'selected' : ''}`}
                        onClick={() => setSelectedMethod('apple')}
                    >
                        <div className="method-radio"></div>
                        <div className="method-icon" style={{color: 'black'}}>
                            {/* Apple Logo SVG */}
                            <svg width="20" height="24" viewBox="0 0 384 512" fill="currentColor">
                                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z"/>
                            </svg>
                        </div>
                        <div className="method-name">Apple Pay</div>
                    </div>

                    {/* Google Pay */}
                     <div 
                        className={`method-row ${selectedMethod === 'google' ? 'selected' : ''}`}
                        onClick={() => setSelectedMethod('google')}
                    >
                        <div className="method-radio"></div>
                        <div className="method-icon">
                             {/* Google Logo SVG - Simplified G */}
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M17.788 5.108A9 9 0 1021 12h-8" />
                            </svg>
                        </div>
                        <div className="method-name">Google Pay</div>
                    </div>

                    {/* Card on Table */}
                     <div 
                        className={`method-row ${selectedMethod === 'card' ? 'selected' : ''}`}
                        onClick={() => setSelectedMethod('card')}
                    >
                        <div className="method-radio"></div>
                        <div className="method-icon" style={{color: '#4285F4'}}>
                            {/* Card Icon */}
                             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                                <line x1="1" y1="10" x2="23" y2="10"></line>
                            </svg>
                        </div>
                        <div className="method-name">Card on Table</div>
                    </div>
                </div>
            </div>

            {/* Pay Button - Restored */}
            <div className="pay-btn-wrapper">
                <button className="pay-btn" onClick={onPay}>
                    Pay AED {total.toFixed(2)}
                </button>
            </div>

            <SplitBillModal 
                isOpen={isSplitModalOpen} 
                onClose={() => setIsSplitModalOpen(false)} 
                totalAmount={total} 
            />
        </div>
    );
};

export default PaymentScreen;
