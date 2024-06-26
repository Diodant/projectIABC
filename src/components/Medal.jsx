import React, { useRef, useEffect } from 'react';
import ArrowImg from '../img/arrow.svg'
import { Helmet } from 'react-helmet-async';
import MedalImg from '../img/medal.png'


function Medal() {


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
        <title>Медаль Ассоциации IABC</title>
        <meta
        name="description"
        content='Медаль "За заслуги в индустрии красоты" вручается выдающимся мастерам красоты за личные высокие достижения, которые оказали значительное влияние на развитие и прогресс индустрии красоты в своих странах'
        />
        <link rel="canonical" href="https://iabc-association.com/medal"/>
      </Helmet>
    <div className="documents-wrapper mt">
    <div className="text-center">
        <div className="page-title">Медаль</div>
        <div className="awards-title">Медаль "За заслуги в индустрии красоты"</div>
        </div>
        <div className='medal-img'><img src={MedalImg} alt="Medal" /></div>
        <p className="page-text">Медаль "За заслуги в индустрии красоты" вручается выдающимся мастерам красоты за личные высокие достижения, которые оказали значительное влияние на развитие и прогресс индустрии красоты как в своих странах, так и за их пределами. Личные достижения могут включать в себя:</p>
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
        <p className="page-text">Ежегодное вручение Медали "За заслуги в индустрии красоты" становится значимым событием для профессионального сообщества мастеров красоты из различных стран СНГ, включая Россию, Украину, Азербайджан, Армению, Беларусь, Казахстан, Киргизию, Молдову, Таджикистан, Туркменистан, Узбекистан и Грузию. Эти награды признают самые значимые достижения в индустрии красоты и ухода за собой на просторах СНГ.</p>
        <p className="page-text">Вручение медалей происходит ежегодно и награждаются только пять самых выдающихся мастеров красоты в год. Это подчеркивает, что только наиболее выдающиеся вклады и достижения будут отмечены, и каждый лауреат может быть уверен, что его или ее работа действительно имеет особое значение.</p>
        <p className="page-text">Кандидаты на получение медали проходят тщательный отбор на основе их профессиональных достижений, включая инновационные подходы, успешное внедрение новых техник, практические результаты, влияние на отрасль и уровень профессионализма.</p>
        <p className="page-text">Церемония вручения медалей является важным событием, собирающим ведущих мастеров красоты из всех уголков СНГ, способствуя обмену опытом и знаниями между различными странами и культурами.</p>
        <p className="page-text">Медаль "За заслуги в индустрии красоты" выделяет не только личные достижения, но и вклад лауреатов в развитие и процветание индустрии красоты на международном уровне, что имеет далеко идущие положительные последствия для экономики и культуры в целом.</p>
    </div>
    </div>
  );
}

export default Medal;
