import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Formulario() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    function sendEmail(e){
        e.preventDefault();
    
        if(nome === '' || email === '' || mensagem === ''){
          alert('Preencha todos os campos!');
          return;
        }
    
        const templateParams = {
          from_name: nome,
          message: mensagem,
          email: email
        };
        
        emailjs.send('service_ubrl12a', 'template_vsvhvqg', templateParams, '81qjQpr8c5tS3xzDN')
        .then((response) => {
          console.log('Email enviado', response.status, response.text);
          alert('Formulário enviado com sucesso!');
          setEmail('');
          setMensagem('');
          setNome('');
        }, (err) => {
          console.log('Erro ao enviar', err);
        });
    }
    
    return (
        <section id='contato' className='Contato'>
            <form className='form-container' onSubmit={sendEmail}>
                <div className='dff'>
                    <label htmlFor="nome">Nome:</label>
                    <input
                        name='nome'
                        className='nome-input'
                        type="text"
                        id="nome"
                        value={nome}
                        onChange={(event) => setNome(event.target.value)}
                    />
                </div>
                <div className='dff'>
                    <label htmlFor="email">Email:</label>
                    <input
                        name='email'
                        className='email-input'
                        type="email"
                        id="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className='dff'>
                    <label htmlFor="mensagem">Mensagem:</label>
                    <textarea
                        name='mensagem'
                        className='textarea'
                        id="mensagem"
                        value={mensagem}
                        onChange={(event) => setMensagem(event.target.value)}
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>

            <div className="social-icons">
                <a className='wsp-ico' target='blank' href="https://api.whatsapp.com/send?phone=5585999220071">
                    <FaWhatsapp /> WhatsApp 
                </a>
                <a className='insta-ico' target='blank' href="https://www.instagram.com/redemaquinas">
                    <FaInstagram /> Instagram
                </a>
            </div>
        </section>
    );
}
