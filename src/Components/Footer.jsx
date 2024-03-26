import logorm from '../img/logorm.png'
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function Footer() {

    return (
        <>
        <footer className="footer">
           <div className='fp1'>
            <img src={logorm} alt="" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque tempore totam illum iusto corporis sit</p>
           </div>
           <div className='fp2'>
            <h1>PÁGINAS</h1>
                <div className="flinks">
                    <a href="">Home</a>
                    <a href="">Equipamentos</a>
                    <a href="">Sobre</a>
                    <a href="">Contato</a>
                    <a href="">Trabalhe Conosco</a>
                    <a href="">SAC</a>
                </div>
           </div>
           <div className='fp3'>
            <h1 className='fp3-title'>ENDEREÇOS</h1>
           <div className="local">
                    <a href=""><h1>Fortaleza - CE</h1></a>
                    <a href=""><h1>Barbalha - CE</h1></a>
                    <a href=""><h1>Teresina - PI - Unidade Pedro de Freitas</h1></a>
                    <a href=""><h1>Teresina - PI - Unidade Kennedy</h1></a>
                    <a href=""><h1>Mossoró - RN</h1></a>
                    <a href=""><h1>São Luís - MA</h1></a>
                    <a href=""><h1>Petrolina - PE</h1></a>
                </div>
           </div>
           
           <div className='fp4'>
            <div className="fp4-contatos">
                <div className='fp4-telefone'>
                    <i className='fas fa-phone'></i>
                    <h1>0800 285 0111</h1>
                </div>
                <div className='fp4-email'>
                    <i className="fas fa-envelope"></i>
                    <h1>contato@redemaquinas.com.br</h1>
                </div>
                <div className='fp4-funcionamento'>
                    <i className="fa-solid fa-circle-check"></i>
                    <h1>Seg - Sex : 07:30 ás 12:00 - 13:15 ás 17:33</h1>
                </div>
                <div className='fp4-icons'>
                    <i className='fa-brands fa-instagram'></i>
                    <i className='fa-brands fa-linkedin'></i>
                    <i className='fa-brands fa-whatsapp'></i>
                    <i className='fa-brands fa-facebook'></i>
                </div>
            </div>
           </div>
           
        </footer>
           <div className="agencia">
                <p className="copyright">© 2024 PagCode. Todos os direitos reservados.</p>
           </div>
        </>
    )
}