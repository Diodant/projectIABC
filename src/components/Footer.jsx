import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer-container">
          <div className="footer-logo">
            <img src="https://static.tildacdn.com/tild3762-3533-4938-b337-313361633639/IMG_3445.PNG" alt="Футер логотип" />
          </div>
          <div className="footer-links">
            <a href="#privacy">Политика конфиденциальности</a>
            <a href="#terms">Условия использования</a>
            <a href="#about">О нас</a>
            <a href="#partners">Партнёры</a>
            <a href="#careers">Карьера</a>
            <a href="#contact">Контакты</a>
          </div>
        </div>
      );
    };

  export default Footer;
