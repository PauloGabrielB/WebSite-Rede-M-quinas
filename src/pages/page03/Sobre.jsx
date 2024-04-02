import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Carosel3 from '../../Components/Carousel3'
import './Sobre.css'

import { Link } from 'react-router-dom';


import imgsobre from './img/imgsobre.jpg'
import img1 from './img/img1.png'
import img2 from './img/img2.png'
import img3 from './img/img3.png'
import mapa from './img/mapa.png'


export default function Sobre() {


    return (
        <>
        <Header />

        <Carosel3 />

      <section className="sobre">
        <div className="container-sobre">
            <p>A Rede Máquinas é uma empresa voltada para a locação de equipamentos para a construção civil e indústria em geral. Desde a sua fundação, há mais de três décadas, a empresa oferece equipamentos de alta qualidade, priorizando sempre a excelência técnica e a satisfação das reais necessidades de seus clientes.
            Em 1994, atenta às exigências do mercado, ampliou a sua atuação visando atender as diversas outras atividades da indústria, dando continuidade a sua política de preços, diversificação de estoque, qualidade em serviços e produtos. Com isto solidificou sua participação nos diversos setores em que atuava, conquistando
            novos clientes e parceiros, através de conceitos adquiridos de seriedade e confiança.</p>
            <div className="sobreimg">
              <img src={imgsobre} alt="" />
            </div>
        </div>

        <div className="container-cards">
            <div className="infocards">
                <img src={img1} alt="" />
                <h1>Missão</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, odit, laudantium asperiores excepturi pariatur praesentium dolor nulla eos ex esse</p>
            </div>
            <div className="infocards2">
                <img src={img2} alt="" />
                <h1>Visão</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quos repudiandae illum maxime</p>
            </div>
            <div className="infocards3">
                <img src={img3} alt="" />
                <h1>Valores</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam illum fuga nam! Maiores reprehenderit cupiditate impedit quibusdam, .</p>
            </div>
        </div>

        <div className="container-mapa">
            <div className="mapa">
                <img src={mapa} alt="" />
                <p>Contamos com uma equipe de profissionais altamente qualificados, seja no atendimento ao cliente, em montagens complexas ou em uma simples manutenção. Além disso, temos uma equipe comercial treinada e qualificada para oferecer sempre as melhores opções de negócio. Para tornar isto possível, o nosso grupo de colaboradores tem se empenhado ao máximo e, através da satisfação de nossos clientes e parceiros, temos a certeza de que estamos cumprindo o nosso objetivo. Temos o compromisso de atender nossos clientes com serviços e produtos que possuem tecnologia de ponta, construindo parcerias bem-sucedidas, solidificando a relação de confiança com seus parceiros e garantindo resultados.</p>
            </div>
        </div>
      </section>
        
        <Footer />
        </>
    )
}