import React from 'react';
import styles from './styles.module.css';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: any; // Para integração com React Hook Form
}

const Textarea: React.FC<TextareaProps> = ({ label, name, error, register, ...rest }) => {
  return (
    <div className={styles.textareaGroup}>
      <label htmlFor={name} className={styles.label}>{label}</label>
      <textarea
        id={name}
        name={name}
        className={`${styles.textarea} ${error ? styles.textareaError : ''}`}
        {...(register ? register(name) : {})}
        {...rest}
      />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};

export default Textarea;
