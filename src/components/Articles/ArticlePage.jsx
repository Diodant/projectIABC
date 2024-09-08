import React, { useEffect, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import articlesData from './articlesData';

function ArticlePage() {
  const { slug } = useParams();
  const article = articlesData.find((r) => r.slug === slug);

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

  if (!article) {
    return <div>Рецензия не найдена.</div>;
  }

  return (
    <div className="articlepage-wrapper">
        <div className="text-center">
        <div className="page-title">Статьи IABC</div>
        </div>
      <h1 className="articlepage-title">{article.title}</h1>
      <div className='articlepage-summary'><b>{article.summary}</b></div>
      {article.slug === 'article12' ? (
        <div className="articlepage-content">
          <p className='articlepage-text fs-35 mb-30'>{article.content1}</p>
          <img src={article.imageUrl2} alt={article.title} className="article-sub-image" />
          <p className='fs-25'>{article.content2}</p>
          <p className='fs-25'>{article.content3}</p>
          <p className='fs-25'>{article.content4}</p>
          <p class="page-subtext">{article.content5}</p>
          <ul className='custom-list'>
          <li>{article.textli1}</li>
          <li>{article.textli2}</li>
          <li>{article.textli3}</li>
          <li>{article.textli4}</li>
          <li>{article.textli5}</li>
          </ul>
          <p className='fs-25'>{article.content6}</p>
          <p className='fs-25'>{article.content7}</p>
          <p className='fs-25'>{article.content8}</p>
          <p className='fs-25'>{article.content9}</p>
          <p className='fs-25'>{article.content10}</p>
          <p className='fs-25'>{article.content11}</p>
          <p className='fs-25'>{article.content12}</p>
          <p class="page-subtext">{article.content13}</p>
          <ul className='custom-list'>
          <li>{article.textli6}</li>
          <li>{article.textli7}</li>
          </ul>
          <p class="page-subtext">{article.content14}</p>
          <ul className='custom-list'>
          <li>{article.textli8}</li>
          <li>{article.textli9}</li>
          <li>{article.textli10}</li>
          <li>{article.textli11}</li>
          </ul>
          <p className='fs-25'>{article.content15}</p>
          <p className='fs-25'>{article.content16}</p>
          <p className='fs-25'>{article.content17}</p>
          <p className='fs-25'>{article.content18}</p>
          <p className='fs-25'>{article.content19}</p>
          </div>
          ) : article.slug === 'article14' ? (
            <div className="articlepage-content">
              <p className='articlepage-text fs-35 mb-30'>{article.content1}</p>
            <img src={article.imageUrl} alt={article.title} className="article-sub-image" />
            <p className='fs-25'>{article.content2}</p>
            <p className='fs-25'>{article.content3}</p>
            <p className='fs-25'>{article.content4}</p>
            <p className='page-subtext'>{article.content5}</p>
            <p className='page-subtext'>{article.content6}</p>
            <p className='fs-25'>{article.content7}</p>
            <p className='page-subtext'>{article.content8}</p>
            <p className='fs-25'>{article.content9}</p>
            <p className='page-subtext'>{article.content10}</p>
            <p className='fs-25'>{article.content11}</p>
            <p className='page-subtext'>{article.content12}</p>
            <p className='fs-25'>{article.content13}</p>
            <p className='page-subtext'>{article.content14}</p>
            <p className='fs-25'>{article.content15}</p>
            <p className='page-subtext'>{article.content16}</p>
            <p className='fs-25'>{article.content17}</p>
            <p className='page-subtext'>{article.content18}</p>
            <p className='fs-25'>{article.content19}</p>
            <p className='fs-25'>{article.content20}</p>
            <p className='fs-25'>{article.content21}</p>
            <p className='fs-25'>{article.content22}</p>
            <p className='fs-25'>{article.content23}</p>
            <p className='fs-25'>{article.content24}</p>
            <p className='fs-25'>{article.content25}</p>
            <p className='fs-25'>{article.content26}</p>
            </div>
            ) : article.slug === 'article15' ? (
              <div className="articlepage-content">
                <p className='articlepage-text fs-35 mb-30'>{article.content1}</p>
                <p className='fs-25'>{article.content2}</p>
                <img src={article.imageUrl2} alt={article.title} className="article-sub-image" />
                <ul className='custom-list'>
                <li>{article.textli1}</li>
                <li>{article.textli2}</li>
                <li>{article.textli3}</li>
                <li>{article.textli4}</li>
                <li>{article.textli5}</li>
                <li>{article.textli6}</li>
                <li>{article.textli7}</li>
                </ul>
                <p className='fs-25'>{article.content3}</p>
                <p className='page-subtext'>{article.content4}</p>
                <p className='fs-25'>{article.content5}</p>
                <p className='fs-25'>{article.content6}</p>
                <p className='fs-25'>{article.content7}</p>
                <img src={article.imageUrl3} alt={article.title} className="article-sub-image" />
                <p className='page-subtext'>{article.content8}</p>
                <p className='fs-25'>{article.content9}</p>
                <p className='fs-25'>{article.content10}</p>
                <p className='fs-25'>{article.content11}</p>
                <p className='page-subtext'>{article.content12}</p>
                <p className='fs-25'>{article.content13}</p>
                <p className='fs-25'>{article.content14}</p>
                <p className='fs-25'>{article.content15}</p>
                <img src={article.imageUrl} alt={article.title} className="article-sub-image" />
                <p className='page-subtext'>{article.content16}</p>
                <p className='fs-25'>{article.content17}</p>
                <p className='fs-25'>{article.content18}</p>
                <p className='fs-25'>{article.content19}</p>
                <p className='page-subtext'>{article.content20}</p>
                <p className='fs-25'>{article.content21}</p>
                <p className='fs-25'>{article.content22}</p>
                <p className='fs-25'>{article.content23}</p>
                <p className='page-subtext'>{article.content24}</p>
                <p className='fs-25'>{article.content25}</p>
                <p className='fs-25'>{article.content26}</p>
                <p className='fs-25'>{article.content27}</p>
                <p className='page-subtext'>{article.content28}</p>
                <p className='fs-25'>{article.content29}</p>
                <p className='fs-25'>{article.content30}</p>
                <p className='fs-25'>{article.content31}</p>
                <p className='fs-25'>{article.content32}</p>
                <p className='fs-25'>{article.content33}</p>
                <p className='fs-25'>{article.content34}</p>
                <p className='fs-25'>{article.content35}</p>
                <p className='fs-25'>{article.content36}</p>
                <p className='fs-25'>{article.content37}</p>
                <p className='fs-25'>{article.content38}</p>
                <p className='fs-25'>{article.content39}</p>
                <p className='fs-25'>{article.content40}</p>
                <p className='fs-25'>{article.content41}</p>
                </div>
             ) : article.slug === 'article16' ? (
               <div className="articlepage-content">
                 <p className='articlepage-text fs-35 mb-30'>{article.content1}</p>
                 <p className='fs-25'>{article.content2}</p>
                 <p className='fs-25'>{article.content3}</p>
                 <p className='fs-25'>{article.content4}</p>
                 <p className='fs-25'>{article.content5}</p>
                 <p className='fs-25'>{article.content6}</p>
                 <p className='fs-25'>{article.content7}</p>
                 <p className='fs-25'>{article.content8}</p>
                 <p className='fs-25'>{article.content9}</p>
                 <p className='fs-25'>{article.content10}</p>
                 <p className='fs-25'>{article.content11}</p>
                 <p className='page-subtext'>{article.content12}</p>
                 <ul className='custom-list'>
                  <li>{article.textli1}</li>
                  <li>{article.textli2}</li>
                 </ul>
                 <p className='page-subtext'>{article.content13}</p>
                 <ul className='custom-list'>
                  <li>{article.textli3}</li>
                  <li>{article.textli4}</li>
                 </ul>
                 <p className='page-subtext'>{article.content14}</p>
                 <ul className='custom-list'>
                  <li>{article.textli5}</li>
                  <li>{article.textli6}</li>
                 </ul>
                 <p className='page-subtext'>{article.content15}</p>
                 <ul className='custom-list'>
                  <li>{article.textli7}</li>
                  <li>{article.textli8}</li>
                 </ul>
                 <p className='page-subtext'>{article.content16}</p>
                 <ul className='custom-list'>
                  <li>{article.textli9}</li>
                  <li>{article.textli10}</li>
                 </ul>
                 <p className='page-subtext'>{article.content17}</p>
                 <ul className='custom-list'>
                  <li>{article.textli11}</li>
                  <li>{article.textli12}</li>
                 </ul>
                 <p className='page-subtext'>{article.content18}</p>
                 <ul className='custom-list'>
                  <li>{article.textli13}</li>
                  <li>{article.textli14}</li>
                 </ul>
                 <p className='fs-25'>{article.content19}</p>
                 <p className='fs-25'>{article.content20}</p>

                 </div>
                ) : article.slug === 'article17' ? (
                  <div className="articlepage-content">
                    <p className='articlepage-text fs-35 mb-30'>{article.content1}</p>

                    <p className='fs-25'><b>{article.content2}</b>{article.content3}</p>
                    <p className='fs-25'><b>{article.content4}</b>{article.content5}</p>
                    <p className='fs-25'><b>{article.content6}</b>{article.content7}</p>
                    <p className='page-subtext'>{article.content8}</p>
                    <ul className='custom-list'>
                    <li>{article.textli1}</li>
                    <li>{article.textli2}</li>
                    <li>{article.textli3}</li>
                    <li>{article.textli4}</li>
                    <li>{article.textli5}</li>
                    <li>{article.textli6}</li>
                    <li>{article.textli7}</li>
                    </ul>
                    <p className='fs-25'><b>{article.content9}</b>{article.content10}</p>
                    <p className='fs-25'>{article.content11}</p>
                    <p className='fs-25'>{article.content12}</p>
                    <p className='fs-25'>{article.content13}</p>
                    <p className='fs-25'>{article.content14}</p>
                    <p className='fs-25'>{article.content15}</p>
                    <p className='fs-25'>{article.content16}</p>
                    <p className='fs-25'>{article.content17}</p>
                    <p className='fs-25'>{article.content18}</p>
                    <p className='fs-25'>{article.content19}</p>
                    <p className='fs-25'>{article.content20}</p>
                    <p className='page-subtext'>{article.content21}</p>
                    <ul className='custom-list'>
                    <li>{article.textli8}</li>
                    <li>{article.textli9}</li>
                    <li>{article.textli10}</li>
                    </ul>
                    <p className='page-subtext'>{article.content22}</p>
                    <ul className='custom-list'>
                    <li>{article.textli11}</li>
                    <li>{article.textli12}</li>
                    <li>{article.textli13}</li>
                    <li>{article.textli14}</li>
                    </ul>
                    <p className='fs-25'><b>{article.content23}</b>{article.content24}</p>
                    <p className='fs-25'><b>{article.content25}</b>{article.content26}</p>
                    <p className='fs-25'>{article.content27}</p>
                    <p className='fs-25'><b>{article.content28}</b></p>
                    </div>
                ) : article.slug === 'article18' ? (
                  <div className="articlepage-content">
                    <img src={article.imageUrl2} alt={article.title} className="article-sub-image" />
                    <p className='articlepage-text fs-35 mb-30'>{article.content1}</p>
                    <img src={article.imageUrl3} alt={article.title} className="article-sub-image" />
                    <p className='fs-25'><b>{article.content2}</b></p>
                    <p className='fs-25'>{article.content3}</p>
                    <p className='fs-25'><b>{article.content4}</b></p>
                    <p className='fs-25'>{article.content5}</p>
                    <ul className='custom-list'>
                    <li>{article.textli1}</li>
                    <li>{article.textli2}</li>
                    <li>{article.textli3}</li>
                    <li>{article.textli4}</li>
                    <li>{article.textli5}</li>
                    </ul>
                    <p className='fs-25'>{article.content6}</p>
                    <p className='fs-25'><b>{article.content7}</b></p>
                    <p className='fs-25'>{article.content8}</p>
                    <ul className='custom-list'>
                    <li>{article.textli6}</li>
                    <li>{article.textli7}</li>
                    <li>{article.textli8}</li>
                    <li>{article.textli9}</li>
                    <li>{article.textli10}</li>
                    </ul>
                    <p className='fs-25'><b>{article.content9}</b></p>
                    <p className='fs-25'>{article.content10}</p>
                    </div>
                    ) : article.slug === 'article19' ? (
                      <div className="articlepage-content">
                      <p className='articlepage-text fs-35 mb-30'>{article.content1}</p>
                      <p className='page-subtext'>{article.content2}</p>
                      <p className='fs-25'>{article.content3}</p>
                      <img src={article.imageUrl2} alt={article.title} className="article-sub-image" />
                      <p className='fs-25'>{article.content4}</p>
                      <p className='fs-25'>{article.content5}</p>
                      <ul className='custom-list'>
                        <li>{article.textli1}</li>
                        <li>{article.textli2}</li>
                        <li>{article.textli3}</li>
                        <li>{article.textli4}</li>
                        <li>{article.textli5}</li>
                      </ul>
                      <p className='fs-25'>{article.content6}</p>
                      <img src={article.imageUrl3} alt={article.title} className="article-sub-image" />
                      <p className='fs-25'>{article.content7}</p>
                      <p className='fs-25'>{article.content8}</p>
                      <ul className='custom-list'>
                        <li>{article.textli6}</li>
                        <li>{article.textli7}</li>
                        <li>{article.textli8}</li>
                        <li>{article.textli9}</li>
                        <li>{article.textli10}</li>
                      </ul>
                      <p className='fs-25'>{article.content9}</p>
                      <img src={article.imageUrl4} alt={article.title} className="article-sub-image" />
                      <p className='fs-25'>{article.content10}</p>
                      <p className='fs-25'>{article.content11}</p>
                      <ul className='custom-list'>
                        <li>{article.textli11}</li>
                        <li>{article.textli12}</li>
                        <li>{article.textli13}</li>
                        <li>{article.textli14}</li>
                        <li>{article.textli15}</li>
                      </ul>
                      <p className='fs-25'>{article.content12}</p>
                      <img src={article.imageUrl5} alt={article.title} className="article-sub-image" />
                      <p className='fs-25'>{article.content13}</p>
                      <p className='fs-25'>{article.content14}</p>
                      <ul className='custom-list'>
                        <li>{article.textli16}</li>
                        <li>{article.textli17}</li>
                        <li>{article.textli18}</li>
                        <li>{article.textli19}</li>
                        <li>{article.textli20}</li>
                      </ul>
                      <p className='fs-25'>{article.content15}</p>
                      <img src={article.imageUrl6} alt={article.title} className="article-sub-image" />
                      <p className='fs-25'>{article.content16}</p>
                      <p className='fs-25'>{article.content17}</p>
                      <ul className='custom-list'>
                        <li>{article.textli21}</li>
                        <li>{article.textli22}</li>
                        <li>{article.textli23}</li>
                        <li>{article.textli24}</li>
                        <li>{article.textli25}</li>
                      </ul>
                      <p className='fs-25'>{article.content18}</p>
                      <p className='fs-25'>{article.content19}</p>
                      <p className='fs-25'>{article.content20}</p>
                    </div>
            ) : article.slug === 'article13' ? (
              <div className="articlepage-content">
            <p className='articlepage-text fs-35 mb-30'>{article.content1}</p>
            <img src={article.imageUrl2} alt={article.title} className="article-sub-image" />
          <p className='fs-25'>{article.content2}</p>
          <p className='fs-25'>{article.content3}</p>
          <p className='page-subtext'>{article.content4}</p>
          <p className='fs-25'>{article.content5}</p>
          <ul className='custom-list'>
          <li>{article.textli1}</li>
          <li>{article.textli2}</li>
          </ul>
          <p className='page-subtext'>{article.content6}</p>
          <p className='fs-25'>{article.content7}</p>
          <ul className='custom-list'>
          <li>{article.textli3}</li>
          <li>{article.textli4}</li>
          </ul>
          <p className='page-subtext'>{article.content8}</p>
          <p className='fs-25'>{article.content9}</p>
          <ul className='custom-list'>
          <li>{article.textli5}</li>
          <li>{article.textli6}</li>
          </ul>
          <p className='page-subtext'>{article.content10}</p>
          <p className='fs-25'>{article.content11}</p>
          <ul className='custom-list'>
          <li>{article.textli7}</li>
          <li>{article.textli8}</li>
          </ul>
          <p className='page-subtext'>{article.content12}</p>
          <p className='fs-25'>{article.content13}</p>
          <ul className='custom-list'>
          <li>{article.textli9}</li>
          <li>{article.textli10}</li>
          </ul>
          <p className='fs-25'>{article.content14}</p>
          <img src={article.imageUrl3} alt={article.title} className="article-sub-image" />
          <p className='page-subtext'>{article.content15}</p>
          <ul className='custom-list'>
          <li>{article.textli11}</li>
          <li>{article.textli12}</li>
          <li>{article.textli13}</li>
          <li>{article.textli14}</li>
          </ul>
          <p className='page-subtext'>{article.content16}</p>
          <ul className='custom-list'>
          <li>{article.textli15}</li>
          <li>{article.textli16}</li>
          <li>{article.textli17}</li>
          </ul>
          <p className='page-subtext'>{article.content17}</p>
          <ul className='custom-list'>
          <li>{article.textli18}</li>
          </ul>
          <p className='fs-25'>{article.content18}</p>
          <p className='fs-25'>{article.content19}</p>
          <p className='fs-25'>{article.content21}</p>
          <p className='fs-25'>{article.content22}</p>
          <ul className='custom-list'>
          <li>{article.textli19}</li>
          </ul>
          <p className='page-subtext'>{article.content23}</p>
          <ul className='custom-list'>
          <li>{article.textli20}</li>
          <li>{article.textli21}</li>
          </ul>
          <p className='fs-25'>{article.content24}</p>
          <p className='fs-25'>{article.content25}</p>
          <p className='fs-25'>{article.content26}</p>
              </div>
            ) : (

      <div className="articlepage-content">
      <p className='articlepage-text fs-35 mb-30'>{article.content1}</p>
      <p className='fs-25'>{article.content2}</p>
      <p className='fs-25'>{article.content3}</p>
      <p className='fs-25'>{article.content4}</p>
      <p className='fs-25'>{article.content5}</p>
      <p className='fs-25'>{article.content6}</p>
      <p className='fs-25'>{article.content7}</p>
      <p className='fs-25'>{article.content8}</p>
      <p className='fs-25'>{article.content9}</p>
      <p className='fs-25'>{article.content10}</p>
      <p className='fs-25'>{article.content11}</p>
      <p className='fs-25'>{article.content12}</p>
      <p className='fs-25'>{article.content13}</p>
      <p className='fs-25'>{article.content14}</p>
      <p className='fs-25'>{article.content15}</p>
      <p className='fs-25'>{article.content16}</p>
      <p className='fs-25'>{article.content17}</p>
      <p className='fs-25'>{article.content18}</p>
      <p className='fs-25'>{article.content19}</p>
      <p className='fs-25'>{article.content20}</p>
      <p className='fs-25'>{article.content21}</p>
      <p className='fs-25'>{article.content22}</p>
      <p className='fs-25'>{article.content23}</p>
      <p className='fs-25'>{article.content24}</p>
      <p className='fs-25'>{article.content25}</p>
      <p className='fs-25'>{article.content26}</p>
      <p className='fs-25'>{article.content27}</p>
      <p className='fs-25'>{article.content28}</p>

      </div>
      )}
    </div>
  );
}

export default ArticlePage;
