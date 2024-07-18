import Header from '../../../Components/Header'
import Footer from '../../../Components/Footer'
import Carousel2 from '../../../Components/Carousel2'
import './Categorias.css'
import './Cargas.css'

import { Carousel } from 'antd';
import img1 from './img/img1.jpg'
import { Link } from 'react-router-dom';

// Imagem dos Produtos
import prod61 from './img/prod61.jpg'
import prod62 from './img/prod62.jpeg'
import prod63 from './img/prod63.jpg'
import prod64 from './img/prod64.png'


export default function Cargas() {


    return (
       
        <section className='tela-toda'>
                <Header />
            <section className="cargas">
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
                    <li className='category-item' ><a href="">Ferragens</a></li>
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
                    <li className='category-item' ><a href="">Elevação de Cargas</a></li>
                </Link>
                <Link to={'/Plataformas'}>
                    <li className='category-item' ><a href="">Plataformas Aéreas</a></li>
                </Link>
                <Link to={'/Terraplanagem'}>
                    <li className='category-item' ><a href="">Linha Amarela</a></li>
                </Link>
                <Link to={'/Torre'}>
                    <li className='category-item' ><a href="">Torres de Iluminação</a></li>
                </Link>
                
                </ul>
                </div>
                
            </div>
            <div className="produtos">

            <div className="linec1">
                <div className="divprod61">
                    <img src={prod61} alt="" />
                    <button>Talha de Corrente</button>
                </div>
                <div className="divprod62">
                    <img src={prod62} alt="" />
                    <button>Mini Grua 500 kg</button>
                </div>
                <div className="divprod63">
                    <img src={prod63} alt="" />
                    <button>Guincho de Coluna 200 kg</button>
                </div>
                <div className="divprod64">
                    <img src={prod64} alt="" />
                    <button>Elevador de Cremalheira</button>
                </div>
            </div>

            </div>
            </div>



            </section>

            <Footer />
        </section>
     

    )
}