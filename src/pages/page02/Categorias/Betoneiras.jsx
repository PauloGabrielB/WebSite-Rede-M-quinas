import Header from '../../../Components/Header'
import Footer from '../../../Components/Footer'
import Carousel2 from '../../../Components/Carousel2'
import './Categorias.css'
import './Betoneiras.css'

import { Carousel } from 'antd';
import img1 from './img/img1.jpg'
import { Link } from 'react-router-dom';

// Imagem dos Produtos
import prod10 from './img/prod10.jpg'
import prod11 from './img/prod11.jpg'
import prod12 from './img/prod12.png'
import prod13 from './img/prod13.png'
import prod14 from './img/prod14.jpg'



export default function Betoneira() {

 
    return (
        
    <section className='tela-toda'>
        
    <Header />

    <Carousel2 />

    <section className="betoneiras">

    <div className="valor">
                <button><a href="https://linktr.ee/mktrede">Orçamento</a></button>
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
    <div className="line1">
        <div className="divprod10">
            <img src={prod10} alt="" />
            <button>Betoneira Proffisional</button>
        </div>
        <div className="divprod11">
            <img src={prod11} alt="" />
            <button>Betoneira Proffisional</button>
        </div>
        <div className="divprod12">
            <img src={prod12} alt="" />
            <button>Betoneira Proffisional</button>
        </div>
        <div className="divprod13">
            <img src={prod13} alt="" />
            <button>Betoneira Proffisional</button>
        </div>            
    </div>

    <div className="line2">
    <div className="divprod14">
            <img src={prod14} alt="" />
            <button>Betoneira Proffisional</button>
        </div>    
    </div>
    
    </div>
    </div>



    </section>

    <Footer />
        </section>
        
       
    )
}