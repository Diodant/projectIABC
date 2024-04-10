import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import articlesData from './articlesData';
import { Link } from 'react-router-dom';


function Articles() {

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
        <title>СТАТЬИ</title>
        <meta
        name="description"
        content="Статьи Международной Ассоциации Красоты и Ухода (International Association of Beauty and Care) IABC"
        />
        <link rel="canonical" href="https://iabc-association.com/articles"/>
      </Helmet>
        <div class="articles_img">
        <div className="content-blur"></div>
    <div class="content-overlay">
    <h1 className="main-title">СТАТЬИ АССОЦИАЦИИ</h1>
    <h1 className="main-title">IABC</h1>

    </div>
    </div>
    <div className="articles-wrapper">
      <div className="articles-list">
                {articlesData.map((article) => (
                    <div key={article.slug} className="article-preview">
                        <img src={article.imageUrl} alt={article.title} className="article-image" />
                        <div className="article-info">
                            <h2 className="article-title">{article.title}</h2>
                            <p className="article-summary">{article.summary}</p>
                            <Link to={`/articles/${article.slug}`} className="article-more">Подробнее →</Link>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    </div>
  );
}

export default Articles;
