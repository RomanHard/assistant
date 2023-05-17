import React from 'react';
import './App.css';
import Expenses from './expenses/Expenses';
import Notes from './notes/Notes';
import Tasks from './tasks/Tasks';
import Settings from './settings/Settings';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export const App = () => {
  const handleMenuToggle = () => {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const menuToggle = document.querySelector('.menu-toggle');
    dropdownMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
  };

  return (
    <BrowserRouter>
      <div className="app">
        <header className="header">
          <h1 className="project-title">Assistant</h1>
        </header>
        <nav className="dropdown-menu">
          <ul className="nav-list">
            <li className="nav-list-item">
              <Link to="/expenses" className="nav-link">
              Cost accounting
              </Link>
            </li>
            <li className="nav-list-item">
              <Link to="/notes" className="nav-link">
              Notes
              </Link>
            </li>
            <li className="nav-list-item">
              <Link to="/tasks" className="nav-link">
              Tasks
              </Link>
            </li>
            <li className="nav-list-item">
              <Link to="/settings" className="nav-link">
              Settings
              </Link>
            </li>
          </ul>
        </nav>
        <div className="menu-toggle" onClick={handleMenuToggle}>
          <div className="menu-icon"></div>
          <div className="menu-icon"></div>
          <div className="menu-icon"></div>
        </div>
      </div>
      <div className="main-content">
          <Routes>
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
    </BrowserRouter>
    
  );
};
