import React from 'react';
import { Button as MuiButton } from '@mui/material';
import { ButtonVariant } from '../../../types';
import './Button.module.css';

interface ButtonProps {
  variant: ButtonVariant;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  onClick,
  disabled = false,
  type = 'button'
}) => {
  return (
    <MuiButton
      variant={variant === 'primary' ? 'contained' : 'outlined'}
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`button button--${variant}`}
    >
      {children}
    </MuiButton>
  );
};

