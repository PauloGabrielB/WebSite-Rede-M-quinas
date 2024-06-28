import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Formulario() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [mensagem, setMensagem] = useState('');

    function sendEmail(e){
        e.preventDefault();
    
        if(nome === '' || email === '' || telefone === '' || cidade === '' || estado === '' || mensagem === ''){
          alert('Preencha todos os campos!');
          return;
        }
    
        const templateParams = {
          from_name: nome,
          message: mensagem,
          email: email,
          telefone: telefone,
          cidade: cidade,
          estado: estado
        };
        
        emailjs.send('service_ubrl12a', 'template_vsvhvqg', templateParams, '81qjQpr8c5tS3xzDN')
        .then((response) => {
          console.log('Email enviado', response.status, response.text);
          alert('Formulário enviado com sucesso!');
          setEmail('');
          setTelefone('');
          setCidade('');
          setEstado('');
          setMensagem('');
          setNome('');
        }, (err) => {
          console.log('Erro ao enviar', err);
        });
    }
    
    return (
        <section id='contato' className='contact-section'>
            <form className='form-wrapper' onSubmit={sendEmail}>
                <div className='form-group'>
                    <label htmlFor="nome">Nome:</label>
                    <input
                        name='nome'
                        className='form-input'
                        type="text"
                        id="nome"
                        value={nome}
                        onChange={(event) => setNome(event.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="email">Email:</label>
                    <input
                        name='email'
                        className='form-input'
                        type="email"
                        id="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="telefone">Telefone:</label>
                    <input
                        name='telefone'
                        className='form-input'
                        type="tel"
                        id="telefone"
                        value={telefone}
                        onChange={(event) => setTelefone(event.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="cidade">Cidade:</label>
                    <input
                        name='cidade'
                        className='form-input'
                        type="text"
                        id="cidade"
                        value={cidade}
                        onChange={(event) => setCidade(event.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="estado">Estado:</label>
                    <input
                        name='estado'
                        className='form-input'
                        type="text"
                        id="estado"
                        value={estado}
                        onChange={(event) => setEstado(event.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="mensagem">Mensagem:</label>
                    <textarea
                        name='mensagem'
                        className='form-textarea'
                        id="mensagem"
                        value={mensagem}
                        onChange={(event) => setMensagem(event.target.value)}
                    />
                </div>
                <button className='submit-button' type="submit">Enviar</button>
            </form>
        </section>
    );
}
