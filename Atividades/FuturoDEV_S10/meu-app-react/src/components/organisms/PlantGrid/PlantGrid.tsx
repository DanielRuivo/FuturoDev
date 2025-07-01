import React from 'react';
import { Grid, Container, useMediaQuery, useTheme } from '@mui/material';
import { PlantCard } from '../../molecules';
import { Plant } from '../../../types';
import styles from './PlantGrid.module.css';

interface PlantGridProps {
  plants: Plant[];
  onAddToCart?: (plant: Plant) => void;
}

export const PlantGrid: React.FC<PlantGridProps> = ({ plants, onAddToCart }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.between('md', 'lg'));

  const getGridColumns = () => {
    if (isMobile) return 12; // 1 coluna em mobile
    if (isTablet) return 6;  // 2 colunas em tablet
    return 4;                // 3 colunas em desktop
  };

  return (
    <Container maxWidth="lg" className={styles.container}>
      <Grid container spacing={3} className={styles.grid}>
        {plants.map((plant) => (
          <Grid 
            item 
            xs={12} 
            md={6} 
            lg={4} 
            key={plant.id}
            className={styles.gridItem}
          >
            <PlantCard 
              plant={plant} 
              onAddToCart={onAddToCart}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

