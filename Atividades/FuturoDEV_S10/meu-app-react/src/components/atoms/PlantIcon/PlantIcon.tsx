import React from 'react';
import { LocalFlorist } from '@mui/icons-material';
import { IconSize } from '../../../types';
import './PlantIcon.module.css';

interface PlantIconProps {
  size: IconSize;
  className?: string;
  color?: string;
}

export const PlantIcon: React.FC<PlantIconProps> = ({ 
  size, 
  className,
  color = 'inherit'
}) => {
  const getSizeProps = (size: IconSize) => {
    switch (size) {
      case 'sm':
        return { fontSize: 'small' as const };
      case 'md':
        return { fontSize: 'medium' as const };
      case 'lg':
        return { fontSize: 'large' as const };
      default:
        return { fontSize: 'medium' as const };
    }
  };

  return (
    <LocalFlorist
      {...getSizeProps(size)}
      className={`plant-icon plant-icon--${size} ${className || ''}`}
      style={{ color }}
    />
  );
};

