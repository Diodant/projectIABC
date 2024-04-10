import React from 'react';
import { Helmet } from 'react-helmet-async';

function Contacts() {
  return (
    <div className="contact-wrapper">
          <Helmet>
        <title>Контакты Ассоциации IABC</title>
        <meta
        name="description"
        content='Контакты Международной Ассоциацией Красоты и Ухода (International Association of Beauty and Care) IABC'
        />
        <link rel="canonical" href="https://iabc-association.com/contacts"/>
      </Helmet>
          <div className="text-center">
        <div id="our-statute" className="contact-title" >Некоммерческая организация Международная Ассоциация Красоты и Ухода</div>

        </div>
    <div className="contact-container">
      <h1 className="contact-heading">Юридический/Фактический адрес</h1>
      <div className="contact-details">
        <p className="contact-item">Телефон: <span className="contact-info">8 (800) 550-48-76</span></p>
        <p className="contact-item">Email: <a href="iabc.association@gmail.com" className="contact-info">iabc.association@gmail.com</a></p>
        <p className="contact-item">Адрес: <span className="contact-info">117405, Россия, Москва, Варшавское шоссе, 21 км</span></p>
      </div>
    </div>
    </div>
  );
}

export default Contacts;
