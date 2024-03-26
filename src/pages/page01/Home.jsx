import '../page01/Home.css'
import Header from '../../Components/Header' 
import Footer from '../../Components/Footer'



import { Carousel } from 'antd';
import img1 from './img/img2.jpg'
import img2 from './img/img1.jpg'
import img3 from './img/img7.jpg'
import img10 from './img/img10.png'
import img11 from './img/rlogo.png'




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

        <section className="hoot">

        </section>

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
            <h1>Equipe Especializada</h1>
            <p>A Melhor equipe a sua disposição !</p>
            <button>Saiba Mais</button>
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

      <div className="back">
      <section className="categorias">
        <div className="title">
          <h1>Categorias</h1>
        </div>
        <div className="categorias-caption">
          <div className="cards-caption">
            <div className='card-1'><a href=""></a><h1>Containers</h1></div>
            <div className='card-2'><a href=""></a><h1>Ferragens</h1></div>
            <div className='card-3'><a href=""></a><h1>Compressores</h1></div>
            <div className='card-4'><a href=""></a><h1>Máquinas Pesadas</h1></div>
            <div className='card-5'><a href=""></a><h1>Plataformas Elevatorias</h1></div>
          </div>
        </div>
      </section>

      <section className="hero">
        <div className="container">
          <img className='center-image' src={img10} alt="" />
          <div className="coluna-1">
            <div className='div1'><h1>Comércio e Serviços</h1><img className='r-1' src={img11} alt="" /></div>
            <div className='div2'><h1>Energia</h1><img src={img11} alt="" /></div>
            <div className='div3'><h1>Infraestrutura</h1><img src={img11} alt="" /></div>
          </div>
          
          <div className="coluna-2">
            <div className='div4'><h1>Óleo e Gás</h1><img src={img11} alt="" /></div>
            <div className='div5'><h1>Industria</h1><img src={img11} alt="" /></div>
            <div className='div6'><h1>Outros</h1><img src={img11} alt="" /></div>
          </div>
        </div>

        <div className="missao">
          <img src='' alt="" />
            <div className='missao-texto'>
            <h1>Missão</h1>
            <p>Lorem ipsum dolor sit amet. Et ipsum voluptatem ea exercitationem sunt ex voluptas deserunt et dolor sint et provident expedita et officia recusandae quo repudiandae quaerat. 33 velit omnis ea reiciendis esse non voluptatem cupiditate et laboriosam quia qui mollitia minima qui quae dolorum 33 consectetur accusamus. Ea nostrum deserunt sit debitis voluptas ut repellendus pariatur eum nostrum quia.</p>
            </div>
        </div>
      </section>
      </div>
      

        <Footer />
        </>
    )
}