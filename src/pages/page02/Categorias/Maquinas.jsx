import Header from '../../../Components/Header'
import Footer from '../../../Components/Footer'
import Carousel2 from '../../../Components/Carousel2'

import './Categorias.css'
import './Maquinas.css'

import { Carousel } from 'antd';
import img1 from './img/img1.jpg'
import { Link } from 'react-router-dom';

// Imagem dos Produtos
import prod52 from './img/prod52.png'
import prod53 from './img/prod53.jpg'
import prod54 from './img/prod54.png'
import prod55 from './img/prod55.jpg'
import prod56 from './img/prod56.png'
import prod57 from './img/prod57.jpg'
import prod58 from './img/prod58.png'
import prod59 from './img/prod59.jpg'
import prod60 from './img/prod60.jpg'


export default function Maquinas() {

    return (
        <>
        <Header />

        <Carousel2 />

        <section className="maquinas">

        <div className="valor">
        <button><a href="https://api.whatsapp.com/send?phone=5585999220071">Saiba Mais</a></button>
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
                <li className='category-item' ><a href="">Terra Planagem</a></li>
            </Link>
            <Link to={'/Torre'}>
                <li className='category-item' ><a href="">Torres de Iluminação</a></li>
            </Link>
            
            </ul>
            </div>
            
        </div>
        <div className="produtos">

         <div className="line10">
           <div className="divprod52">
            <img src={prod52} alt="" />
            <button>Peneira Elétrica Giratória</button>
           </div>
           <div className="divprod53">
            <img src={prod53} alt="" />
            <button>M. de Solda 200AMP 400AMP</button>
           </div>
           <div className="divprod54">
            <img src={prod54} alt="" />
            <button>Máquina de Polir Piso</button>
           </div>
           <div className="divprod55">
            <img src={prod55} alt="" />
            <button>Acabadora de Pisos</button>
           </div>
         </div>

         <div className="line11">
            <div className="divprod56">
                <img src={prod56} alt="" />
                <button>Perfuratriz Pneumática</button>
            </div>
            <div className="divprod57">
                <img src={prod57} alt="" />
                <button>Serra Policorte</button>
            </div>
            <div className="divprod58">
                <img src={prod58} alt="" />
                <button>Serra de Mesa Pica-pau</button>
            </div>
            <div className="divprod59">
                <img src={prod59} alt="" />
                <button>Cortadora de Piso</button>
            </div>
         </div>

         <div className="line12">
            <div className="divprod60">
                <img src={prod60} alt="" />
                <button>Empilhadeira</button>
            </div>
         </div>

        </div>
        </div>

        </section>

        <Footer />
        </>
    )
}