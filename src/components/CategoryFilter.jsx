import React from 'react';

const CategoryFilter = ({ categories, onCategoryChange }) => {
  return (
    <div className="mb-4">
      <select
        onChange={(e) => onCategoryChange(e.target.value)}
        className="p-2 border border-gray-300 rounded"
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
