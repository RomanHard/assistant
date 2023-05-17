import React, { useState } from 'react';

const LeftBlock = () => {
  const [showModal, setShowModal] = useState(false);

  const handleEditCategories = () => {
    setShowModal(true);
  };

  return (
    <div className="left-block">
      <h2>Доходи</h2>
      <div className="income-form">
        <div className="income-source">
          <label htmlFor="income-source">Джерело:</label>
          <select id="income-source">
            <option value="source1">Джерело 1</option>
            <option value="source2">Джерело 2</option>
            <option value="source3">Джерело 3</option>
          </select>
        </div>
        <div className="income-amount">
          <label htmlFor="amount">Сума:</label>
          <input type="text" id="amount" />
        </div>
        <div className="income-comment">
          <label htmlFor="comment">Коментарій:</label>
          <input type="text" id="comment" />
        </div>
        <div className="income-categories">
          <label>Категорії:</label>
          <div>
            <input type="checkbox" id="category1" />
            <label htmlFor="category1">Категорія 1</label>
          </div>
          <div>
            <input type="checkbox" id="category2" />
            <label htmlFor="category2">Категорія 2</label>
          </div>
          <div>
            <input type="checkbox" id="category3" />
            <label htmlFor="category3">Категорія 3</label>
          </div>
          <button onClick={handleEditCategories}>Редагувати категорії доходу</button>
        </div>
        {showModal && (
          <div className="modal" style={{ backgroundColor: '#588157' }}>
            {/* Вміст модального вікна */}
          </div>
        )}
        <button>Додати</button>
      </div>
    </div>
  );
};

export default LeftBlock;
