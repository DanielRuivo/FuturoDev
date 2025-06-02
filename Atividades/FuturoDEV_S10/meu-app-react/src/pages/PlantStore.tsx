import React from 'react';
import { Typography, Box } from '@mui/material';
import StoreLayout from '../components/templates/StoreLayout';
import PlantGrid from '../components/organisms/PlantGrid';
import type { Plant } from '../components/molecules/PlantCard';

// Dados mockados de plantas
const mockPlants: Plant[] = [
  { id: "1", name: "Suculenta", price: 29.9, light: "sun" },
  { id: "2", name: "Samambaia", price: 39.9, light: "shade" },
  { id: "3", name: "Cacto Mini", price: 19.9, light: "sun" },
  { id: "4", name: "Espada de São Jorge", price: 45.9, light: "shade" },
  { id: "5", name: "Orquídea", price: 59.9, light: "shade" },
  { id: "6", name: "Lírio da Paz", price: 34.9, light: "shade" },
];

const PlantStore: React.FC = () => {
  return (
    <StoreLayout>
      <Box mb={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Nossas Plantas
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          Explore nossa seleção de plantas para o seu jardim. Temos opções para sol e sombra!
        </Typography>
      </Box>
      
      <PlantGrid plants={mockPlants} />
    </StoreLayout>
  );
};

export default PlantStore;
