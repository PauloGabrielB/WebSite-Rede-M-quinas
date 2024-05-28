import React, { useRef } from 'react';
import { Carousel } from 'antd';
import cimg1 from '../img/cimg1.jpg';
import cimg2 from '../img/cimg2.jpg';
import cimg3 from '../img/cimg3.jpg';
import img14 from '../img/img14.png'
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

export default function Carousell() {
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
          <img className='img1' src={cimg1} alt="" />
          <div className="caption-1">
            <h2>Equipe Especializada</h2>
            <button><a href="https://linktr.ee/mktrede">Saiba Mais</a></button>
          </div>
        </div>

        <div className='carousel-2'>
          <img className='img2' src={img14} alt="" />
          <div className="caption-2">
            <h2>Equipamentos de Ponta</h2>
            <button><a href="https://linktr.ee/mktrede">Saiba Mais</a></button>
          </div>
        </div>

        <div className='carousel-3'>
          <img className='img3' src={cimg3} alt="" />
          <div className="caption-3 cp3">
            <h1 className='cph1'>Transporte de Equipamento</h1>
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
