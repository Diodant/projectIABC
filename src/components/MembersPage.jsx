import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import BoardMembers from './BoardMembers';
import BoardMembersImage1 from '../img/BoardMembers/boardmember1.jpg';
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
import members from './members';

function MembersPage() {

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
        <title>Члены Ассоциации IABC</title>
        <meta
        name="description"
        content="Члены правления Международной Ассоциацией Красоты и Ухода (International Association of Beauty and Care) и список членов Ассоциации IABC"
        />
        <link rel="canonical" href="/members"/>
      </Helmet>
        <div class="members_img">
        <div className="content-blur"></div>
    <div class="content-overlay">
    <h1 className="main-title">Члены правления Ассоциации</h1>
    <h1 className="main-title">Наблюдательный совет и</h1>
    <h1 className="main-title">Список членов Ассоциации</h1>

    </div>
    </div>
    <div className="page-wrapper">
        <div className="text-center">
        <div className="page-title">Члены правления Ассоциации</div>
        </div>

        <BoardMembers
        imageSrc={BoardMembersImage1}
        mainText={
            <>
              Ольга Лунина <br />(Россия)
            </>
          }
        secondaryText="Президент IABC"
      />
        <BoardMembers
        imageSrc={BoardMembersImage2}
        mainText={
            <>
              Екатерина Слепухина <br />(Россия)
            </>
          }
        secondaryText="Заместитель Президента по общим вопросам"
      />
        <BoardMembers
        imageSrc={BoardMembersImage3}
        mainText={
            <>
              Игорь Стоянов <br />(Украина)
            </>
          }
        secondaryText="Эксперт в области парикмахерского искусства, основатель салонов красоты"
      />
              <BoardMembers
        imageSrc={BoardMembersImage4}
        mainText={
            <>
              Инга Топчий <br />(Азербайджан)
            </>
          }
        secondaryText="Директор Академии красоты LOTOS"
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
              Ольга Саламатова <br />(Россия)
            </>
          }
        secondaryText="Создатель и руководитель учебного центра Нейл Бьюти."
      />
        <BoardMembers
        imageSrc={BoardMembersImage9}
        mainText={
            <>
              Светлана Андреева <br />(Молдова)
            </>
          }
        secondaryText="Основатель и руководитель проекта «Мастер с Большой Буквы» в BEAUTY сферы."
      />
        <BoardMembers
        imageSrc={BoardMembersImage10}
        mainText={
            <>
              Мария Налбантова <br />(Таджикистан)
            </>
          }
        secondaryText="Судья Международной категории в Nail чемпионатах."
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
              Дарья Дружинина <br />(Узбекистан)
            </>
          }
        secondaryText="Директор-Инструктор Академии Danila Art."
      />
        <div className="text-center">
        <div className="page-title">Список членов Ассоциации</div>
        </div>
        <table className="table">
                    <thead>
                        <tr>
                            <th>ФИО</th>
                            <th>Страна</th>
                            <th>Достижения</th>
                        </tr>
                    </thead>
                    <tbody>
                        {members.map((member, index) => (
                            <tr key={index}>
                                <td>{member.name}</td>
                                <td>{member.country}</td>
                                <td>{member.achievements}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        </div>
    </div>
  );
}

export default MembersPage;
