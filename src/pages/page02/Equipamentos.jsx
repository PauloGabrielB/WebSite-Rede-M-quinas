import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Carousel2 from '../../Components/Carousel2'
import '../page02/Equipamentos.css'
import './Equipamentos.css'

import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import img1 from './img/img1.jpg'

// Imagem dos Produtos
import prod1 from './img/prod1.png'
import prod2 from './img/prod2.png'
import prod3 from './img/prod3.png'
import prod4 from './img/prod4.png'
import prod5 from './img/prod5.jpg'
import prod6 from './img/prod6.png'
import prod7 from './img/prod7.jpg'
import prod8 from './img/prod8.png'
import prod9 from './img/prod9.png'



export default function Equipamentos() {

    return (

      <>
       <section className="tela-toda">
          <Header />
          
            

                <section className="hhero">
                <Carousel2 />
                <div className="valor">
                    <button><a href="https://linktr.ee/mktrede">Solicitar Orçamento</a></button>
                </div>

                <div className="App">
                <div className="categorias-containers">
                    <div className="lista-categorias">
                      <h1>Categorias</h1>
                    <ul className='categorias-list'>
                    <Link to={'/Equipamentos'}>
                        <li className='category-item' ><a href="">Andaimes</a></li>
                    </Link>
                    <Link to={'/Betoneiras'}>
                        <li className='category-item' ><a href="">Betoneiras</a></li>
                    </Link>
                    <Link to={'/Caminhao'}>
                        <li className='category-item' ><a href="">Caminhão Munck</a></li>
                  </Link>
                  <Link to={'/Compactador'}>
                        <li className='category-item' ><a href="">Compactador</a></li>
                  </Link>
                  <Link to={'/Compressores'}>
                        <li className='category-item' ><a href="">Compressores de Ar</a></li>
                    </Link>
                    <Link to={'/Container'}>
                        <li className='category-item' ><a href="">Container</a></li>
                    </Link>
                    <Link to={'/Diversos'}>
                        <li className='category-item' ><a href="">Diversos</a></li>
                    </Link>
                    <Link to={'/Escoramento'}>
                        <li className='category-item' ><a href="">Escoramento</a></li>
                    </Link>
                    <Link to={'/Ferramentas'}>
                        <li className='category-item' ><a href="">Ferramentas Elétricas</a></li>
                    </Link>
                    <Link to={'/Geradores'}>
                      <li className='category-item' ><a href="">Geradores</a></li> 
                    </Link>
                    <Link to={'/Maquinas'}>
                        <li className='category-item' ><a href="">Máquinas</a></li>
                    </Link>
                    <Link to={'/Cargas'}>
                        <li className='category-item' ><a href="">Movimentação de Cargas</a></li>
                    </Link>
                    <Link to={'/Plataformas'}>
                        <li className='category-item' ><a href="">Plataformas Aéreas</a></li>
                    </Link>
                    <Link to={'/Terraplanagem'}>
                        <li className='category-item' ><a href="">Terraplanagem</a></li>
                    </Link>
                    <Link to={'/Torre'}>
                        <li className='category-item' ><a href="">Torres de Iluminação</a></li>
                    </Link>
                    </ul>
                    </div>
                </div>

                <div className="produtos">
                  <div className="line1">
                    <div className="divprod1">
                    <img src={prod1} alt="" />
                    <button>Andaime Fachadeiro</button>
                  </div>
                  <div className="divprod2">
                    <img src={prod2} alt="" />
                    <button>Andaime Tubular</button>
                  </div>
                  <div className="divprod3">
                    <img src={prod3} alt="" />
                    <button>Andaime Multidirecional</button>
                  </div>
                  <div className="divprod4">
                    <img src={prod4} alt="" />
                    <button>Andaime Suspenso</button>
                  </div>
                  </div>

                  <div className="line2">
                    <div className="divprod5">
                    <img src={prod5} alt="" />
                    <button>Diagonal P/Andaime</button>
                  </div>
                  <div className="divprod6">
                    <img src={prod6} alt="" />
                    <button>Escada P/Andaime</button>
                  </div>
                  <div className="divprod7">
                    <img src={prod7} alt="" />
                    <button>Rodizio P/Andaime</button>
                  </div>
                  <div className="divprod8">
                    <img src={prod8} alt="" />
                    <button>Sapata Ajustavel</button>
                  </div>
                  </div>

                  <div className="line3">
                    <div className="divprod9">
                      <img src={prod9} alt="" />
                      <button>Sapata Fixa</button>
                    </div>
                  </div>
                  
                </div>
              </div>

                </section>

                <Footer />
        </section>
      </>
      
        
        

    
    )
}