import '../page01/Home.css'
import Header from '../../Components/Header'
import Carousel from '../../Components/Carousel' 
import Footer from '../../Components/Footer'
import CardSlider from '../../Components/CardSlider'
import BoxContainer from '../../Components/BoxContainer'
import ContCircular from '../../Components/ContCircular'


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
            <div className="missao">
              <img src='' alt="" />
                <div className='missao-texto'>
                <h1>MISSÃO</h1>
                <p>Fornecer soluções completas em locação de equipamentos para diversos setores com foco na satisfação dos clientes, na segurança dos colaboradores e no respeito ao meio ambiente.</p>
                </div>
            </div>
            <BoxContainer />
          </div>           
          </section>
        </div>
        <Footer />
        </section> 
        </>
    )
}