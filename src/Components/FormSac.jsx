import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function CustomContactForm() {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userMessage, setUserMessage] = useState('');

    function sendEmail(e) {
        e.preventDefault();

        if (userName === '' || userEmail === '' || userMessage === '') {
            alert('Preencha todos os campos!');
            return;
        }

        const templateParams = {
            from_name: userName,
            message: userMessage,
            email: userEmail
        };

        emailjs.send('service_ubrl12a', 'template_vsvhvqg', templateParams, '81qjQpr8c5tS3xzDN')
            .then((response) => {
                console.log('Email enviado', response.status, response.text);
                alert('Formulário enviado com sucesso!');
                setUserEmail('');
                setUserMessage('');
                setUserName('');
            }, (err) => {
                console.log('Erro ao enviar', err);
            });
    }

    return (
        <section id='custom-contact' className='custom-contact-sac'>
            <form className='custom-contact-form' onSubmit={sendEmail}>
                <div className='custom-form-group'>
                    <label htmlFor="userName">Nome:</label>
                    <input
                        name='userName'
                        className='custom-input-name'
                        type="text"
                        id="userName"
                        value={userName}
                        onChange={(event) => setUserName(event.target.value)}
                    />
                </div>
                <div className='custom-form-group'>
                    <label htmlFor="userEmail">Email:</label>
                    <input
                        name='userEmail'
                        className='custom-input-email'
                        type="email"
                        id="userEmail"
                        value={userEmail}
                        onChange={(event) => setUserEmail(event.target.value)}
                    />
                </div>
                <div className='custom-form-group'>
                    <label htmlFor="userMessage">Mensagem:</label>
                    <textarea
                        name='userMessage'
                        className='custom-textarea-message'
                        id="userMessage"
                        value={userMessage}
                        onChange={(event) => setUserMessage(event.target.value)}
                    />
                </div>
                <button type="submit" className='custom-submit-button'>Enviar</button>
            </form>

            <div className="custom-social-icons">
                <a className='custom-whatsapp-icon' target='_blank' href="https://api.whatsapp.com/send?phone=5585999220071">
                    <FaWhatsapp /> WhatsApp
                </a>
                <a className='custom-instagram-icon' target='_blank' href="https://www.instagram.com/redemaquinas">
                    <FaInstagram /> Instagram
                </a>
            </div>
        </section>
    );
}
