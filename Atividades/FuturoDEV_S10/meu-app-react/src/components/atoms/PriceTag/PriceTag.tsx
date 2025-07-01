import React from 'react';
import { Typography } from '@mui/material';
import './PriceTag.module.css';

interface PriceTagProps {
  value: number;
  className?: string;
}

export const PriceTag: React.FC<PriceTagProps> = ({ value, className }) => {
  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  return (
    <Typography 
      variant="h6" 
      component="span" 
      className={`price-tag ${className || ''}`}
    >
      {formatPrice(value)}
    </Typography>
  );
};

