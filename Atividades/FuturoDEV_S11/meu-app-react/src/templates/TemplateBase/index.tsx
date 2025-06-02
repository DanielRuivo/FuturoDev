import React, { ReactNode } from 'react';
import Header from '../../organisms/Header';
import Footer from '../../organisms/Footer';
import styles from './styles.module.css';

interface TemplateBaseProps {
  children: ReactNode;
}

const TemplateBase: React.FC<TemplateBaseProps> = ({ children }) => {
  return (
    <div className={styles.templateBase}>
      <Header />
      <main className={styles.mainContent}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default TemplateBase;
