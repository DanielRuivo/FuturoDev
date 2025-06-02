import React from 'react';
import styles from './styles.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} TicketOnline. Todos os direitos reservados.</p>
      {/* Adicione mais informações se necessário, como links para redes sociais */}
    </footer>
  );
};

export default Footer;
