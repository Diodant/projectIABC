import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ArrowImg from '../img/arrow.svg'

function AboutUs() {

    const { state } = useLocation();

    useEffect(() => {
      if (state?.scrollTo) {
        const element = document.getElementById(state.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [state]);

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
    <div className="xContent">
        <Helmet>
        <title>О IABC</title>
        <meta
        name="description"
        content="Международная Ассоциация Красоты и Ухода (International Association of Beauty and Care) является престижным объединением ведущих специалистов в области красоты IABC"
        />
        <link rel="canonical" href="https://iabc-association.com/about-us"/>
      </Helmet>
        <div class="about-us_img">
        <div className="content-blur"></div>
    <div class="content-overlay">
    <h1 className="main-title">О IABC</h1>
    <h1 className="main-title">Международной Ассоциации</h1>
    <h1 className="main-title">профессионалов индустрии Красоты и Ухода</h1>

    </div>
    </div>
    <div className="page-wrapper">
        <div className="text-center">
        <div className="page-title">О нас</div>
        </div>
        <p className="page-text">Международная Ассоциация Красоты и Ухода (International Association of Beauty and Care) является престижным объединением ведущих специалистов в области красоты и ухода за собой из различных стран мира (Россия, Украина, Беларусь, Казахстан, Узбекистан, Таджикистан, Грузия, Армения). Наша Ассоциация объединяет профессионалов, стремящихся к совершенству и инновациям в индустрии красоты с 2019 года.</p>
        <p className="page-text">Членство в Ассоциации доступно только для тех, кто достиг выдающихся результатов и успехов в своей профессиональной деятельности. Мы стремимся поддерживать высокие стандарты и критерии для вступления в нашу ассоциацию.</p>
        <p className="page-text pb-20">Кандидаты на членство должны соответствовать ряду строгих критериев:</p>
        <ul class="custom-list">
          <li>Достижение высокого уровня в области красоты и ухода, подтвержденное национальными и международными наградами.</li>
          <li>Обладание значительным (не менее 3х лет) опытом работы в индустрии, включая руководящие позиции и управленческие навыки.</li>
          <li>Активное участие в развитии профессионального сообщества, включая обучающие мастер-классы и семинары.</li>
          <li>Наличие публикаций в рейтинговых изданиях.</li>
        </ul>
        <p className="page-text">Международная Ассоциация Красоты и Ухода не только служит площадкой для обмена знаниями и опытом между лидерами отрасли, но и играет важную роль в формировании стандартов и лучших практик в индустрии красоты на мировом уровне. Мы также активно поддерживаем развитие профессионального сообщества, организуя образовательные проекты, мероприятия, содействуя международному сотрудничеству в области красоты и ухода за собой.</p>
        <p className="page-text">Членами Международной Ассоциации Красоты и Ухода (International Association of Beauty and Care) могут стать исключительно высококвалифицированные специалисты, работающие в таких сферах индустрии красоты как:</p>
        <ul class="custom-list">
          <li>Парикмахеры и стилисты, проявившие выдающиеся навыки в создании причесок и стилей.</li>
          <li>Визажисты и мейк-ап артисты, обладающие профессиональными навыками в создании макияжа для различных мероприятий и событий.</li>
          <li>Мастера маникюра и педикюра, демонстрирующие высокий уровень мастерства в уходе за ногтями и кожей рук и ног.</li>
          <li>Косметологи и эстетисты, специализирующиеся на процедурах по уходу за кожей лица и тела.</li>
          <li>Специалисты по наращиванию ресниц и бровей, проявившие себя в создании естественного и эффектного внешнего вида.</li>
          <li>Мастера перманентного макияжа, обладающие умением создавать долговременный макияж для подчеркивания естественной красоты лица.</li>
          <li>Массажисты и терапевты, предоставляющие профессиональные услуги по массажу и релаксации.</li>
          <li>Владельцы салонов красоты и спа-центров, обеспечивающие высокий уровень обслуживания и услуг для своих клиентов.</li>
          <li>Тату мастера</li>
        </ul>
        <p className="page-text">Участие в Ассоциации предполагает соответствие определенным стандартам качества и профессионализма, а также стремление к развитию и совершенствованию в своей области деятельности.</p>
        <div className="text-center">
        <div id="our-goals" className="page-title">Наши Цели</div>
        </div>
        <ul className="content-details-list page-text">
          <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>Содействие развитию и совершенствованию индустрии красоты и ухода путем создания единой платформы для профессионалов и специалистов данной области.</li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>Поддержка и стимулирование профессионального роста и развития членов ассоциации путем предоставления доступа к образовательным программам, мастер-классам, семинарам и другим образовательным мероприятиям.</li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>Содействие повышению качества услуг и продуктов в сфере красоты и ухода через разработку стандартов качества, регулярное обучение и аттестацию специалистов.</li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>Продвижение этичных и профессиональных стандартов поведения в индустрии красоты и ухода, а также борьба с недобросовестной конкуренцией и противозаконными практиками.</li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>Повышение общественной осведомленности о важности ухода и поддержание здорового образа жизни, путем проведения образовательных кампаний, мероприятий и инициатив.</li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>Установление и поддержание международных партнерских отношений с аналогичными организациями и ассоциациями с целью обмена опытом, передачи знаний и совместных проектов в области красоты и ухода.</li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>Поддержка и защита интересов своих членов, а также представление их точек зрения и позиций перед органами власти и общественностью.</li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>Формирование и развитие сообщества профессионалов, специалистов и любителей индустрии красоты и ухода для обмена опытом, идеями и лучшими практиками.</li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>Проведение и поддержка благотворительных и общественных инициатив в сфере красоты и ухода, направленных на помощь нуждающимся и улучшение их качества жизни.</li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>Содействие формированию благоприятного и инновационного бизнес-окружения в индустрии красоты и ухода, способствующего развитию экономики и социальной сферы.</li>
        </ul>


        </div>
    </div>
  );
}

export default AboutUs;
