import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CardCarousel.css'; // Crie este arquivo CSS para estilizar o carrossel, se necessário

function CardCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      <div className='card'>
        <h3>Card 1</h3>
        <p>This is a card.</p>
      </div>
      <div className='card'>
        <h3>Card 2</h3>
        <p>This is another card.</p>
      </div>
      <div className='card'>
        <h3>Card 3</h3>
        <p>Yet another card.</p>
      </div>
      {/* Adicione mais divs de card aqui conforme necessário */}
    </Slider>
  );
}

export default CardCarousel;
