import React, { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';


function Documents() {

    const ustavRef = useRef(null);
    const kodexRef = useRef(null);

    const scrollToUstav = () => {
      ustavRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToKodex = () => {
      kodexRef.current.scrollIntoView({ behavior: 'smooth' });
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
        <title>Документы Ассоциации IABC</title>
        <meta
        name="description"
        content="Документы Международной Ассоциацией Красоты и Ухода (International Association of Beauty and Care) IABC"
        />
        <link rel="canonical" href="https://iabc-association.com/documents"/>
      </Helmet>
      <div class="documents_img">
        <div className="content-blur"></div>
    <div class="content-overlay">
    <h1 className="main-title">Документы Ассоциации IABC</h1>
    <h1 className="link-title" onClick={scrollToUstav}>Устав Ассоциации</h1>
    <h1 className="link-title" onClick={scrollToKodex}>Этический кодекс Ассоциации</h1>
    </div>
    </div>
    <div className="documents-wrapper">
    <div className="text-center">
        <div className="page-title" ref={ustavRef}>Устав</div>
        <div className="sub-title">МЕЖДУНАРОДНОЙ АССОЦИАЦИИ КРАСОТЫ И УХОДА "IABC"</div>
        </div>
        <p className="page-subtext">Утвержден Общим собранием членов Международной Ассоциации красоты и ухода "IABC"</p>
        <p className="page-text">Протокол № 2 от 04 июля 2019 года</p>
        <p className="page-text mb-60">г. Москва, 2019 год</p>
        <div className="sub-title">1. ОБЩИЕ ПОЛОЖЕНИЯ</div>
        <p className="page-text">1.1. <b>МЕЖДУНАРОДНАЯ АССОЦИАЦИЯ КРАСОТЫ И УХОДА "IABC"</b> (далее - "Ассоциация") является объединением юридических лиц и граждан, основанным на обязательном членстве и созданным для представления и защиты общих, в том числе профессиональных, интересов, для достижения общественно полезных целей, а также иных, не противоречащих закону и имеющих некоммерческий характер целей.</p>
        <p className="page-text">1.2. Являясь саморегулируемой организацией, Ассоциация объединяет субъектов предпринимательской деятельности исходя из единства отрасли производства товаров, работ, услуг; единства отрасли произведенных товаров, работ, услуг, а также, объединяет субъектов профессиональной деятельности определенного вида.</p>
        <p className="page-text">1.3. Ассоциация осуществляет свою деятельность в соответствии с Конституцией Российской Федерации, Гражданским кодексом Российской Федерации, Федеральным законом Российской Федерации "О некоммерческих организациях", Федеральным законом "О саморегулируемых организациях", настоящим Уставом и иным действующим законодательством РФ.</p>
        <p className="page-text">1.4. Полное наименование Ассоциации на русском языке: <b>МЕЖДУНАРОДНАЯ АССОЦИАЦИЯ КРАСОТЫ И УХОДА "IABC"</b>. Сокращенное наименование Ассоциации на русском языке: <b>СРО (саморегулируемая организация) "IABC"</b>. Полное наименование Ассоциации на английском языке: <b>INTERNATIONAL ASSOCIATION OF BEAUTY AND CARE "IABC"</b>. Сокращенное название Ассоциации на английском языке: <b>"IABC"</b>.</p>
        <p className="page-text">1.5. Место нахождения Ассоциации: Российская Федерация, город Москва.</p>
        <p className="page-text">1.6. Ассоциация создана без ограничения срока деятельности.</p>
        <div className='content-details-button'>
        <Link to={{
          pathname: "/statute",
          }}>
          <button className="main-content-button">Подробнее</button>
          </Link>
        </div>
        <div className="text-center pt-100">
        <div className="page-title" ref={kodexRef}>Этический кодекс Ассоциации</div>
        <div className="sub-title">ЭТИЧЕСКИЙ КОДЕКС ЧЛЕНА АССОЦИАЦИИ</div>
        </div>
        <p className="page-subtext">Принципы и ценности:</p>
        <ul class="custom-list">
          <li>Мы признаем и поддерживаем ценности честности, интегритета и ответственности в нашей деятельности.</li>
          <li>Мы стремимся к уважительному и поддерживающему общению, основанному на взаимном уважении и толерантности.</li>
          <li>Мы действуем в соответствии с законами, нормами и правилами, соблюдая принципы этичности и справедливости.</li>
        </ul>
        <p className="page-subtext">Профессиональное поведение:</p>
        <ul class="custom-list">
          <li>Мы соблюдаем высокие стандарты профессионального поведения и предоставляем качественные услуги и продукты.</li>
          <li>Мы относимся к своей работе с уважением и добросовестностью, демонстрируя профессиональную компетентность и эффективность.</li>
        </ul>
        <p className="page-subtext">Отношения с клиентами и партнерами:</p>
        <ul class="custom-list">
          <li>Мы ценим доверие и долгосрочные отношения с нашими клиентами и партнерами, стремясь к взаимовыгодному сотрудничеству.</li>
          <li>Мы обеспечиваем конфиденциальность и защиту информации наших клиентов, соблюдая законы о защите данных.</li>
        </ul>
        <p className="page-subtext">Профессиональная независимость:</p>
        <ul class="custom-list">
          <li>Мы поддерживаем независимость в нашей профессиональной деятельности и избегаем конфликта интересов.</li>
          <li>Мы не допускаем влияния наших личных интересов на принятие профессиональных решений.</li>
        </ul>
        <p className="page-subtext">Развитие и обучение:</p>
        <ul class="custom-list">
          <li>Мы постоянно совершенствуем свои знания и навыки, стремясь к профессиональному росту и развитию.</li>
          <li>Мы поддерживаем обучение и развитие наших коллег, способствуя созданию поддерживающей среды для обмена знаний и опыта.</li>
        </ul>
        <p className="page-subtext">Ответственность перед обществом:</p>
        <ul class="custom-list">
          <li>Мы осознаем свою социальную ответственность и активно участвуем в социально значимых инициативах и проектах.</li>
          <li>Мы призываем к устойчивому использованию ресурсов и охране окружающей среды, содействуя созданию благоприятной экологической обстановки.</li>
        </ul>
        <p className="page-subtext">Соблюдение кодекса:</p>
        <ul class="custom-list">
          <li>Мы обязуемся соблюдать и продвигать принципы и стандарты, изложенные в настоящем этическом кодексе.</li>
          <li>Мы принимаем на себя ответственность за свои действия и готовы поддерживать друг друга в соблюдении высоких этических стандартов.</li>
        </ul>

    </div>
    </div>
  );
}

export default Documents;
