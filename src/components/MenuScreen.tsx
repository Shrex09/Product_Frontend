import './Menu.css';

interface MenuScreenProps {
    onClose: () => void;
    onNavigate: (screen: string) => void;
}

const MenuScreen = ({ onClose, onNavigate }: MenuScreenProps) => {
    return (
        <div className="menu-overlay" onClick={onClose}>
            <div className="menu-container" onClick={(e) => e.stopPropagation()}>
                {/* Header */}
                <div className="menu-header">
                    <div style={{ width: '24px' }}></div> {/* Spacer to center title */}
                    <div className="menu-title">Menu</div>
                    <button className="menu-close-btn" onClick={onClose}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>

                {/* Profile Card */}
                <div className="menu-profile-row" onClick={() => onNavigate('profile')}>
                    <img src="https://i.pravatar.cc/150?img=12" alt="Mary Richards" className="menu-avatar" />
                    <div className="menu-user-info">
                        <div className="menu-user-name">Mary Richards</div>
                        <div className="menu-user-phone">(+33)7 35 55 21 02</div>
                    </div>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#CBD5E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </div>

                {/* Loyalty Points */}
                <div className="menu-loyalty-row" onClick={() => onNavigate('loyalty')}>
                    <div className="menu-loyalty-left">
                        <div className="menu-loyalty-icon">★</div>
                        Loyalty Points
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div className="menu-loyalty-points">240</div>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#CBD5E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </div>
                </div>

                {/* Menu List */}
                <div className="menu-items-list">
                    {/* Order History */}
                    <div className="menu-item" onClick={() => onNavigate('history')}>
                        <div className="menu-item-left">
                            <svg className="menu-item-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                            Order History
                        </div>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#CBD5E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </div>

                    {/* Favourites */}
                    <div className="menu-item" onClick={() => onNavigate('favorites')}>
                        <div className="menu-item-left">
                            <svg className="menu-item-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                            Favourites
                        </div>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#CBD5E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </div>

                    {/* Language */}
                    <div className="menu-item" onClick={() => alert("Language Settings")}>
                        <div className="menu-item-left">
                            <svg className="menu-item-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>
                            Language
                        </div>
                        <div className="menu-item-right">
                            English
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#CBD5E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </div>
                    </div>

                    {/* Support */}
                    <div className="menu-item" onClick={() => alert("Support Center")}>
                        <div className="menu-item-left">
                            <svg className="menu-item-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                            Support / Help Center
                        </div>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#CBD5E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </div>

                    {/* Privacy Policy */}
                    <div className="menu-item" onClick={() => alert("Privacy Policy")}>
                        <div className="menu-item-left">
                            <svg className="menu-item-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                            Privacy Policy
                        </div>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#CBD5E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </div>

                    {/* Logout */}
                    <div className="menu-item logout" onClick={() => onNavigate('logout')}>
                        <div className="menu-item-left">
                            <svg className="menu-item-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                            Logout
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="menu-footer">
                    Powered by
                    <span className="menu-logo-mark">Q Quick Dine</span>
                </div>
            </div>
        </div>
    );
};

export default MenuScreen;
