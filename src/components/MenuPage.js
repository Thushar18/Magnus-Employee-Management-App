// src/components/MenuPage.js
import { useState } from 'react';
import './MenuPage.css'; // Make sure styles are applied

const MenuPage = () => {
  const [activeTab, setActiveTab] = useState('single'); // 'single' or 'submenus'
  const [selectedMenu, setSelectedMenu] = useState(null);

  // Common menu options
  const menuOptions = [
    'Testing',
    'JAVA',
    '.Net',
    'Database'
  ];

  const singleMenus = menuOptions;
  const subMenus = menuOptions;

  // Core Concepts for Sub Menus
  const coreConcepts = {
    Testing: ['Selenium', 'Manual Testing', 'DB Testing', 'Unit Testing'],
    JAVA: ['Adv Java', 'Core Java', 'Spring', 'Hibernate'],
    '.Net': ['.NET Core', 'ASP.NET', 'C#', 'MVC'],
    Database: ['SQL', 'My SQL', 'Oracle', 'H2']
  };

  return (
    <div className="menu-page">
      {/* Page Header */}
      <div className="page-header">
        <h2>Menu</h2>
      </div>

      {/* Tabs Header */}
      <div className="tabs-container">
        <div className="tabs-header">
          <button
            className={`tab ${activeTab === 'single' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('single');
              setSelectedMenu(null);
            }}
          >
            Single Menus
          </button>
          <button
            className={`tab ${activeTab === 'submenus' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('submenus');
              setSelectedMenu(null);
            }}
          >
            Sub Menus
          </button>
        </div>

        {/* Two-column layout */}
        <div className="tabs-content">
          {/* Left Side - Menu Buttons */}
          <div className="menu-side">
            {(activeTab === 'single' ? singleMenus : subMenus).map((menu) => (
              <button
                key={menu}
                className="menu-item"
                onClick={() => setSelectedMenu(menu)}
              >
                {menu}
              </button>
            ))}
          </div>

          {/* Right Side - Dynamic Content */}
          <div className="content-side">
            {selectedMenu ? (
              <>
                <p>You Have Selected "{selectedMenu}" Menu Option.</p>

                {/* Only show core concept buttons in Sub Menus tab */}
                {activeTab === 'submenus' && coreConcepts[selectedMenu] && (
                  <div className="dynamic-buttons">
                    {coreConcepts[selectedMenu].map((concept, index) => (
                      <button key={index} className="text-btn">
                        {concept}
                      </button>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <p>Select a menu option</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;