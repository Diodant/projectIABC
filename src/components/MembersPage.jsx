import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import BoardMembers from './BoardMembers';
import BoardMembersImage1 from '../img/BoardMembers/boardmember1.png';
import BoardMembersImage2 from '../img/BoardMembers/boardmember2.jpg';
import BoardMembersImage3 from '../img/BoardMembers/boardmember3.jpg';
import BoardMembersImage4 from '../img/BoardMembers/boardmember4.jpg';
import BoardMembersImage5 from '../img/BoardMembers/boardmember5.jpg';
import BoardMembersImage6 from '../img/BoardMembers/boardmember6.jpg';
import BoardMembersImage7 from '../img/BoardMembers/boardmember7.jpg';
import BoardMembersImage8 from '../img/BoardMembers/boardmember8.jpg';
import BoardMembersImage9 from '../img/BoardMembers/boardmember9.jpg';
import BoardMembersImage10 from '../img/BoardMembers/boardmember10.jpg';
import BoardMembersImage11 from '../img/BoardMembers/boardmember11.jpg';
import BoardMembersImage12 from '../img/BoardMembers/boardmember12.jpg';
import BoardMembersImage13 from '../img/BoardMembers/boardmember13.jpg';
import members from './members';

function MembersPage() {

  const membersPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const [animating, setAnimating] = useState(false);

  const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember = indexOfLastMember - membersPerPage;
  const currentMembers = members.slice(indexOfFirstMember, indexOfLastMember);

  const totalPages = Math.ceil(members.length / membersPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages || animating) return;
    setAnimating(true); 
    setCurrentPage(pageNumber);
    setTimeout(() => setAnimating(false), 300); 
  };

  const boardmembersRef = useRef(null);
  const membersRef = useRef(null);

  const scrollToBoardmembers = () => {
    boardmembersRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToMembers = () => {
    membersRef.current.scrollIntoView({ behavior: 'smooth' });
  };

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

    useEffect(() => {
      const replaceName = () => {
  
        const elements = document.querySelectorAll('[data-translate-custom="true"]');
        elements.forEach((el) => {
          if (document.documentElement.lang !== 'ru') {
            el.textContent = 'Leila Gajiyeva';
          }
        });
      };
  
      const observer = new MutationObserver(() => {
        replaceName();
      });
  
      observer.observe(document.body, { childList: true, subtree: true });
  
      return () => observer.disconnect();
    }, []);

  return (
    <div className="xContent">
        <Helmet>
        <title>Члены Ассоциации IABC</title>
        <meta
        name="description"
        content="Члены правления Международной Ассоциацией Красоты и Ухода (International Association of Beauty and Care) и список членов Ассоциации IABC"
        />
        <link rel="canonical" href="https://iabc-association.com/members"/>
      </Helmet>
        <div class="members_img">
        <div className="content-blur"></div>
    <div class="content-overlay">
    <h1 className="link-title" onClick={scrollToBoardmembers}>Члены правления Ассоциации</h1>

    <h1 className="link-title" onClick={scrollToMembers}>Список членов Ассоциации</h1>

    </div>
    </div>
    <div className="page-wrapper">
        <div className="text-center">
        <div className="page-title" ref={boardmembersRef}>Члены правления Ассоциации</div>
        </div>

        <BoardMembers
        imageSrc={BoardMembersImage1}
        mainText={
            <>
              Елена Шанская <br />(Россия)
            </>
          }
        secondaryText="Президент IABC"
      />
        <BoardMembers
        imageSrc={BoardMembersImage2}
        mainText={
            <>
              Инна Городнова <br />(Россия)
            </>
          }
        secondaryText="Заместитель Президента по общим вопросам"
      />
              <BoardMembers
        imageSrc={BoardMembersImage13}
        mainText={
            <>
              Елена Крыгина <br />(Россия)
            </>
          }
        secondaryText="Популярный визажист и бьюти-блогер"
      />
        <BoardMembers
        imageSrc={BoardMembersImage3}
        mainText={
            <>
              Игорь Стоянов <br />(Россия)
            </>
          }
        secondaryText="Эксперт в области парикмахерского искусства, основатель салонов красоты"
      />
              <BoardMembers
        imageSrc={BoardMembersImage4}
        mainText={
            <>
              Андрей Шилков <br />(Росиия)
            </>
          }
        secondaryText="Всемирно известный российский визажист"
      />
        <BoardMembers
        imageSrc={BoardMembersImage5}
        mainText={
            <>
              Себия Алядинова <br />(Армения)
            </>
          }
        secondaryText="Главный комиссар Фестиваля STAR WORLD"
      />
        <BoardMembers
        imageSrc={BoardMembersImage6}
        mainText={
            <>
              Наталья Бова <br />(Беларусь)
            </>
          }
        secondaryText="Основатель Учебного центра индустрии красоты Bova_School"
      />
              <BoardMembers
        imageSrc={BoardMembersImage7}
        mainText={
            <>
              Татьяна Шевчук <br />(Казахстан)
            </>
          }
        secondaryText="Судья Международной категории в Nail чемпионатах."
      />
        <BoardMembers
        imageSrc={BoardMembersImage8}
        mainText={
            <>
              Гоар Аветисян <br />(Армения)
            </>
          }
        secondaryText="Владеет одноименным салоном красоты в Москве и школой визажа"
      />
        <BoardMembers
        imageSrc={BoardMembersImage9}
        mainText={
            <>
              Анна Заболотная <br />(Россия)
            </>
          }
        secondaryText="Руководитель международной академии перманентного макияжа и эстетической дермопигментации Biotek"
      />
        <BoardMembers
        imageSrc={BoardMembersImage10}
        mainText={
            <>
              Ольга Романова <br />(Россия)
            </>
          }
        secondaryText="Один из первых визажистов в России, имеет свой фирменный бренд косметики Romanovamakeup"
      />
        <BoardMembers
        imageSrc={BoardMembersImage11}
        mainText={
            <>
              Елена Литвинова <br />(Туркменистан)
            </>
          }
        secondaryText="Основатель и руководитель обучающего центра Litvinovalab."
      />
                    <BoardMembers
        imageSrc={BoardMembersImage12}
        mainText={
            <>
              Анна Савина <br />(Россия)
            </>
          }
        secondaryText="Владелица Арт-клиники перманентного макияжа PIGMENT CLUB"
      />
        <div className="text-center">
        <div className="page-title" ref={membersRef}>Список членов Ассоциации</div>
        </div>

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
            {currentMembers.map((member, index) => (
              <tr key={index}>
                <td data-translate-custom={member.name === "Лейла Гаджиева" ? "true" : "false"}>{member.name}</td>
                <td>{member.country}</td>
                <td>{member.achievements}</td>
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
  );
}

export default MembersPage;
