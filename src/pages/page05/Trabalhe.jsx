import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Formulario from '../../Components/Formulario'
import logo from './img/logo.png'
import './Trabalhe.css'

export default function Trabalhe() {

    return (
        <>

        <Header />
        <section className="trabalhe">
            <div className="trabalhe-img">
                <img src={logo} alt="" />
                <h1>Traga Seu Talento para a Rede Máquinas.</h1>
                <h2>Envie seu Currículo !</h2>
            </div>            
            <Formulario />
        </section>
        <Footer />
        </>
    )   
}