import '../page01/Home.css'
import Header from '../../Components/Header' 


import { Carousel } from 'antd';
import img1 from './img/img2.jpg'
import img2 from './img/img6.jpg'
import img3 from './img/img7.jpg'

const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export default function Home() {

    const onChange = (currentSlide) => {
        console.log(currentSlide);
      };
  
    return (
        <>
        <Header />

        <Carousel className='carousel' afterChange={onChange}>
        <div className='carousel-1'>
          <img className='img1' src={img1} alt=""/>
          <div className="caption-1">
            <h1>Os Melhores Equipamentos</h1>
            <p>Disponiveis a pronta entrega, basta ligar</p>
            <button>Orçamento</button>
          </div>
        </div>
        <div className='carousel-2'>
          <img className='img2' src={img2} alt="" />
          <div className="caption-2">
            <h1>OLá</h1>
            <p>lroeeeemedasdasdasdasddasdasdasdasdasdasdasd</p>
            <button>Saiba Mias</button>
          </div>
        </div>
        <div className='carousel-3'>
          <img className='img3' src={img3} alt="" />
          <div className="caption-3">
            <h1>Lorem</h1>
            <p>Ipsulem</p>
            <button>Saiba Mais</button>
          </div>
        </div>
      </Carousel>

    {/* Categoria */}

    <section className="categorias">
      <div className="title">
        <h1>Categorias</h1>
      </div>
      <div className="categorias-caption">
        <div className="cards-caption">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
        
    </section>
        </>
    )
}