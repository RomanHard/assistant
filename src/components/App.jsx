import React from 'react';
import './App.css';

export const App = () => {
  const handleMenuToggle = () => {
  
  };

  return (
    <div className="app">
      <header className="header">
        <h1 className="project-title">Assistant</h1>
      </header>
      <nav className="dropdown-menu">
        {/* Додайте блоки випадаючого списку */}
      </nav>
      <div className="menu-toggle" onClick={handleMenuToggle}>
        <div className="menu-icon"></div>
        <div className="menu-icon"></div>
        <div className="menu-icon"></div>
      </div>
    </div>
  );
};

