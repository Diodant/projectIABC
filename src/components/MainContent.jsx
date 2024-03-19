import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { Link } from 'react-router-dom';
import ColumnImg from '../img/columnimg.jpg'
import ArrowImg from '../img/arrow.svg'
import CommitteeIcon from '../img/committeesvg.svg';
import MembersIcon from '../img/members-svg.svg';
import RepresentationIcon from '../img/mapsvg.svg';
import EventsIcon from '../img/events-svg.svg';

const MainContent = () => {

    const countUpWithVisibility = (endValue) => (
        <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
          {({ isVisible }) => (
            isVisible ? <CountUp start={0} end={endValue} duration={1.5} /> : <span>0</span>
          )}
        </VisibilitySensor>
      );

    return (
        <div>
      <div className="main-content">
        <div className="content-blur"></div>
        <div className="content-overlay">
          <h1 className="main-title">МЕЖДУНАРОДНАЯ АССОЦИАЦИЯ</h1>
          <h1 className="main-title">профессионалов индустрии Красоты и Ухода</h1>
          <h2 className="main-subtitle">IABC</h2>
          <button className="join-button">ВСТУПИТЬ</button>
        </div>
      </div>
      <div className="main-content-wrapper">
      <div className="content-image-wrapper">
        <img src={ColumnImg} alt="Professional Beauty Industry" className="content-image" />
      </div>
      <div className="content-details-wrapper">
        <h1 className="content-details-title">Цели IABC</h1>
        <ul className="content-details-list">
          <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>Содействие развитию и совершенствованию индустрии красоты и ухода.</li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>Поддержка и стимулирование профессионального роста и развития членов ассоциации.</li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>Содействие повышению качества услуг и продуктов в сфере красоты и ухода.</li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>Продвижение этичных и профессиональных стандартов поведения в индустрии красоты и ухода.</li>
            <li>  <span class="arrow-icon-wrapper">
          <img src={ArrowImg} className="my-icon-style" alt="ArrowImg" />
            </span>Проведение и поддержка благотворительных и общественных инициатив в сфере красоты и ухода.</li>
        </ul>
        <div className='content-details-button'>
        <Link to={{
          pathname: "/about-us",
          state: { scrollTo: "our-goals" }
          }}>
          <button className="main-content-button">Наши цели</button>
          </Link>
        </div>
      </div>
    </div>
    <div className="stats-container">
      <div className="stat-item">
      <div className="stat-icon-wrapper">
      <img src={CommitteeIcon} className="stat-icon" alt="CommitteeIcon" />
      </div>
      <div className="stat-info">
      <div className="stat-number">{countUpWithVisibility(42)}</div>
        <div className="stat-label">Комитета</div>
      </div>
      </div>
      <div className="stat-item">
      <div className="stat-icon-wrapper">
      <img  src={MembersIcon} className="stat-icon" alt="MembersIcon" />
      </div>
      <div className="stat-info">
      <div className="stat-number">{countUpWithVisibility(2000)}+</div>
        <div className="stat-label">Участников</div>
      </div>
      </div>
      <div className="stat-item">
      <div className="stat-icon-wrapper">
      <img src={RepresentationIcon} className="stat-icon" alt="RepresentationIcon" />
      </div>
      <div className="stat-info">
      <div className="stat-number">{countUpWithVisibility(10)}</div>
        <div className="stat-label">Представительств</div>
      </div>
      </div>
      <div className="stat-item">
      <div className="stat-icon-wrapper">
      <img src={EventsIcon} className="stat-icon" alt="EventsIcon" />
      </div>
      <div className="stat-info">
      <div className="stat-number">{countUpWithVisibility(900)}+</div>
        <div className="stat-label">Мероприятий в год</div>
      </div>
      </div>
    </div>
      </div>

    );
  };

  export default MainContent;
