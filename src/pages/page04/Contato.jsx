import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Formulario from '../../Components/Formulario'
import msp from './img/msp.png'
import './Contato.css'
import React, { useState } from 'react';
import emailjs from '@emailjs/browser'


export default function Contato() {

    return (

        <>
        <section className="tela-toda">
        <Header />

        <section className="contato">
        <div className="contato-img">
            <img src={msp} alt="" />
            <div className="contato-title">
            <h1>Capilaridade de atendimento em todo o nordeste!</h1>
            </div>
        </div>

        <div className="body-contact">
            <h1>Solicitar Orçamento</h1>
            <h3>Entre em contato conosco !</h3>
        </div>

        <Formulario />

        </section>



        <Footer />
        </section>
        
        </>
    )
}