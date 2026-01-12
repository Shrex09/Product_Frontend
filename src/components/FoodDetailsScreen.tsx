import './details/Details.css';
import DetailsHeader from './details/DetailsHeader';
import FoodInfo from './details/FoodInfo';
import AddOns from './details/AddOns';
import BottomCartBar from './details/BottomCartBar';

interface FoodDetailsScreenProps {
    onBack: () => void;
    onAddToCart?: () => void;
}

const FoodDetailsScreen = ({ onBack, onAddToCart }: FoodDetailsScreenProps) => {
    return (
        <div className="details-container">
            <DetailsHeader onBack={onBack} />
            <FoodInfo />
            <AddOns />
            <BottomCartBar onAdd={onAddToCart} />
        </div>
    );
};

export default FoodDetailsScreen;
