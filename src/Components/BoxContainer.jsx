import imgico1 from '../img/imgico1.png'
import imgico2 from '../img/imgico2.png'
import imgico3 from '../img/imgico3.png'
import imgico4 from '../img/imgico4.png'
import imgico5 from '../img/imgico5.png'


export default function BoxContainer() {
    return (
        <section className="box-section">
            <h1>Locação de Equipamentos e Plataforma Elevatória para diversos tipos de segmentos</h1>
            <div className="box-container">
                <div className="box"><img className='iif' src={imgico1} alt="" /></div>
                <div className="box"><img src={imgico2} alt="" /></div>
                <div className="box"><img src={imgico3} alt="" /></div>
                <div className="box"><img src={imgico4} alt="" /></div>
                <div className="box"><img src={imgico5} alt="" /></div>
            </div>
        </section>
    )
}