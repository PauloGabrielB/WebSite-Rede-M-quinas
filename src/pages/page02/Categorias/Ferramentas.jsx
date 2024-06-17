import Header from '../../../Components/Header'
import Footer from '../../../Components/Footer'
import Carousel2 from '../../../Components/Carousel2'

import './Categorias.css'
import './Ferramentas.css'

import { Carousel } from 'antd';
import img1 from './img/img1.jpg'
import { Link } from 'react-router-dom';

// Imagem dos Produtos
import prod35 from './img/prod35.jpg'
import prod36 from './img/prod36.jpg'
import prod37 from './img/prod37.jpg'
import prod38 from './img/prod38.png'
import prod39 from './img/prod39.jpg'
import prod40 from './img/prod40.jpg'
import prod41 from './img/prod41.png'
import prod42 from './img/prod42.jpg'
import prod43 from './img/prod43.jpg'
import prod44 from './img/prod44.png'
import prod45 from './img/prod45.jpg'
import prod46 from './img/prod46.png'
import prod47 from './img/prod47.jpg'



export default function Compressores() {


    return (
        
        <section className="tela-toda">
            
        <Header />



<section className="ferramentas">
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
        <li className='category-item' ><a href="">Terra Planagem</a></li>
    </Link>
    <Link to={'/Torre'}>
        <li className='category-item' ><a href="">Torres de Iluminação</a></li>
    </Link>
    
    </ul>
    </div>
    
</div>
<div className="produtos">

  <div className="line7">
    <div className="divprod35">
    <img src={prod35} alt="" />
        <button>Retificadeira</button>
    </div>
    <div className="divprod36">
    <img src={prod36} alt="" />
        <button>Serra Mármore</button>
    </div>
    <div className="divprod37">
    <img src={prod37} alt="" />
        <button>Serra Tico-Tico</button>
    </div>
    <div className="divprod38">
    <img src={prod38} alt="" />
        <button>Parafusadeira</button>
    </div>
  </div>

  <div className="line8">
  <div className="divprod39">
    <img src={prod39} alt="" />
        <button>Serra Circular Manual - Makita 5900B</button>
    </div>
    <div className="divprod40">
    <img src={prod40} alt="" />
        <button>Furadeira de Impcato 13 mm - Makita HP1500</button>
    </div>
    <div className="divprod41">
    <img src={prod41} alt="" />
        <button>Martelo Rotativo Rompedor - Makita HR5201C</button>
    </div>
    <div className="divprod42">
    <img src={prod42} alt="" />
        <button>Martelo Demolidor 30 kg - Makita HM1801</button>
    </div>
  </div>

  <div className="line9">
  <div className="divprod43">
    <img src={prod43} alt="" />
        <button>Esmeriladeira Angular - Makita GA7020</button>
    </div>
  <div className="divprod44">
    <img src={prod43} alt="" />
        <button>Esmerilhadeira Angular - Makita 9557NB</button>
    </div>
  <div className="divprod45">
    <img src={prod45} alt="" />
        <button>Serra Circular Manual - Makita 5007N</button>
    </div>
  <div className="divprod46">
    <img src={prod46} alt="" />
        <button>Martelete Rotativo HR2022 / HR2020 Corpo compacto</button>
    </div>
  </div>

  <div className="line10">
  <div className="divprod47">
    <img src={prod44} alt="" />
        <button>Martelete Rotativo HR2022 / HR2020</button>
    </div>
  <div className="divprod48">
    <img src={prod47} alt="" />
        <button>Lixadeira Angular SA7021</button>
    </div>
  </div>

</div>
</div>



</section>

<Footer />
        </section>
        
    )
}