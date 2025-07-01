import React from 'react';
import { Card, CardContent, CardActions, Typography, Chip } from '@mui/material';
import { WbSunny, Brightness3 } from '@mui/icons-material';
import { Button, PriceTag, PlantIcon } from '../../atoms';
import { Plant } from '../../../types';
import styles from './PlantCard.module.css';

interface PlantCardProps {
  plant: Plant;
  onAddToCart?: (plant: Plant) => void;
}

export const PlantCard: React.FC<PlantCardProps> = ({ plant, onAddToCart }) => {
  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(plant);
    }
  };

  const getLightIcon = () => {
    return plant.light === 'sun' ? (
      <WbSunny className={styles.lightIcon} />
    ) : (
      <Brightness3 className={styles.lightIcon} />
    );
  };

  const getLightLabel = () => {
    return plant.light === 'sun' ? 'Sol' : 'Sombra';
  };

  return (
    <Card className={styles.card} elevation={3}>
      <CardContent className={styles.content}>
        <div className={styles.header}>
          <PlantIcon size="lg" className={styles.plantIcon} />
          <Chip
            icon={getLightIcon()}
            label={getLightLabel()}
            size="small"
            className={styles.lightChip}
            variant="outlined"
          />
        </div>
        
        <Typography variant="h6" component="h3" className={styles.plantName}>
          {plant.name}
        </Typography>
        
        <div className={styles.priceContainer}>
          <PriceTag value={plant.price} />
        </div>
      </CardContent>
      
      <CardActions className={styles.actions}>
        <Button 
          variant="primary" 
          onClick={handleAddToCart}
        >
          Adicionar ao Carrinho
        </Button>
      </CardActions>
    </Card>
  );
};

