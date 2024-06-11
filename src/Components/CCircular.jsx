import React, { useState } from 'react';

import img10 from '../pages/page01/img/img10.png';
import img11 from '../pages/page01/img/rlogo.png';
// Adicione outras imagens conforme necessário

const App = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [centerImage, setCenterImage] = useState(img10);

  const handleMouseEnter = (index, img) => {
    setActiveButton(index);
    setCenterImage(img);
  };

  const handleMouseLeave = () => {
    setActiveButton(null);
    setCenterImage(img10);
  };

  const buttonData = [
    { title: 'Comércio e Serviços', img: img11, description: 'Nossa empresa oferece soluções de locação de equipamentos para empresas de Comércio e Serviços...' },
    { title: 'Energia', img: img11, description: 'Oferecemos equipamentos de alta qualidade para o setor de Energia...' },
    { title: 'Infraestrutura', img: img11, description: 'Fornecemos uma ampla gama de equipamentos essenciais para projetos de infraestrutura...' },
    { title: 'Óleo e Gás', img: img11, description: 'Para o setor de Óleo e Gás, alugamos equipamentos especializados...' },
    { title: 'Indústria', img: img11, description: 'No setor industrial, oferecemos máquinas e ferramentas para montagem...' },
    { title: 'Outros', img: img11, description: 'Para outras necessidades de locação, fornecemos uma variedade de equipamentos...' },
  ];

  return (
    <div className="container">
      <img className="center-image" src={centerImage} alt="Center" />
      <div className="coluna-1">
        {buttonData.slice(0, 3).map((button, index) => (
          <div
            key={index}
            className={`div${index + 1} ${activeButton === index + 1 ? 'active' : ''}`}
            onMouseEnter={() => handleMouseEnter(index + 1, button.img)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={button.img} alt={`${button.title} icon`} />
            <h1>{button.title}</h1>
            {activeButton === index + 1 && <p className='left-p'>{button.description}</p>}
          </div>
        ))}
      </div>
      <div className="coluna-2">
        {buttonData.slice(3).map((button, index) => (
          <div
            key={index + 3}
            className={`div${index + 4} ${activeButton === index + 4 ? 'active' : ''}`}
            onMouseEnter={() => handleMouseEnter(index + 4, button.img)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={button.img} alt={`${button.title} icon`} />
            <h1>{button.title}</h1>
            {activeButton === index + 4 && <p className='rigth-p'>{button.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
