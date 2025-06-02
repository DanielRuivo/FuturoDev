import React from 'react';
import styles from './styles.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: any; // Para integração com React Hook Form
}

const Input: React.FC<InputProps> = ({ label, name, error, register, ...rest }) => {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={name} className={styles.label}>{label}</label>
      <input
        id={name}
        name={name}
        className={`${styles.input} ${error ? styles.inputError : ''}`}
        {...(register ? register(name) : {})}
        {...rest}
      />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};

export default Input;
