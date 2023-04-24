import styles from '@/styles/Formulario.module.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Formulario = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_v51ya2p', 'template_gg36l77', form.current, 'IaRimagU5q9rZIZb5')
    .then(
      () => {
        alert('Mensagem enviada com sucesso, obrigado, retornarei em breve!')
        window.location.reload(false)
      },
      () => {
        alert('Falha ao enviar a mensagen, tente denovo por favor')
      }
    )
  };
  
  return (
    <form className={styles.estiloformulario} ref={form} onSubmit={sendEmail}>
      <input type="text" className={styles.inputtxt} name="user_name" placeholder="Nome" />
      <input type="email" className={styles.inputtxt}  name="user_email" placeholder="Email" />
      <textarea className={styles.inputmsg} name="message" placeholder="Mensagem" />
      <input className={styles.sendbt} type="submit" value="ENVIAR" />
    </form>
  );
};