import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import BoardMembers from './BoardMembers';
import BoardMembersImage1 from '../img/BoardMembers/boardmember1.jpg';
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

    const location = useLocation();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        scrollToTop();
    }, [location.pathname]);

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
              Ирина Кравчук <br />(Россия)
            </>
          }
        secondaryText="Известная визажистка, владелица школы макияжа"
      />
        <BoardMembers
        imageSrc={BoardMembersImage1}
        mainText={
            <>
              Дмитрий Стрельников <br />(Россия)
            </>
          }
        secondaryText="Эксперт в области парикмахерского искусства, основатель салонов красоты"
      />
        <BoardMembers
        imageSrc={BoardMembersImage1}
        mainText={
            <>
              Екатерина Павлова <br />(Украина)
            </>
          }
        secondaryText="Известный мастер маникюра и педикюра, победитель международных конкурсов"
      />
              <BoardMembers
        imageSrc={BoardMembersImage1}
        mainText={
            <>
              Лейла Саидова <br />(Азербайджан)
            </>
          }
        secondaryText="Косметолог, основатель сети салонов красоты"
      />
        <BoardMembers
        imageSrc={BoardMembersImage1}
        mainText={
            <>
              Армине Аветисян <br />(Армения)
            </>
          }
        secondaryText="Владелица успешного центра эстетической медицины"
      />
        <BoardMembers
        imageSrc={BoardMembersImage1}
        mainText={
            <>
              Наталья Гордеева <br />(Беларусь)
            </>
          }
        secondaryText="Визажистка, известная своими уникальными стилями макияжа для фотосессий и показов моды"
      />
              <BoardMembers
        imageSrc={BoardMembersImage1}
        mainText={
            <>
              Айгуль Исмагилова <br />(Казахстан)
            </>
          }
        secondaryText="Эксперт по перманентному макияжу, основательница академии красоты"
      />
        <BoardMembers
        imageSrc={BoardMembersImage1}
        mainText={
            <>
              Алена Толоконникова <br />(Киргизия)
            </>
          }
        secondaryText="Мастер по наращиванию ресниц и бровей, популяризатор техник объемного макияжа"
      />
        <BoardMembers
        imageSrc={BoardMembersImage1}
        mainText={
            <>
              Светлана Георгиева <br />(Молдова)
            </>
          }
        secondaryText="Известный косметолог, владелица салона красоты и SPA-центра"
      />
        <BoardMembers
        imageSrc={BoardMembersImage1}
        mainText={
            <>
              Муабир Шодмонов <br />(Таджикистан)
            </>
          }
        secondaryText="Специалист по мужским стрижкам и уходу за волосами, основатель студии мужской красоты"
      />
        <BoardMembers
        imageSrc={BoardMembersImage1}
        mainText={
            <>
              Гулбахор Халилова <br />(Туркменистан)
            </>
          }
        secondaryText="Эксперт по уходу за кожей, владелица косметического бутика"
      />
                    <BoardMembers
        imageSrc={BoardMembersImage1}
        mainText={
            <>
              Гульнара Исаева <br />(Узбекистан)
            </>
          }
        secondaryText="Успешный предприниматель в области красоты, владелица сети салонов красоты и фитнес-центров"
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
