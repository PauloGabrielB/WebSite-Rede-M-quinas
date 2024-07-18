import Header from '../../../Components/Header'
import Footer from '../../../Components/Footer'
import Carousel2 from '../../../Components/Carousel2'

import './Categorias.css'
import './Diversos.css'

import { Carousel } from 'antd';
import img1 from './img/img1.jpg'
import { Link } from 'react-router-dom';

// Imagem dos Produtos
import prod26 from './img/prod26.jpg'
import prod27 from './img/prod27.png'
import prod28 from './img/prod28.png'
import prod29 from './img/prod29.png'
import prod21 from './img/prod21.jpg'



export default function Compressores() {


    return (
        
        <section className="tela-toda">
            
        <Header />



<section className="diversos">
<Carousel2 />
<div className="valor vdiversos">
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
  <div className="line4">
    <div className="divprod26">
        <img src={prod26} alt="" />
        <button>Motobomba 4x4</button>
    </div>
    <div className="divprod27">
        <img src={prod27} alt="" />
        <button>Bomba de Drenagem</button>
    </div>
    <div className="divprod28">
        <img src={prod28} alt="" />
        <button>Vibradores de Imersão 25 a 60mm</button>
    </div>
    <div className="divprod29">
        <img src={prod29} alt="" />
        <button>Motor Acionador Elétrico</button>
    </div>
    {/* <div className="divprod26">
        <img src={prod26} alt="" />
        <button>Motobomba 4x4 Diesel</button>
    </div>
    <div className="divprod26">
        <img src={prod26} alt="" />
        <button>Motobomba 3x3 Gasolina</button>
    </div>
    <div className="divprod26">
        <img src={prod26} alt="" />
        <button>Motobomba 3x3 Diesel</button>
    </div> */}
  </div>

  <div className="line5">
    
    {/* <div className="divprod27">
        <img src={prod27} alt="" />
        <button>Bomba de Drenagem AV 50</button>
    </div>
    <div className="divprod27">
        <img src={prod27} alt="" />
        <button>Bomba de Drenagem AV 25</button>
    </div> */}
    
  </div>

  <div className="line6">
    
    <div className="divprod21">
         <img src={prod21} alt="" />
         <button>Rompedor Pneumático</button>
     </div>
  </div>

</div>
</div>



</section>

<Footer />
        </section>

    )
}