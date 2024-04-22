// import '../App.css'
import { Carousel } from 'antd';
import img2 from '../img/img2.jpg'
import pg1 from '../img/c4.png'
import rrm from '../img/rrm.png'


const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  export default function Carousel2() {

    const onChange = (currentSlide) => {
        console.log(currentSlide);
      };

    return (
        <>
        <Carousel className='carousel' afterChange={onChange}>

        <div className='carousel-1'>
        <img className='img1' src={img2} alt=""/>
        <div className="caption-1">
            <h3>Equipamentos para todas as fases da sua obra.</h3>
            <button><a href="https://api.whatsapp.com/send?phone=5585999220071">Saiba Mais</a></button>
        </div>
        </div>

        <div className='carousel-2'>
        <img className='img2' src={pg1} alt="" />
        <div className="caption-2">
            <h1>Equipamentos de Ponta</h1>
            <button><a href="https://api.whatsapp.com/send?phone=5585999220071">Saiba Mais</a></button>
        </div>
        </div>

        <div className='carousel-3'>
        <img className='img3' src={rrm} alt="" />
        <div className="caption-3">
            <h1>Transporte de Equipamento</h1>
            <button><a href="https://api.whatsapp.com/send?phone=5585999220071">Saiba Mais</a></button>
        </div>
        </div>

        </Carousel>
        </>
    )
  }