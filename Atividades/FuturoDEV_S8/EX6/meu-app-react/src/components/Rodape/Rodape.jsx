import React from 'react';
import './Rodape.css';

// Importando as imagens dos ícones
import iconFacebook from '../../assets/images/icon-facebook.png';
import iconInstagram from '../../assets/images/icon-instagram.png';
import iconTwitter from '../../assets/images/icon-twitter.png';
import iconPinterest from '../../assets/images/icon-pinterest.png';

const Rodape = () => {
  return (
    <footer className="rodape">
      <div className="rodape-container">
        <div className="rodape-redes">
          <h3>Siga-nos</h3>
          <div className="rodape-icones">
            <a href="https://web.facebook.com/daniel.amaralhillesheim/" aria-label="Facebook">
              <img src={iconFacebook} alt="Facebook" className="social-icon" />
            </a>
            <a href="https://www.instagram.com/ruivdaniel/" aria-label="Instagram">
              <img src={iconInstagram} alt="Instagram" className="social-icon" />
            </a>
            <a href="https://x.com/daniel51292250" aria-label="Twitter">
              <img src={iconTwitter} alt="Twitter" className="social-icon" />
            </a>
            <a href="https://br.pinterest.com/coisadejogos0324/" aria-label="Pinterest">
              <img src={iconPinterest} alt="Pinterest" className="social-icon" />
            </a>
          </div>
        </div>
        <div className="rodape-endereco">
          <h3>Visite-nos</h3>
          <address>
            Rua das Massas, 123<br />
            Bairro Italiano<br />
            São Paulo - SP<br />
            Tel: (11) 5555-1234
          </address>
        </div>
        <div className="rodape-horario">
          <h3>Horário de Funcionamento</h3>
          <p>Segunda a Sexta: 11h às 23h</p>
          <p>Sábados e Domingos: 11h às 00h</p>
        </div>
      </div>
      <div className="rodape-copyright">
        <p>&copy; 2025 Mamamia Massas. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Rodape;
