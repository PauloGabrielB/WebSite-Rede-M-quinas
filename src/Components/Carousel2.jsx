import React, { useRef } from 'react';
import { Carousel } from 'antd';
import cimg4 from '../img/cimg4.jpg';
import cimg1 from '../img/cimg1.jpg';
import cimg3 from '../img/cimg3.jpg';
import img14 from '../img/img14.png'
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
            <h2 className='ch1'>Equipamentos de Ponta</h2>
            <button><a href="https://linktr.ee/mktrede">Saiba Mais</a></button>
          </div>
        </div>

        <div className='carousel-2'>
          <img className='img2' src={cimg3} alt="" />
          <div className="cap-2">
            <h2>Transporte de Equipamentos</h2>
            <button><a href="https://linktr.ee/mktrede">Saiba Mais</a></button>
          </div>
        </div>

        <div className='carousel-3'>
          <img className='img3' src={cimg1} alt="" />
          <div className="cap-3">
            <h1>Equipe Especializada</h1>
            <button><a href="https://linktr.ee/mktrede">Saiba Mais</a></button>
          </div>
        </div>
      </Carousel>

      {/* Setas para avançar e retroceder */}
      <button className="carousel-button prev" onClick={prev}><MdArrowBackIosNew className='seta' /></button>
      <button className="carousel-button next" onClick={next}><MdArrowForwardIos className='seta' /></button>
    </>
  );
}
