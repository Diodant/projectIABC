import React from 'react';

function Contacts() {
  return (
    <div className="contact-wrapper">
    <div className="contact-container">
      <h1 className="contact-heading">Контакты</h1>
      <div className="contact-details">
        <p className="contact-item">Телефон: <span className="contact-info">+7 8 (800) 550-32-18</span></p>
        <p className="contact-item">Email: <a href="mailto:info@mapik-ibi.ru" className="contact-info">info@mapik-ibi.ru</a></p>
        <p className="contact-item">Адрес: <span className="contact-info">117405, Россия, Москва, Варшавское шоссе, 21 км, вл.4</span></p>
      </div>
    </div>
    </div>
  );
}

export default Contacts;
