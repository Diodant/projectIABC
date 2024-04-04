import React, { useRef, useEffect } from 'react';
import ArrowImg from '../img/arrow.svg'
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import order_members from './order_members';


function Awards() {

    const orderRef = useRef(null);
    const statuteRef = useRef(null);
    const korderRef = useRef(null);

    const scrollToOrder = () => {
      orderRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToStatute = () => {
      statuteRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToKorder = () => {
      korderRef.current.scrollIntoView({ behavior: 'smooth' });
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
        content="Документы Международной Ассоциацией Красоты и Ухода (International Association of Beauty and Care) IABC"
        />
        <link rel="canonical" href="/awards"/>
      </Helmet>
      <div class="awards_img">
        <div className="content-blur"></div>
    <div class="content-overlay">
    <h1 className="main-title">Награды Ассоциации IABC</h1>
    <h1 className="link-title" onClick={scrollToOrder}>Орден</h1>
    <h1 className="link-title" onClick={scrollToStatute}>Статут</h1>
    <h1 className="link-title" onClick={scrollToKorder}>Кавалеры ордена</h1>
    </div>
    </div>
    <div className="documents-wrapper">
    <div className="text-center">
        <div className="page-title" ref={orderRef}>Орден </div>
        <div className="awards-title">“Международный Орден за заслуги в индустрии красоты”</div>
        </div>
        <p className="page-text">Орден "За заслуги в индустрии красоты" вручается выдающимся мастерам красоты за личные высокие достижения, которые оказали значительное влияние на развитие и прогресс индустрии красоты как в своих странах, так и за их пределами. Личные достижения могут включать в себя:</p>
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
        <p className="page-text">Ежегодное вручение Орденов "За заслуги в индустрии красоты" становится значимым событием для профессионального сообщества мастеров красоты из различных стран СНГ, включая Россию, Украину, Азербайджан, Армению, Беларусь, Казахстан, Киргизию, Молдову, Таджикистан, Туркменистан, Узбекистан и Грузию. Эти награды признают самые значимые достижения в индустрии красоты и ухода за собой на просторах СНГ.</p>
        <div className='content-details-button'>
        <Link to={{
          pathname: "/order",
          }}>
          <button className="main-content-button">Подробнее</button>
          </Link>
        </div>
        <div className="text-center pt-100">
        <div className="page-title" ref={statuteRef}>СТАТУТ</div>
        <div className="awards-title">Отличительного орденского знака «За заслуги в индустрии красоты»</div>
        </div>
        <p className="page-text">Отличительный орденский знак «За заслуги в индустрии красоты» является высшей наградой Некоммерческой организации Международной Ассоциации Красоты и Ухода</p>
        <p className="page-subtext">Отличительным орденским знаком «За заслуги в индустрии красоты» награждаются мастера за:</p>
        <ul class="custom-list">
          <li>Высокий профессионализм в сфере красоты;</li>
          <li>Активную и результативную деятельность в распространении и развитии индустрии красоты;</li>
          <li>Значительный вклад в развитие и популяризацию красоты как научной области или практического опыта в индивидуальных и коммерческих проектах;</li>
          <li>Значимый личный вклад в развитие социально-ориентированного рынка красоты.</li>
        </ul>
        <p className="page-subtext">Награждение отличительным орденским знаком «За заслуги в индустрии красоты» происходит в следующих областях:</p>
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
        <div className="page-title" ref={korderRef}>Кавалеры ордена</div>
        <div className="awards-title">Кавалеры ордена «Международный орден за заслуги в сфере красоты»</div>
        <table className="table">
                    <thead>
                        <tr>
                            <th>ФИО</th>
                            <th>Страна</th>
                            <th>Достижения</th>
                        </tr>
                    </thead>
                    <tbody>
                        {order_members.map((order_member, index) => (
                            <tr key={index}>
                                <td>{order_member.name}</td>
                                <td>{order_member.country}</td>
                                <td>{order_member.achievements}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        </div>

    </div>
    </div>
  );
}

export default Awards;
