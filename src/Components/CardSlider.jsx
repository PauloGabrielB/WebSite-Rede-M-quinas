import React, { useState, useEffect } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';

// importação das imagens
import simg1 from '../img/Andaime-Fachadeiro.png'
import simg2 from '../img/prod10.jpg'
import simg3 from '../img/simg3.jpg'
import simg4 from '../img/simg4.jpg'
import simg5 from '../img/simg5.jpg'
import simg6 from '../img/simg6.jpg'
import simg7 from '../img/simg7.jpg'
import simg8 from '../img/simg8.jpg'
import simg9 from '../img/simg9.jpg'
import simg10 from '../img/simg10.png'

export default function CardSlider() {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [slidesPerPage, setSlidesPerPage] = useState(0);
  const [slidesCount, setSlidesCount] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);


  
  useEffect(() => {
    const container = document.getElementById('slider-container');
    const slides = document.getElementsByClassName('slide').length;

    const checkWidth = () => {
      const w = container.offsetWidth;
      setContainerWidth(w);
      setParams(w);
    };

    const setParams = (w) => {
      let newSlidesPerPage;
      if (w < 551) {
        newSlidesPerPage = 1;
      } else if (w < 901) {
        newSlidesPerPage = 2;
      } else if (w < 1101) {
        newSlidesPerPage = 3;
      } else {
        newSlidesPerPage = 4;
      }
      setSlidesPerPage(newSlidesPerPage);
      setSlidesCount(slides - newSlidesPerPage);
    };

    window.addEventListener('resize', checkWidth);
    checkWidth();

    return () => {
      window.removeEventListener('resize', checkWidth);
    };
  }, []);

  const slideRight = () => {
    if (currentPosition < slidesCount) {
      setCurrentPosition(currentPosition + 1);
    }
  };

  const slideLeft = () => {
    if (currentPosition > 0) {
      setCurrentPosition(currentPosition - 1);
    }
  };

  const currentMargin = -(currentPosition * (100 / slidesPerPage));

  return (
    <section className="component-slider">
      <span onClick={slideLeft} className={`btn ${currentPosition === slidesCount ? 'inactive' : ''}`}><IoIosArrowBack className='seta-back' /></span>
      <div id="slider-container" className="slider-container">
        
        <div id="slider" className="slider" style={{marginLeft: `${currentMargin}%`}}>

        
          <div className="slide">
            <img src={simg1} alt="" />
            <Link to={'/Equipamentos'} style={{ textDecoration: 'none' }}>
                <h1>Andaimes</h1>       
            </Link>
            </div>
          <div className="slide">
            <img src={simg2} alt="" />
            <Link to={'/Betoneiras'} style={{ textDecoration: 'none' }}> 
            <h1>Betoneiras</h1>
            </Link>
          </div>
          <div className="slide simg3">
            <img src={simg3} alt="" />
            <Link to={'/Geradores'} style={{ textDecoration: 'none' }}>
            <h1>Geradores</h1>
            </Link>
          </div>
          <div className="slide simg4">
            <img src={simg4} alt="" />
            <Link to={'/Compactador'} style={{ textDecoration: 'none' }}>
            <h1>Compactador</h1>
            </Link>
          </div>
          <div className="slide simg5">
            <img src={simg5} alt="" />
            <Link to={'/Plataformas'} style={{ textDecoration: 'none' }}>
              <h1>Plataformas</h1>
            </Link>
          </div>
          <div className="slide simg6">
            <img src={simg6} alt="" />
            <Link to={'/Compressores'} style={{ textDecoration: 'none' }}>
              <h1>Compressores</h1>
            </Link>
          </div>
          <div className="slide">
            <img src={simg7} alt="" />
            <Link to={'/Maquinas'} style={{ textDecoration: 'none' }}>
            <h1>Máquinas</h1>
            </Link>
          </div>
          <div className="slide">
            <img src={simg8} alt="" />
            <Link to={'/Ferramentas'} style={{ textDecoration: 'none' }}>
            <h1>Ferramentas</h1>
            </Link>
          </div>
          <div className="slide">
            <img src={simg9} alt="" />
            <Link to={'/Cargas'} style={{ textDecoration: 'none' }}>
            <h1>Cargas</h1>
            </Link>
          </div>
          <div className="slide simg10">
            <img src={simg10} alt="" />
            <Link to={'/Terraplanagem'} style={{ textDecoration: 'none' }}>
            <h1>Terra Planagem</h1>
            </Link>
          </div>
        </div>
      </div>
        <span onClick={slideRight} className={`btn ${currentPosition === 0 ? 'inactive' : ''}`}><IoIosArrowForward className='seta-next' /></span>
    </section>
  );
}
