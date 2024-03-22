import React from 'react';
import { useParams } from 'react-router-dom';
import articlesData from './articlesData';

function ArticlePage() {
  const { slug } = useParams();
  const article = articlesData.find((r) => r.slug === slug);

  if (!article) {
    return <div>Рецензия не найдена.</div>;
  }

  return (
    <div className="articlepage-wrapper">
        <div className="text-center">
        <div className="page-title">Статьи IABC</div>
        </div>
      <h1 className="articlepage-title">{article.title}</h1>
      <div className="articlepage-content">
      <div className='articlepage-summary'><b>{article.summary}</b></div>
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
    </div>
  );
}

export default ArticlePage;
