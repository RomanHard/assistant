import React, { useState } from 'react';

const LeftBlock = () => {
  const [showModal, setShowModal] = useState(false);

  const handleEditCategories = () => {
    setShowModal(true);
  };

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
          <select id="category">
            <option value="category1">Категорія 1</option>
            <option value="category2">Категорія 2</option>
            <option value="category3">Категорія 3</option>
          </select>
        </div>
        <div className="input-field">
          <label htmlFor="wallet">Гаманець:</label>
          <select id="wallet">
            <option value="wallet1">Гаманець 1</option>
            <option value="wallet2">Гаманець 2</option>
            <option value="wallet3">Гаманець 3</option>
          </select>
        </div>
        <div className="input-field">
          <label htmlFor="date">Дата:</label>
          <input type="date" id="date" defaultValue={new Date().toISOString().split('T')[0]} />
        </div>
        <div className="button-row">
          <button type="submit">Додати</button>
          <button type="reset">Скинути</button>
        </div>
        {showModal && (
          <div className="modal" style={{ backgroundColor: '#588157' }}>
            {/* Вміст модального вікна */}
          </div>
        )}
      </div>
    </div>
  );
};

export default LeftBlock;
