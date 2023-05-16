import React from 'react';
import './App.css';
import Expenses from './expenses/Expenses';
import Notes from './notes/Notes';
import Tasks from './tasks/Tasks';
import Settings from './settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';

export const App = () => {
  const handleMenuToggle = () => {
  
  };

  return (
    <BrowserRouter>
    <div className="app">
      <header className="header">
        <h1 className="project-title">Assistant</h1>
      </header>
      <nav className="dropdown-menu">
        {<ul className="nav-list">
          <li className="nav-list-item">
            <a href="#" className="nav-link">
<Expenses />
              </a>
              </li>
              <li className="nav-list-item">
                <a href="#" className="nav-link">
<Notes />
                  </a>
                  </li>
                      <li className="nav-list-item">
                        <a href="#" className="nav-link">
<Tasks />
                          </a>
                          </li>
                                  <li className="nav-list-item">
                                    <a href="#" className="nav-link">
<Settings />
                                      </a>
                                      </li>
                                      </ul>}

      </nav>
      <div className="menu-toggle" onClick={handleMenuToggle}>
        <div className="menu-icon"></div>
        <div className="menu-icon"></div>
        <div className="menu-icon"></div>
      </div>
    </div>
    </BrowserRouter>
  );
};

