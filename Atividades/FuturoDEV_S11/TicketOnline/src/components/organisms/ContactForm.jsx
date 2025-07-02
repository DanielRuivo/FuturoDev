import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const ContactForm = () => {
  const { isDarkMode } = useTheme();
  
  const [formData, setFormData] = useState({
    email: '',
    assunto: '',
    mensagem: '',
    urgencia: false
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    // Validação do email
    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    
    // Validação do assunto
    if (!formData.assunto.trim()) {
      newErrors.assunto = 'Assunto é obrigatório';
    }
    
    // Validação da mensagem
    if (!formData.mensagem.trim()) {
      newErrors.mensagem = 'Mensagem é obrigatória';
    } else if (formData.mensagem.trim().length < 10) {
      newErrors.mensagem = 'Mensagem deve ter pelo menos 10 caracteres';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Limpar erro do campo quando o usuário começar a digitar
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simular envio do formulário
    try {
      console.log('Dados do formulário:', formData);
      
      // Alert para mostrar os dados
      alert(`Formulário enviado com sucesso!
      
Email: ${formData.email}
Assunto: ${formData.assunto}
Mensagem: ${formData.mensagem}
Urgência: ${formData.urgencia ? 'Sim' : 'Não'}`);
      
      // Resetar formulário
      setFormData({
        email: '',
        assunto: '',
        mensagem: '',
        urgencia: false
      });
      
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      alert('Erro ao enviar formulário. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`contact-form ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="form-container">
        <h2>📧 Entre em Contato</h2>
        <p>Envie-nos uma mensagem e entraremos em contato em breve!</p>
        
        <form onSubmit={handleSubmit} className="contact-form-fields">
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={errors.email ? 'error' : ''}
              placeholder="seu@email.com"
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="assunto">Assunto *</label>
            <input
              type="text"
              id="assunto"
              name="assunto"
              value={formData.assunto}
              onChange={handleInputChange}
              className={errors.assunto ? 'error' : ''}
              placeholder="Qual o assunto da sua mensagem?"
            />
            {errors.assunto && <span className="error-message">{errors.assunto}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="mensagem">Mensagem *</label>
            <textarea
              id="mensagem"
              name="mensagem"
              value={formData.mensagem}
              onChange={handleInputChange}
              className={errors.mensagem ? 'error' : ''}
              placeholder="Escreva sua mensagem aqui..."
              rows="5"
            />
            {errors.mensagem && <span className="error-message">{errors.mensagem}</span>}
          </div>

          <div className="form-group checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="urgencia"
                checked={formData.urgencia}
                onChange={handleInputChange}
              />
              <span className="checkbox-text">🚨 Urgente</span>
            </label>
          </div>

          <button 
            type="submit" 
            className="btn-submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

