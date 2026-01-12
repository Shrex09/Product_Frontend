import './Home.css';

const filters = ['Veg', 'Non-Veg', 'Bestseller', 'Spicy'];

// Mock items for visual representation
const menuItems = [
    { title: 'Home made Pizza', price: '$8.50', rating: '4.5', image: '🍕', time: '15-20 min' },
    { title: 'Tandoori Chicken', price: '$12.00', rating: '4.8', image: '🍗', time: '30-45 min' },
    { title: 'Chili Burger', price: '$6.50', rating: '4.2', image: '🌶️', time: '10-15 min' }
];

interface MenuSectionProps {
    onItemClick?: () => void;
}

const MenuSection = ({ onItemClick }: MenuSectionProps) => {
    return (
        <div style={{ marginBottom: '20px' }}>
            <div className="section-header">
                <h3 className="section-title">Menu 🍹</h3>
                <span className="see-more">See more &gt;</span>
            </div>

            {/* Filter Chips */}
            <div className="no-scrollbar" style={{
                display: 'flex',
                gap: '12px',
                overflowX: 'auto',
                marginBottom: '20px'
            }}>
                {filters.map((filter) => (
                    <div key={filter} style={{
                        padding: '8px 16px',
                        backgroundColor: '#F1F2F6',
                        borderRadius: '20px',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: '#4A5568',
                        whiteSpace: 'nowrap',
                        cursor: 'pointer'
                    }}>
                        {filter}
                    </div>
                ))}
            </div>

            {/* Menu List - Simplified Horizontal or Vertical? Design shows bottom list. Let's do a vertical stack for now. */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
            }}>
                {menuItems.map((item, index) => (
                    <div key={index} onClick={onItemClick} style={{
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: 'white',
                        borderRadius: '20px',
                        padding: '12px',
                        gap: '16px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                        cursor: 'pointer'
                    }}>
                        <div style={{
                            width: '80px',
                            height: '80px',
                            backgroundColor: '#F8F9FD',
                            borderRadius: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '40px'
                        }}>
                            {item.image}
                        </div>
                        <div style={{ flex: 1 }}>
                            <h4 style={{ margin: '0 0 4px 0', fontSize: '1rem' }}>{item.title}</h4>
                            <p style={{ margin: '0 0 8px 0', fontSize: '0.8rem', color: '#A0AEC0' }}>{item.time}</p>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ fontWeight: 800, fontSize: '1.1rem' }}>{item.price}</span>
                                <span style={{ fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '4px' }}>⭐ {item.rating}</span>
                            </div>
                        </div>
                        <div style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            backgroundColor: '#F1F2F6',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer'
                        }}>
                            ♡
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MenuSection;
