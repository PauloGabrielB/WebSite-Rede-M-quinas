import React, { useState, useEffect } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';

// Importação das imagens
import simg1 from '../img/Andaime-Fachadeiro.png';
import simg2 from '../img/prod10.jpg';
import simg3 from '../img/simg3.jpg';
import simg4 from '../img/simg4.jpg';
import simg5 from '../img/simg5.jpg';
import simg6 from '../img/simg6.jpg';
import simg7 from '../img/simg7.jpg';
import simg8 from '../img/simg8.jpg';
import simg9 from '../img/simg9.jpg';
import simg10 from '../img/simg10.png';

export default function CardSlider() {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [slidesPerPage, setSlidesPerPage] = useState(0);
  const [slidesCount, setSlidesCount] = useState(0);

  useEffect(() => {
    const container = document.getElementById('slider-container');
    const slides = document.getElementsByClassName('slide').length;

    const checkWidth = () => {
      const w = container.offsetWidth;
      setParams(w, slides);
    };

    const setParams = (w, slides) => {
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

  const swipeHandlers = useSwipeable({
    onSwipedLeft: slideRight,
    onSwipedRight: slideLeft,
  });

  const currentMargin = -(currentPosition * (100 / slidesPerPage));

  return (
    <section className="component-slider">
      <span onClick={slideLeft} className={`btn ${currentPosition === 0 ? 'inactive' : ''}`}><IoIosArrowBack className='seta-back' /></span>
      <div id="slider-container" className="slider-container" {...swipeHandlers}>
        <div id="slider" className="slider" style={{ marginLeft: `${currentMargin}%` }}>
          {[
            { src: simg1, link: '/Equipamentos', title: 'Andaimes' },
            { src: simg2, link: '/Betoneiras', title: 'Betoneiras' },
            { src: simg3, link: '/Geradores', title: 'Geradores' },
            { src: simg4, link: '/Compactador', title: 'Compactador' },
            { src: simg5, link: '/Plataformas', title: 'Plataformas' },
            { src: simg6, link: '/Compressores', title: 'Compressores' },
            { src: simg7, link: '/Maquinas', title: 'Máquinas' },
            { src: simg8, link: '/Ferramentas', title: 'Ferramentas' },
            { src: simg9, link: '/Cargas', title: 'Cargas' },
            { src: simg10, link: '/Terraplanagem', title: 'Terra Planagem' },
          ].map((slide, index) => (
            <div key={index} className="slide">
              <img src={slide.src} alt="" />
              <Link to={slide.link} style={{ textDecoration: 'none' }}>
                <h1>{slide.title}</h1>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <span onClick={slideRight} className={`btn ${currentPosition === slidesCount ? 'inactive' : ''}`}><IoIosArrowForward className='seta-next' /></span>
    </section>
  );
}
