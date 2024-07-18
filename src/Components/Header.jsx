import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logorm.png';
import menu from '../img/menu_white_36dp.svg';
import closeMenu from '../img/close_white_36dp.svg';


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
        console.log("Toggle menu:", isMenuOpen);
        
    }

    return (
        <header>
            <nav className='nav-bar'>
                <div className='logo-div'>
                    <img className='logo' src={logo} alt="" />
                </div>

                <div className="nav-list">
                    <ul className={isMenuOpen ? 'nav-list-open' : 'nav-list-closed'}>
                        <Link to={'/'}>
                        <li className='nav-item'><a className='nav-link' href="#home">Inicio</a></li>
                        </Link>
                        <Link to={'/Equipamentos'}>
                            <li className='nav-item'><a className='nav-link' href="#equipamentos">Equipamentos</a></li>
                        </Link>
                        <Link to={'/Sobre'}>
                            <li className='nav-item'><a className='nav-link' href="#sobre">Sobre</a></li>
                        </Link>
                        <Link to={'/Contato'}>
                            <li className='nav-item'><a className='nav-link' href="#contato">Contato</a></li>
                        </Link>
                        <Link to={'/Trabalhe'}>
                            <li className='nav-item'><a className='nav-link' href="#contato">Trabalhe Conosco</a></li>
                        </Link>
                        <Link to={'/Sac'}>
                            <li className='nav-item'><a className='nav-link' href="#contato">SAC</a></li>
                        </Link>
                        
                        <div className='icons-mobile'>
                        <a href="https://www.instagram.com/redemaquinas/">
                            <i className='fa-brands fa-instagram'></i>
                        </a>
                        <a href="https://www.linkedin.com/company/66842664/admin/feed/posts/">
                            <i className='fa-brands fa-linkedin'></i>
                        </a>
                        <a href="https://linktr.ee/mktrede">
                            <i className='fa-brands fa-whatsapp'></i>
                        </a>
                        <a href="https://www.facebook.com/redemaquinass">
                            <i className='fa-brands fa-facebook'></i>
                        </a>
                        <a href="https://www.youtube.com/@redemaquinas7693">
                        <i className="fa-brands fa-youtube"></i>
                        </a>
                    </div>
                    </ul>
                   
                </div>

                <div className='nav-icons'>
                    <a href="https://www.instagram.com/redemaquinas/">
                        <i className='fa-brands fa-instagram'></i>
                    </a>
                    <a href="https://www.linkedin.com/company/66842664/admin/feed/posts/">
                        <i className='fa-brands fa-linkedin'></i>
                    </a>
                    <a href="https://linktr.ee/mktrede">
                        <i className='fa-brands fa-whatsapp'></i>
                    </a>
                    <a href="https://www.facebook.com/redemaquinass">
                        <i className='fa-brands fa-facebook'></i>
                    </a>
                    <a href="https://www.youtube.com/@redemaquinas7693">
                    <i className="fa-brands fa-youtube"></i>
                    </a>
                </div>
                
                <div className="mobile-menu-icon">
                    <button onClick={toggleMenu}>
                        <img className='icon-menu' src={isMenuOpen ? closeMenu : menu} alt="" />
                    </button>
                </div>
            </nav>
        </header>
    );
}
