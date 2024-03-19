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
    <div className="xContent p-box py-6">
      <h1 className="title is-font-title-regular has-text-centered has-text-var-blue">{article.title}</h1>
      <div className="content wysiwyg">
      <p className='has-text-centered p-style p-1'>{article.subtitle}</p>
      <p>{article.content1}</p>
      <p>{article.content2}</p>
      <p>{article.content3}</p>
      <p>{article.content4}</p>
      <p>{article.content5}</p>
      <p>{article.content6}</p>
      <p>{article.content7}</p>
      <p>{article.content8}</p>
      <p>{article.content9}</p>
      <p>{article.content10}</p>
      <p>{article.content11}</p>
      <p>{article.content12}</p>
      <p>{article.content13}</p>
      </div>
    </div>
  );
}

export default ArticlePage;
