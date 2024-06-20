// src/pages/ArticleDetailPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ArticleDetailPage = () => {
  const { articleId } = useParams();
  const article = useSelector((state) =>
    state.news.articles.find((a) => a.url === articleId)
  );

  if (!article) {
    return <p>Article not found</p>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <img src={article.urlToImage} alt={article.title} />
      <p>{article.content}</p>
    </div>
  );
};

export default ArticleDetailPage;
