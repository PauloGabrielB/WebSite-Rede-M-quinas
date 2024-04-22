import React, { useState } from 'react';
import emailjs from '@emailjs/browser'
import { FaWhatsapp, FaInstagram } from "react-icons/fa";


export default function Formulario() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
    React.useState();

    function sendEmail(e){
        e.preventDefault();
    
        if(nome === '' || email === '' || mensagem === ''){
          alert('Preencha todos os campos !');
          return;
        }
    
        const templateParams = {
          from_name : nome,
          message: mensagem,
          email: email
        }
        
        emailjs.send('service_m1ve454', 'template_hjku15w', templateParams, 'XDNdIaWb3KTwEvdIB')
        .then((response) => {
          console.log('Email Enviado', response.status, response.text)
          setEmail('')
          setMensagem('')
          setNome('')
        }, (err) => {
          console.log('Erro ao Enviar', err)
        })
    
      }
    
    return (
        
    
         <section id='contato' className='Contato'>
            <h1 className="contato-h1">Contato</h1>
            <form className='form-container' onSubmit={sendEmail}>
            <div>
                <label htmlFor="nome">Nome:</label>
                <input
                className='nome-input'
                type="text"
                id="nome"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                className='email-input'
                type="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                />
            </div>
            <div className="mb-3">
              <label  className="form-label">Arquivo</label>
              <input className="form-control" type="file" id="formFile"/>
            </div>
            <div>
                <label htmlFor="mensagem">Mensagem:</label>
                <textarea
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
    )
}