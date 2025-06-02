import React from 'react';
import PlantCard from '../molecules/PlantCard';
import type { Plant } from '../molecules/PlantCard';
import { useMediaQuery } from '@mui/material';
import styles from './PlantGrid.module.css';

type PlantGridProps = {
  plants: Plant[];
  className?: string;
};

const PlantGrid: React.FC<PlantGridProps> = ({ plants, className = '' }) => {
  // Responsividade usando useMediaQuery
  const isMobile = useMediaQuery('(max-width:600px)');
  const isTablet = useMediaQuery('(min-width:601px) and (max-width:960px)');
  
  // Determinar o número de colunas com base no tamanho da tela
  const getGridClass = () => {
    if (isMobile) return styles.oneColumn;
    if (isTablet) return styles.twoColumns;
    return styles.threeColumns;
  };

  return (
    <div className={`${styles.grid} ${getGridClass()} ${className}`}>
      {plants.map((plant) => (
        <div key={plant.id} className={styles.gridItem}>
          <PlantCard plant={plant} />
        </div>
      ))}
    </div>
  );
};

export default PlantGrid;
