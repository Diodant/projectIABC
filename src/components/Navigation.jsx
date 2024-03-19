import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div className="navigation-container">
      <div className="navigation-menu left-menu">
        <Link to="/about-us">О IABC</Link>
        <Link to="/members">Члены Ассоциации</Link>
        <Link to="/documents">Документы</Link>
      </div>
      <div className="navigation-logo">
        <img src="https://static.tildacdn.com/tild3762-3533-4938-b337-313361633639/IMG_3445.PNG" alt="Логотип" />
      </div>
      <div className="navigation-menu right-menu">
      <Link to="/contacts">Награды </Link>
        <Link to="/articles">Публикации</Link>
        <Link to="/contacts">Контакты</Link>
      </div>
    </div>
  );
}

export default Navigation;
