import React from 'react';
import { Link } from 'react-router-dom';

const ArticleCard = ({ article }) => {
  return (
    <div className="border border-gray-300 p-4 rounded-lg shadow-lg">
      {article.urlToImage && <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover rounded-md" />}
      <h2 className="text-xl font-bold my-2">{article.title}</h2>
      <p className="text-gray-700">{article.description}</p>
      <Link to={`/article/${encodeURIComponent(article.url)}`} className="text-blue-500 hover:underline mt-2 block">Read More</Link>
    </div>
  );
};

export default ArticleCard;
