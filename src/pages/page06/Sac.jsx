import Header from "../../Components/Header"
import Formulario from '../../Components/Formulario'
import Footer from '../../Components/Footer'
import './Sac.css'



import imgsac from './img/imgsac.png'

export default function Sac() {

    return (
        <>
        <section className="tela-toda">
        <Header />
        <section className="container-sac">
        <div className="sac-img">
            <img src={imgsac} alt="" />
        </div>
        <h2>Queremos ouvir você.</h2>
        <h3>Em que podemos ajudar ?</h3>
        <Formulario />
        </section>
        <Footer />
        </section>
        
        </>
    )
}