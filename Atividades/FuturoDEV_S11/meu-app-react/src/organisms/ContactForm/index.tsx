import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Input from '../../atoms/Input';
import Textarea from '../../atoms/Textarea';
import Checkbox from '../../atoms/Checkbox';
import styles from './styles.module.css';

interface IFormInputs {
  email: string;
  subject: string;
  message: string;
  urgency: boolean;
}

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, // Para limpar o formulário após o envio
  } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log('Dados do formulário:', data);
    alert(`E-mail: ${data.email}\nAssunto: ${data.subject}\nMensagem: ${data.message}\nUrgente: ${data.urgency ? 'Sim' : 'Não'}`);
    reset(); // Limpa o formulário
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <h2 className={styles.title}>Entre em Contato</h2>
      <Input
        label="E-mail *"
        name="email"
        type="email"
        register={register}
        error={errors.email?.message}
        {...register('email', { required: 'E-mail é obrigatório', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Endereço de e-mail inválido' } })}
      />

      <Input
        label="Assunto *"
        name="subject"
        type="text"
        register={register}
        error={errors.subject?.message}
        {...register('subject', { required: 'Assunto é obrigatório' })}
      />

      <Textarea
        label="Mensagem *"
        name="message"
        register={register}
        error={errors.message?.message}
        {...register('message', { required: 'Mensagem é obrigatória' })}
      />

      <Checkbox
        label="Marcar como urgente"
        name="urgency"
        register={register}
        {...register('urgency')}
      />

      <button type="submit" className={styles.submitButton}>Enviar Mensagem</button>
    </form>
  );
};

export default ContactForm;
