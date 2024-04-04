import Header from '../../../Components/Header'
import Footer from '../../../Components/Footer'
import Carousel2 from '../../../Components/Carousel2'

import './Categorias.css'
import './Container.css'

import { Carousel } from 'antd';
import img1 from './img/img1.jpg'
import { Link } from 'react-router-dom';

// Imagem dos Produtos
import prod25 from './img/prod25.jpg'



export default function Compressores() {


    return (
        <>
        <Header />

        <Carousel2 />

        <section className="hero">

        <div className="search-container">
            <h1>Buscar Equipamento</h1>
            <input type="text" id="search-input" className="search-input" placeholder="Digite o nome do Equipamento"/>
            <button id="search-button" className="search-button">Buscar</button>
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
          <div className="line4">
            <div className="divprod25">
                <img src={prod25} alt="" />
                <button>Escritório C/AR C/WC</button>
            </div>
            <div className="divprod25">
                <img src={prod25} alt="" />
                <button>Contêiner Banheiro</button>
            </div>
            <div className="divprod25">
                <img src={prod25} alt="" />
                <button>Contêiner Almoxarifado</button>
            </div>
           
          </div>

        </div>
        </div>



        </section>

        <Footer />
        </>
    )
}