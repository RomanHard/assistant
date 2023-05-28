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

  const handleDeleteCategory = (index) => {
    const categoryId = categories[index]._id; // Отримати ідентифікатор категорії
    const updatedCategories = [...categories];
    updatedCategories.splice(index, 1);
    setCategories(updatedCategories);
    
    // Відправити запит на сервер для видалення категорії
    fetch(`http://localhost:1727/deleteCategory/${categoryId}`, {
      method: 'DELETE',
    })
      // .then((response) => response.json())
      .then((response) => response.json())
      .then((data) => console.log('Category deleted:', data))
      .catch((error) => console.error('Error deleting category:', error));
  };
  

  const sendCategoriesToServer = (category) => {
    fetch('http://localhost:1727/saveData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(category),
    })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error('Failed to save data');
      }
    })
    .then((data) => console.log('Category sent to server:', data.message))
    .catch((error) => console.error('Error sending categories to server:', error.message));     
  };

  const handleSaveCategory = (e) => {
    e.preventDefault();
    const categoryName = document.getElementById('categoryName').value;
    const categoryColor = document.getElementById('categoryColor').value;
    const newCategory = {
      name: categoryName,
      color: categoryColor
    };
    setCategories([...categories, newCategory]);
    sendCategoriesToServer(newCategory); // Відправка категорій на сервер після додавання нової
  };
  
  const fetchCategoriesFromServer = () => {
    fetch('http://localhost:1727/getData')
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error('Failed to fetch categories');
        }
      })
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.error('Error fetching categories from server:', error.message));
  };
  

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    fetchCategoriesFromServer();
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
    <h3>Категорії:</h3>
    <ul>
  {categories.map((category, index) => (
    <li key={index}>
      {category.name}
      <button onClick={() => handleDeleteCategory(index)}>Видалити</button>
    </li>
  ))}
</ul>
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
