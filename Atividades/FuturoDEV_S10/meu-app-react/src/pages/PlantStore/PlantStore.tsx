import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';
import { StoreLayout } from '../../components/templates';
import { PlantGrid } from '../../components/organisms';
import { Plant } from '../../types';
import styles from './PlantStore.module.css';

const mockPlants: Plant[] = [
  { id: "1", name: "Suculenta", price: 29.9, light: "sun" },
  { id: "2", name: "Samambaia", price: 39.9, light: "shade" },
  { id: "3", name: "Cacto Mini", price: 19.9, light: "sun" },
  { id: "4", name: "Espada de São Jorge", price: 45.9, light: "shade" },
  { id: "5", name: "Orquídea", price: 59.9, light: "shade" },
  { id: "6", name: "Lírio da Paz", price: 49.9, light: "shade" },
];

export const PlantStore: React.FC = () => {
  const [plants] = useState<Plant[]>(mockPlants);

  const handleAddToCart = (plant: Plant) => {
    console.log('Adicionado ao carrinho:', plant);
    // Implementação futura do carrinho
  };

  return (
    <StoreLayout>
      <Box className={styles.storeHeader}>
        <Typography variant="h4" component="h2" className={styles.storeTitle}>
          Nossas Plantas
        </Typography>
        <Typography variant="body1" className={styles.storeSubtitle}>
          Encontre a planta perfeita para o seu espaço
        </Typography>
      </Box>

      <PlantGrid plants={plants} onAddToCart={handleAddToCart} />
    </StoreLayout>
  );
};

