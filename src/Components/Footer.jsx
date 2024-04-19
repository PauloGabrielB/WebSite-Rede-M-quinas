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
                    <a href="">
                        <h1>Fortaleza - CE</h1>
                        <p>Rodovia BR-116, 1854,Cajazeiras.</p>
                    </a>
                    <a href="">
                        <h1>Barbalha - CE</h1>
                        <p>Av.Leão Sampaio, 4510 Mata dos Dudas.</p>
                    </a>
                    <a href="">
                        <h1>Teresina - PI - Unidade Pedro de Freitas</h1>
                        <p>Av.Pedro Freitas, 1555, São Pedro.</p>
                    </a>
                    <a href="">
                        <h1>Teresina - PI - Unidade Kennedy</h1>
                        <p>Rua Comandante Área Leão, 09, São Cristovão.</p>    
                    </a>
                    <a href="">
                        <h1>Mossoró - RN</h1>
                        <p>Av.Wilson Rosado, 1798, Nova Betânia.</p>
                    </a>
                    <a href="">
                        <h1>São Luís - MA</h1>
                        <p>Rua Oito, 01, Distrito Insdustrial</p>
                    </a>
                    <a href="">
                        <h1>Petrolina - PE</h1>
                        <p>Av. Deputado Ulisses Guimarães, 601, Portal da Cidade</p>
                    </a>
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
                    <a href="https://www.instagram.com/redemaquinas/">
                        <i className='fa-brands fa-instagram'></i>
                    </a>
                    <a href="https://www.linkedin.com/company/66842664/admin/feed/posts/">
                        <i className='fa-brands fa-linkedin'></i>
                    </a>
                    <a href="">
                        <i className='fa-brands fa-whatsapp'></i>
                    </a>
                    <a href="https://www.facebook.com/redemaquinass">
                        <i className='fa-brands fa-facebook'></i>
                    </a>
                    <a href="https://www.youtube.com/@redemaquinas7693">
                    <i className="fa-brands fa-youtube"></i>
                    </a>
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