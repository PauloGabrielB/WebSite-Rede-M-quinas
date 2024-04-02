// import '../App.css'
import { Carousel } from 'antd';
import pg1 from '../pages/page01/img/pg1.jpg'
import cc1 from '../pages/page01/img/cc1.jpg'
import c12 from '../pages/page01/img/c12.png'


const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  export default function Carousell() {

    const onChange = (currentSlide) => {
        console.log(currentSlide);
      };

    return (
        <>
        <Carousel className='carousel' afterChange={onChange}>

        <div className='carousel-1'>
        <img className='img1' src={cc1} alt=""/>
        <div className="caption-1">
            <h2>Equipe Especializada</h2>
            <button>Orçamento</button>
        </div>
        </div>

        <div className='carousel-2'>
        <img className='img2' src={pg1} alt="" />
        <div className="caption-2">
            <h1>Equipamentos de Ponta</h1>
            <button>Saiba Mais</button>
        </div>
        </div>

        <div className='carousel-3'>
        <img className='img3' src={c12} alt="" />
        <div className="caption-3">
            <h1>Transporte de Equipamento</h1>
            <button>Saiba Mais</button>
        </div>
        </div>

        </Carousel>
        </>
    )
  }