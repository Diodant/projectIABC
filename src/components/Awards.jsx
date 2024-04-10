import React, { useRef, useEffect, useState } from 'react';
import ArrowImg from '../img/arrow.svg'
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import certificate_members from './certificate_members';


function Awards() {

  const membersPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  // Дополнительные состояния для анимации
  const [animating, setAnimating] = useState(false);

  const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember = indexOfLastMember - membersPerPage;
  const currentMembers = certificate_members.slice(indexOfFirstMember, indexOfLastMember);

  const totalPages = Math.ceil(certificate_members.length / membersPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages || animating) return;
    setAnimating(true); // Начинаем анимацию
    setCurrentPage(pageNumber);
    setTimeout(() => setAnimating(false), 300); // Заканчиваем анимацию после 300 мс
  };

    const certificateRef = useRef(null);
    const statuteRef = useRef(null);
    const certificatmRef = useRef(null);

    const scrollToСertificate = () => {
      certificateRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToStatute = () => {
      statuteRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToСertificatMember = () => {
      certificatmRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const initialLoad = useRef(true);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        if (initialLoad.current) {
            scrollToTop();
            initialLoad.current = false;
        }
    }, []);

  return (
    <div>
    <Helmet>
        <title>Награды Ассоциации IABC</title>
        <meta
        name="description"
        content="Награды Международной Ассоциацией Красоты и Ухода (International Association of Beauty and Care) IABC"
        />
        <link rel="canonical" href="https://iabc-association.com/awards"/>
      </Helmet>
      <div class="awards_img">
        <div className="content-blur"></div>
    <div class="content-overlay">
    <h1 className="main-title">Награды Ассоциации IABC</h1>
    <h1 className="link-title" onClick={scrollToСertificate}>Сертификат</h1>
    <h1 className="link-title" onClick={scrollToStatute}>Статут</h1>
    <h1 className="link-title" onClick={scrollToСertificatMember}>Обладатели Международного Сертификата</h1>
    </div>
    </div>
    <div className="documents-wrapper">
    <div className="text-center">
        <div className="page-title" ref={certificateRef}>Сертификат</div>
        <div className="awards-title">Международный Сертификат “за заслуги в индустрии красоты”</div>
        </div>
        <p className="page-text">Сертификат "За заслуги в индустрии красоты" вручается выдающимся мастерам красоты за личные высокие достижения, которые оказали значительное влияние на развитие и прогресс индустрии красоты как в своих странах, так и за их пределами. Личные достижения могут включать в себя:</p>
        <ul className="content-details-list page-text">
          <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>Создание и внедрение инновационных красотных технологий и методик, которые стали стандартом в индустрии</li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>Организацию и проведение успешных мероприятий в индустрии красоты</li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>Разработку и внедрение новых, уникальных и эффективных методов, техник и подходов в сфере услуг индустрии красоты</li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>Построение и укрепление бренда в индустрии красоты, делая его символом качества, профессионализма и доверия для клиентов</li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>Признание в индустрии красоты за соблюдение высоких этических стандартов, профессионализм и прозрачность в работе</li>
        </ul>
        <p className="page-text">Ежегодное вручение Сертификата "За заслуги в индустрии красоты" становится значимым событием для профессионального сообщества мастеров красоты из различных стран СНГ, включая Россию, Украину, Азербайджан, Армению, Беларусь, Казахстан, Киргизию, Молдову, Таджикистан, Туркменистан, Узбекистан и Грузию. Эти награды признают самые значимые достижения в индустрии красоты и ухода за собой на просторах СНГ.</p>
        <div className='content-details-button'>
        <Link to={{
          pathname: "/certificate",
          }}>
          <button className="main-content-button">Подробнее</button>
          </Link>
        </div>
        <div className="text-center pt-100">
        <div className="page-title" ref={statuteRef}>СТАТУТ</div>
        <div className="awards-title">Почетного вручения сертификата «За заслуги в индустрии красоты»</div>
        </div>
        <p className="page-text">Отличительный сертификат «За заслуги в индустрии красоты» является высшей наградой Некоммерческой организации Международной Ассоциации Красоты и Ухода</p>
        <p className="page-subtext">Отличительным сертификатом «За заслуги в индустрии красоты» награждаются мастера за:</p>
        <ul class="custom-list">
          <li>Высокий профессионализм в сфере красоты;</li>
          <li>Активную и результативную деятельность в распространении и развитии индустрии красоты;</li>
          <li>Значительный вклад в развитие и популяризацию красоты как научной области или практического опыта в индивидуальных и коммерческих проектах;</li>
          <li>Значимый личный вклад в развитие социально-ориентированного рынка красоты.</li>
        </ul>
        <p className="page-subtext">Награждение сертификатом «За заслуги в индустрии красоты» происходит в следующих областях:</p>
        <ul class="custom-list">
          <li>Инновации в индустрии красоты</li>
          <li>Лидерство в создании образов</li>
          <li>Социальный и этический подход в красоте</li>
          <li>Международный вклад в индустрию красоты</li>
          <li>Образование и наставничество в области красоты</li>
        </ul>
        <div className='content-details-button'>
        <Link to={{
          pathname: "/statutepage",
          }}>
          <button className="main-content-button">Подробнее</button>
          </Link>
        </div>
        <div className="text-center pt-100">
        <div className="page-title" ref={certificatmRef}>Обладатели Международного Сертификата</div>
        <div className="awards-title">За заслуги в индустрии красоты</div>
        <div className="table-responsive">
        <table className={`table ${animating ? 'table-animate-exit-active' : ''}`}>
          <thead>
            <tr>
              <th>ФИО</th>
              <th>Страна</th>
              <th>Достижения</th>
            </tr>
          </thead>
          <tbody>
          {currentMembers.map((certificate_member, index) => (
                <tr key={index}>
                    <td>{certificate_member.name}</td>
                    <td>{certificate_member.country}</td>
                    <td>{certificate_member.achievements}</td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination-controls">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage <= 1}
          aria-label="Previous"
        >
          &#10094;
        </button>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage >= totalPages}
          aria-label="Next"
        >
          &#10095;
        </button>
      </div>
        </div>

    </div>
    </div>
  );
}

export default Awards;
