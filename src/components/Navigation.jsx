import React from 'react';
import { Link } from 'react-router-dom';
import LogoImg from '../img/logo.png'

function Navigation() {
  return (
    <div className="navigation-container">
      <div className="navigation-menu left-menu">
        <Link to="/about-us">О IABC</Link>
        <Link to="/members">Члены Ассоциации</Link>
        <Link to="/awards">Награды </Link>

      </div>
      <div className="navigation-logo">
      <Link to="/"><img src={LogoImg} alt="Логотип" /></Link>
      </div>
      <div className="navigation-menu right-menu">
      <Link to="/documents">Документы</Link>
        <Link to="/articles">Публикации</Link>
        <Link to="/contacts">Контакты</Link>
      </div>
    </div>
  );
}

export default Navigation;
