import Header from "../../Components/Header"
import Formulario from '../../Components/Formulario'
import Footer from '../../Components/Footer'
import sacimg from '../../pages/page06/img/sac.png'
import './Sac.css'



export default function Sac() {

    return (
        <>
        <section className="tela-toda">
        <Header />
        <div className="container-sac">
            <div>
                 <div className="sac">
            <img src={sacimg} alt="" />
            <div className="formsac">
            <Formulario />
            </div>
        </div>
            </div>
        {/* <h2>Queremos ouvir você.</h2>
        <h3>Em que podemos ajudar ?</h3>
        <Formulario /> */}
        </div>
        <Footer />
        </section>
        
        </>
    )
}