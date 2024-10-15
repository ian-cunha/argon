import React, { useEffect, useState } from 'react';

const Container: React.FC = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScroll(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const heroSectionStyle = {
    opacity: 1 - scroll * 0.002,
  };

  const heroFlexStyle = {
    transform: `translateY(${scroll * 0.5}px)`,
  };

  return (
    <div className="hero-section" id="inicio" style={heroSectionStyle}>
      <div className="hero-flex" style={heroFlexStyle}>
        <h1 className="slogan-hero">Alcance bons <br />resultados.</h1>
        <h2 className="frase-hero">Criamos o seu site e construímos uma identidade visual única do seu negócio.</h2>
        <a className="btn-hero" target="_blank" href="https://wa.me/5581993964043"> QUERO UM ORÇAMENTO <i className="fs-1 bi bi-arrow-right-circle-fill"></i></a>
      </div>
      <div className="hero-flex">
        <i className="bi bi-code-slash"></i>
      </div>
    </div>
  );
}

export default Container;