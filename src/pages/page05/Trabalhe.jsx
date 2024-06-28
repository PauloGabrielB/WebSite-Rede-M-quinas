import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Formulario from '../../Components/Formulario'
import FormGrande from '../../Components/FormGrande'
import timg from './img/trabalheimg.png'
import './Trabalhe.css'
import { FaWhatsapp } from "react-icons/fa";

export default function Trabalhe() {

    return (
        <>
        <section className="tela-toda">
        <Header />
        <section className="trabalhe">
            {/* <div className="trabalhe-img">
                <img src={cimg1} alt="" />
                <h1>Traga Seu Talento para a Rede Máquinas.</h1>
                <h2>Envie seu Currículo !</h2>
                <a href="https://linktr.ee/mktrede">
                <button><FaWhatsapp className='wicon' />WhatsApp</button>
                </a>
            </div>             */}
            <div className="trabalhe-img">
                <img src={timg} alt="" />
            </div>
            <div className="formgrande">
            <FormGrande />
            </div>
            {/* <Formulario /> */}
        </section>
        <Footer /> 
        </section>
        
        </>
    )   
}