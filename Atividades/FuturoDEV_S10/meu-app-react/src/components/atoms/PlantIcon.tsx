import React from 'react';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import styles from './PlantIcon.module.css';

type PlantIconProps = {
  size: 'sm' | 'md' | 'lg';
  className?: string;
};

const PlantIcon: React.FC<PlantIconProps> = ({ size, className = '' }) => {
  // Mapear tamanhos para valores em pixels
  const sizeMap = {
    sm: 16,
    md: 24,
    lg: 36
  };

  return (
    <LocalFloristIcon 
      className={`${styles.plantIcon} ${styles[size]} ${className}`}
      fontSize={size === 'lg' ? 'large' : size === 'md' ? 'medium' : 'small'}
      style={{ fontSize: sizeMap[size] }}
    />
  );
};

export default PlantIcon;
