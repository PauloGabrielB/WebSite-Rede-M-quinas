import Header from '../../../Components/Header'
import Footer from '../../../Components/Footer'
import Carousel2 from '../../../Components/Carousel2'

import './Categorias.css'
import './Escoramento.css'

import { Carousel } from 'antd';
import img1 from './img/img1.jpg'
import { Link } from 'react-router-dom';

// Imagem dos Produtos
import prod30 from './img/prod30.png'
import prod31 from './img/prod31.png'
import prod32 from './img/prod32.png'
import prod33 from './img/prod33.png'
import prod34 from './img/prod34.png'


export default function Compressores() {


    return (
        
        <section className="tela-toda">
            
        <Header />



<section className="escoramento">
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
<div className="line6">
    <div className="divprod30">
        <img src={prod30} alt="" />
        <button>Escora Metálica 2 a 3,10 e 3 a 4,5</button>
    </div>
    <div className="divprod30">
        <img src={prod30} alt="" />
        <button>Escora Metálica 2,00 a 3,10 m</button>
    </div>
    <div className="divprod31">
        <img src={prod31} alt="" />
        <button>Forcado Simples</button>
    </div>
    <div className="divprod32">
        <img src={prod32} alt="" />
        <button>Forcado Duplo</button>
    </div>
  </div>

  <div className="line7">
    <div className="divprod33">
    <img src={prod33} alt="" />
        <button>Tensor</button>
    </div>
    <div className="divprod34">
    <img src={prod34} alt="" />
        <button>Barra de Ancoragem</button>
    </div>
  </div>

</div>
</div>



</section>

<Footer />
        </section>

    )
}