import React, { useState, useEffect } from 'react';
import './leftBlock-module.css';

const LeftBlock = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState([]);

  const handleCategoryChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedCategory(selectedValue);
    if (selectedValue === 'create-category') {
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCategory('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setShowModal(false);
      setSelectedCategory('');
    }
  };


  const handleSaveCategory = (e) => {
    e.preventDefault();
    const categoryName = document.getElementById('categoryName').value;
    const categoryColor = document.getElementById('categoryColor').value;
    const newCategory = {
      name: categoryName,
      color: categoryColor,
    };
    setCategories([...categories, newCategory]);
    setShowModal(false);
    setSelectedCategory('');
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="left-block">
      <h2 className="block-title">Доходи</h2>
      <div className="income-form">
        <div className="input-field">
          <label htmlFor="amount">Сума:</label>
          <input type="text" id="amount" />
        </div>
        <div className="input-field">
          <label htmlFor="category">Категорія:</label>
          <select
            id="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="category-select"
          >
            <option value="" disabled>
              Виберіть категорію
            </option>
            <option value="create-category">Додати/Редагувати категорію</option>
            {categories.map((category, index) => (
              <option key={index} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
          {selectedCategory === 'create-category' && showModal && (
            <div className="modal" >
              <div className="modal-content" >
                <h3>Додати/Редагувати категорію</h3>
                <form onSubmit={handleSaveCategory}>
                  <div className="form-group">
                    <label htmlFor="categoryName">Назва категорії:</label>
                    <input type="text" id="categoryName" name="categoryName" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="categoryColor">Колір категорії:</label>
                    <input type="color" id="categoryColor" name="categoryColor" />
                  </div>
                  <button type="submit">Зберегти</button>
                </form>
                <button className="modal-close" onClick={handleCloseModal}>
                  &times;
                </button>

    </div>
    <div className="modal-overlay" >
      
    </div>
  </div>
)}

        </div>
        <div className="input-field">
          <label htmlFor="date">Дата:</label>
          <input type="date" id="date" defaultValue={new Date().toISOString().split('T')[0]} />
        </div>
        <div className="button-row">
          <button type="submit">Додати</button>
          <button type="reset">Скинути</button>
        </div>
      </div>
    </div>
  );
};

export default LeftBlock;
