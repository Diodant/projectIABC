import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div className="navigation-container">
      <div className="navigation-menu left-menu">
        <a href="#mission">О IABC</a>
        <a href="#goals">Члены Ассоциации</a>
        <a href="#activity">Документы</a>
      </div>
      <div className="navigation-logo">
        <img src="https://static.tildacdn.com/tild3762-3533-4938-b337-313361633639/IMG_3445.PNG" alt="Логотип" />
      </div>
      <div className="navigation-menu right-menu">
        <a href="#news">Награды </a>
        <a href="#contacts">Публикации</a>
        <a href="#calendar">Контакты</a>
      </div>
    </div>
  );
}

export default Navigation;
