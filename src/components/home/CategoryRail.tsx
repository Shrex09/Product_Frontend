import './Home.css';

const categories = [
    { name: 'Burger', icon: '🍔' },
    { name: 'Pizza', icon: '🍕' },
    { name: 'Doughnut', icon: '🍩' },
    { name: 'Hotdog', icon: '🌭' },
    { name: 'Sushi', icon: '🍣' },
    { name: 'Tacos', icon: '🌮' },
];

const CategoryRail = () => {
    return (
        <div style={{ marginBottom: '24px' }}>
            <div className="section-header">
                <h3 className="section-title">Popular Categories 🔥</h3>
                <span className="see-more">See more &gt;</span>
            </div>

            <div className="no-scrollbar" style={{
                display: 'flex',
                gap: '16px',
                overflowX: 'auto',
                paddingBottom: '5px' // Space for shadow if needed
            }}>
                {categories.map((cat) => (
                    <div key={cat.name} style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '8px',
                        minWidth: '70px'
                    }}>
                        <div style={{
                            width: '64px',
                            height: '64px',
                            backgroundColor: 'white',
                            borderRadius: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '32px',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                            cursor: 'pointer'
                        }}>
                            {cat.icon}
                        </div>
                        <span style={{
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            color: '#1A1F2B'
                        }}>{cat.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryRail;
