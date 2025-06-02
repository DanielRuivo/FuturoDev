import React from 'react';
import Button from '../atoms/Button';
import PriceTag from '../atoms/PriceTag';
import PlantIcon from '../atoms/PlantIcon';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import styles from './PlantCard.module.css';

export type Plant = {
  id: string;
  name: string;
  price: number;
  light: 'sun' | 'shade';
};

type PlantCardProps = {
  plant: Plant;
  onAddToCart?: () => void;
  className?: string;
};

const PlantCard: React.FC<PlantCardProps> = ({ 
  plant, 
  onAddToCart,
  className = '' 
}) => {
  return (
    <div className={`${styles.card} ${className}`}>
      <div className={styles.iconContainer}>
        <PlantIcon size="lg" />
        <div className={styles.lightIcon}>
          {plant.light === 'sun' ? (
            <WbSunnyIcon fontSize="small" className={styles.sunIcon} />
          ) : (
            <FilterDramaIcon fontSize="small" className={styles.shadeIcon} />
          )}
        </div>
      </div>
      <h3 className={styles.name}>{plant.name}</h3>
      <div className={styles.priceContainer}>
        <PriceTag value={plant.price} />
      </div>
      <div className={styles.buttonContainer}>
        <Button 
          variant="primary" 
          onClick={onAddToCart}
        >
          Adicionar ao Carrinho
        </Button>
      </div>
    </div>
  );
};

export default PlantCard;
