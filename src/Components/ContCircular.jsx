import React, { useState } from 'react';

import img10 from '../pages/page01/img/img10.png'
import img11 from '../pages/page01/img/rlogo.png'


const App = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (index) => {
    setActiveButton(activeButton === index ? null : index);
  };

  return (
    <div className="container">
      <img className='center-image' src={img10} alt="Center" />
      <div className="coluna-1">
        <div className={`div1 ${activeButton === 1 ? 'active' : ''}`} onClick={() => handleButtonClick(1)}>
          <h1>Comércio e Serviços</h1>
          {activeButton === 1 && <p className='left-p'>
          Nossa empresa oferece soluções de locação de equipamentos para empresas de Comércio e Serviços que necessitam de infraestrutura temporária para eventos, instalações comerciais e outras atividades. Fornecemos desde geradores de energia a tendas e estruturas temporárias, garantindo suporte eficiente para suas operações.
          </p>}
          {activeButton !== 1 && <img className='r-1' src={img11} alt="" />}
        </div>
        <div className={`div2 ${activeButton === 2 ? 'active' : ''}`} onClick={() => handleButtonClick(2)}>
          <h1>Energia</h1>
          {activeButton === 2 && <p className='left-p'>
          Oferecemos equipamentos de alta qualidade para o setor de Energia, incluindo geradores, transformadores e ferramentas de manutenção. Nossos serviços garantem que você tenha os recursos necessários para instalação, manutenção e reparo de sistemas de energia, promovendo eficiência e confiabilidade em suas operações.
          </p>}
          {activeButton !== 2 && <img className='r-1' src={img11} alt="" />}
        </div>
        <div className={`div3 ${activeButton === 3 ? 'active' : ''}`} onClick={() => handleButtonClick(3)}>
          <h1>Infraestrutura</h1>
          {activeButton === 3 && <p className='left-p'>
          Fornecemos uma ampla gama de equipamentos essenciais para projetos de infraestrutura, como escavadeiras, carregadeiras, guindastes e equipamentos de pavimentação. Nossos produtos garantem que sua obra seja realizada com segurança, eficiência e dentro do cronograma.
          </p>}
          {activeButton !== 3 && <img className='r-1' src={img11} alt="" />}
        </div>
      </div>
      <div className="coluna-2">
        <div className={`div4 ${activeButton === 4 ? 'active' : ''}`} onClick={() => handleButtonClick(4)}>
          <h1>Óleo e Gás</h1>
          {activeButton === 4 && <p className='rigth-p'>
          Para o setor de Óleo e Gás, alugamos equipamentos especializados como plataformas de perfuração, bombas de alta pressão e maquinário para construção de pipelines. Nossos equipamentos são projetados para suportar as demandas rigorosas deste setor, assegurando operações seguras e eficazes.
          </p>}
          {activeButton !== 4 && <img className='r-1' src={img11} alt="" />}
        </div>
        <div className={`div5 ${activeButton === 5 ? 'active' : ''}`} onClick={() => handleButtonClick(5)}>
          <h1>Industria</h1>
          {activeButton === 5 && <p className='rigth-p'>
          No setor industrial, oferecemos máquinas e ferramentas para montagem, manutenção e expansão de instalações. Desde empilhadeiras a compressores de ar, nossos equipamentos ajudam a aumentar a produtividade e garantir a segurança do ambiente de trabalho.
          </p>}
          {activeButton !== 5 && <img className='r-1' src={img11} alt="" />}
        </div>
        <div className={`div6 ${activeButton === 6 ? 'active' : ''}`} onClick={() => handleButtonClick(6)}>
          <h1>Outros</h1>
          {activeButton === 6 && <p className='rigth-p'>
          Para outras necessidades de locação, fornecemos uma variedade de equipamentos que atendem a diversos setores. Seja qual for seu projeto, temos a solução adequada para garantir que suas operações sejam concluídas com sucesso, desde equipamentos leves a maquinário pesado.  
          </p>}
          {activeButton !== 6 && <img className='r-1' src={img11} alt="" />}
        </div>
      </div>
    </div>
  );
};

export default App;
