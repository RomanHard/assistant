import React, { useState } from 'react';
import './leftBlock-module.css';

const LeftBlock = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedWallet, setSelectedWallet] = useState('');

  const handleEditCategories = () => {
    setShowModal(true);
  };

  const handleCategoryChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedCategory(selectedValue);
    if (selectedValue === 'create-category') {
      handleEditCategories();
    }
  };

  const handleEditWallets = () => {
    setShowModal(true);
  };

  const handleWalletChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedWallet(selectedValue);
    if (selectedValue === 'create-wallet') {
      handleEditWallets();
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
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
          <select id="category" onChange={handleCategoryChange} className="category-select">
            <option value="" disabled selected>
              Виберіть категорію
            </option>
            <option value="create-category">Створити категорію</option>
          </select>
          {selectedCategory === 'create-category' && (
            <div className="modal">
              <button className="modal-close" onClick={handleCloseModal}>
                &times;
              </button>
              Вміст модального вікна
            </div>
          )}
        </div>
        <div className="input-field">
          <label htmlFor="wallet">Гаманець:</label>
          <select id="wallet" onChange={handleWalletChange}>
            <option value="" disabled selected>
              Виберіть гаманець
            </option>
            <option value="create-wallet">Створити гаманець</option>
          </select>
          {selectedWallet === 'create-wallet' && (
            <div className="modal">
              <button className="modal-close" onClick={handleCloseModal}>
                &times;
              </button>
              Вміст модального вікна 123
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