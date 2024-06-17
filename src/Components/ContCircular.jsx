import React, { useState } from 'react';

import img10 from '../pages/page01/img/img10.png';
import img11 from '../pages/page01/img/rlogo.png';
import img12 from '../img/cimg12.jpg';
// Adicione outras imagens conforme necessário

const App = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [centerImage, setCenterImage] = useState(img10);

  const handleMouseEnter = (index, hoverImg) => {
    setActiveButton(index);
    setCenterImage(hoverImg);
  };

  const handleMouseLeave = () => {
    setActiveButton(null);
    setCenterImage(img10);
  };

  const buttonData = [
    { title: 'Serviços', hoverImg: img12, description: 'Nossa empresa oferece soluções de locação de equipamentos para empresas de Comércio e Serviços...' },
    { title: 'Energia', hoverImg: img10, description: 'Oferecemos equipamentos de alta qualidade para o setor de Energia...' },
    { title: 'Infraestrutura', hoverImg: img11, description: 'Fornecemos uma ampla gama de equipamentos essenciais para projetos de infraestrutura...' },
    { title: 'Óleo e Gás', hoverImg: img12, description: 'Para o setor de Óleo e Gás, alugamos equipamentos especializados...' },
    { title: 'Indústria', hoverImg: img12, description: 'No setor industrial, oferecemos máquinas e ferramentas para montagem...' },
    { title: 'Outros', hoverImg: img12, description: 'Para outras necessidades de locação, fornecemos uma variedade de equipamentos...' },
  ];

  return (
    <div className="container">
      <img className="center-image" src={centerImage} alt="Center" />
      {buttonData.map((button, index) => (
        <div
          key={index}
          className={`button-container button-${index + 1} ${activeButton === index + 1 ? 'active' : ''}`}
          onMouseEnter={() => handleMouseEnter(index + 1, button.hoverImg)}
          onMouseLeave={handleMouseLeave}
        >
          <img src={img11} alt={`${button.title} icon`} />
          <h1>{button.title}</h1>
          {activeButton === index + 1 && <p className='description'>{button.description}</p>}
        </div>
      ))}
    </div>
  );
};

export default App;
