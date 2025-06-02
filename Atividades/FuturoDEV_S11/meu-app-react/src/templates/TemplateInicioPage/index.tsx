import React from 'react';
import TemplateBase from '../TemplateBase';
import styles from './styles.module.css'; // Pode criar estilos específicos se necessário

const TemplateInicioPage: React.FC = () => {
  return (
    <TemplateBase>
      <div className={styles.inicioContent}>
        {/* Conteúdo específico da página inicial */}
        <h2>Bem-vindo ao TicketOnline!</h2>
        <img src="https://via.placeholder.com/800x400/cccccc/888888?text=Fachada+Cinema" alt="Fachada de um cinema" className={styles.cinemaImage} />
        <p>Seu portal para os melhores filmes em cartaz.</p>
      </div>
    </TemplateBase>
  );
};

export default TemplateInicioPage;
