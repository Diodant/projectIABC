import React from 'react';
import { Link } from 'react-router-dom';
import LogoImg from '../img/logo.png'

const Footer = () => {
    return (
        <div className="footer-container">
          <div className="footer-logo">
          <Link to="/"><img src={LogoImg} alt="Футер логотип" /></Link>
          </div>
          <div className="footer-links">
          <Link to="/about-us">О IABC</Link>
          <Link to="/members">Члены Ассоциации</Link>
          <Link to="/awards">Награды </Link>
          <Link to="/documents">Документы</Link>
        <Link to="/articles">Публикации</Link>
        <Link to="/contacts">Контакты</Link>
          </div>
        </div>
      );
    };

  export default Footer;
