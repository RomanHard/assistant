import React, { useState, useEffect } from 'react';
import './leftBlock-module.css';

const LeftBlock = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  // const [selectedWallet, setSelectedWallet] = useState('');

  const handleCategoryChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedCategory(selectedValue);
    if (selectedValue === 'create-category') {
      setShowModal(true);
    }
  };

  // const handleWalletChange = (e) => {
  //   const selectedValue = e.target.value;
  //   setSelectedWallet(selectedValue);
  //   if (selectedValue === 'create-wallet') {
  //     setShowModal(true);
  //   }
  // };

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

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  const handleOverlayClick = () => {
    setShowModal(false);
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
  <option value="create-category">Створити категорію</option>
</select>
{selectedCategory === 'create-category' && showModal && (
        <div className="modal" onClick={handleOverlayClick}>
          <div className="modal-content" onClick={handleModalClick}>
            Вміст модального вікна
            <button className="modal-close" onClick={handleCloseModal}>
              &times;
            </button>
    </div>
  </div>
)}

        </div>
        {/* <div className="input-field">
          <label htmlFor="wallet">Гаманець:</label>
          <select id="wallet" onChange={handleWalletChange}>
            <option value="" disabled defaultValue="">
              Виберіть гаманець
            </option>
            <option value="create-wallet">Створити гаманець</option>
          </select>
          {selectedWallet === 'create-wallet' && (
            <div className={`modal ${showModal ? 'active' : ''}`} onClick={handleOverlayClick} onKeyDown={handleKeyDown}>
  <div className="modal-content" onClick={handleModalClick}>
    Вміст модального вікна
    <button className="modal-close" onClick={handleCloseModal}>
      &times;
    </button>
  </div>
</div>

          )}
        </div> */}
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
