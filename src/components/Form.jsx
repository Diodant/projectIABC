import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    name: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <div className='form'>
      <div className="form-container">
        {submitted ? (
          <p className="form-submitted-message">Спасибо за отправку, ваша заявка на рассмотрении.</p>
        ) : (
          <>
            <div className="form-header">
              <h2>Заполните форму</h2>
              <p>Пожалуйста, введите ваше имя, email и телефон, чтобы мы могли с вами связаться.</p>
            </div>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone" className="form-label">Телефон:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Имя:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              <button type="submit" className="form-submit-button">Отправить</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default Form;
