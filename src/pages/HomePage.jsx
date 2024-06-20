import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../redux/newsSlice';
import ArticleCard from '../components/ArticleCard';
import CategoryFilter from '../components/CategoryFilter';
import Pagination from '../components/Pagination';

const HomePage = () => {
  const dispatch = useDispatch();
  const { articles, loading, error } = useSelector((state) => state.news);
  const [category, setCategory] = useState('general');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchNews({ category, page: currentPage }));
  }, [dispatch, category, currentPage]);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-4">
      <CategoryFilter
        categories={['general', 'business', 'technology', 'entertainment']}
        onCategoryChange={handleCategoryChange}
      />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article) => (
          <ArticleCard key={article.url} article={article} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(articles.length / 10)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default HomePage;
