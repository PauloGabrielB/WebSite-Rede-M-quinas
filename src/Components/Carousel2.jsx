import React, { useRef } from 'react';
import { Carousel } from 'antd';

import cimg1 from '../img/cimg1.jpg';
import cimg3 from '../img/cimg3.jpg';
import img14 from '../pages/page02/img/img1.jpg'
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

export default function Carousel2() {
  const carouselRef = useRef();

  const next = () => {
    carouselRef.current.next();
  };

  const prev = () => {
    carouselRef.current.prev();
  };

  return (
    <>
      <Carousel ref={carouselRef} className='carousel'>
        <div className='carousel-1'>
          <img className='img1' src={img14} alt="" />
          <div className="cap-1">
          <h2>Maior Mix de Produtos</h2>
            <a href="https://linktr.ee/mktrede">
            <button className='cb1'>Saiba Mais</button>
            </a>
          </div>
        </div>

        <div className='carousel-2'>
          <img className='img2' src={cimg3} alt="" />
          <div className="cap-2">
          <h2>Solicite seu Orçamento</h2>
            <a href="https://linktr.ee/mktrede">
            <button className='cb1'>Saiba Mais</button>
            </a>
          </div>
        </div>

        <div className='carousel-3'>
          <img className='img3' src={cimg1} alt="" />
          <div className="cap-3">
          <h1 className=''>Equipamentos de Ponta</h1>
            <a href="https://linktr.ee/mktrede">
            <button className='cb1'>Saiba Mais</button>
            </a>
          </div>
        </div>
      </Carousel>

      {/* Setas para avançar e retroceder */}
      <button className="carousel-button prev" onClick={prev}><MdArrowBackIosNew className='seta' /></button>
      <button className="carousel-button next" onClick={next}><MdArrowForwardIos className='seta' /></button>
    </>
  );
}
