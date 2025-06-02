import React from 'react';
import styles from './PriceTag.module.css';

type PriceTagProps = {
  value: number;
  className?: string;
};

const PriceTag: React.FC<PriceTagProps> = ({ value, className = '' }) => {
  // Formatação monetária para o padrão brasileiro (R$ 12,30)
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

  return (
    <span className={`${styles.priceTag} ${className}`}>
      {formattedPrice}
    </span>
  );
};

export default PriceTag;
