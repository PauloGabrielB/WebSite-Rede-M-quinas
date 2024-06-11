import '../page01/Home.css'
import Header from '../../Components/Header'
import Carousel from '../../Components/Carousel' 
import Footer from '../../Components/Footer'
import CardSlider from '../../Components/CardSlider'
import BoxContainer from '../../Components/BoxContainer'
import ContCircular from '../../Components/ContCircular'
import CCircular from '../../Components/CCircular'




import img10 from './img/img10.png'
import img11 from './img/rlogo.png'



export default function Home() {

    return (
        <>
      <Header />
      <section className="hoot">
        <div className="back">
          
        <Carousel/>
          
          <div className="title">
              <h1>Categorias</h1>
            </div>

            <CardSlider />

            <section className="categorias">           
            <div className="centro">
              <ContCircular />
              {/* <CCircular /> */}
              
            {/* <div className="container">
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
            </div> */}

            <div className="missao">
              <img src='' alt="" />
                <div className='missao-texto'>
                <h1>Missão</h1>
                <p>Fornecer soluções completas em locação de equipamentos para diversos setores com foco na satisfação dos clientes, na segurança dos colaboradores e no respeito ao meio ambiente.</p>
                </div>
            </div>

            <BoxContainer />

          </div>
            
         
            
          </section>

          {/* <section className="hero">
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

            
          </section> */}

        </div>
        <Footer />
        </section> 
        </>
    )
}