import Header from "../../Components/Header"
import Formulario from '../../Components/Formulario'
import Footer from '../../Components/Footer'
import './Sac.css'


import rmm from './img/rmm.png'

export default function Sac() {

    return (
        <>
        <Header />
        <section className="container-sac">
        <div className="sac-img">
            <img src={rmm} alt="" />
        </div>
        <h2>Queremos ouvir você.</h2>
        <h3>Em que podemos ajudar ?</h3>
        <Formulario />
        </section>
        <Footer />
        </>
    )
}