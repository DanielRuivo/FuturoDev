import React from 'react';
import styles from './styles.module.css';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: any; // Para integração com React Hook Form
}

const Checkbox: React.FC<CheckboxProps> = ({ label, name, error, register, ...rest }) => {
  return (
    <div className={styles.checkboxGroup}>
      <input
        type="checkbox"
        id={name}
        name={name}
        className={styles.checkbox}
        {...(register ? register(name) : {})}
        {...rest}
      />
      <label htmlFor={name} className={styles.label}>{label}</label>
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};

export default Checkbox;
