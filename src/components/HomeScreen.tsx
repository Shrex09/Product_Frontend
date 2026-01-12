import './home/Home.css';
import HomeHeader from './home/HomeHeader';
import SearchBar from './home/SearchBar';
import PromoBanner from './home/PromoBanner';
import CategoryRail from './home/CategoryRail';
import MenuSection from './home/MenuSection';

interface HomeScreenProps {
    onItemClick?: () => void;
    onViewHistory: () => void;
}

const HomeScreen = ({ onItemClick, onViewHistory }: HomeScreenProps) => {
    return (
        <div className="home-container no-scrollbar">
            {/* Custom Header with Menu/Profile Button */}
            <div style={{ padding: '0 24px', marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <HomeHeader />
                <button 
                    onClick={onViewHistory}
                    style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '0'
                    }}
                >
                    <img 
                        src="https://i.pravatar.cc/150?img=12" 
                        alt="Profile" 
                        style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} 
                    />
                </button>
            </div>

            <SearchBar />
            <PromoBanner />
            <CategoryRail />
            <MenuSection onItemClick={onItemClick} />
            {/* Additional padding for bottom navigation if we had one */}
            <div style={{ height: '40px' }}></div>
        </div>
    );
};

export default HomeScreen;
