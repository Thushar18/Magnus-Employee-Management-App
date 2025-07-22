// src/components/LinksPage.js
import React, { useState } from 'react';
import './LinksPage.css';

const LinksPage = () => {
  const [activeTab, setActiveTab] = useState('working-links');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="links-page">
      {/* Page Header */}
      <div className="page-header">
        <h2>Links</h2>
      </div>

      {/* Tabs Header */}
      <div className="tabs-container">
        <div className="tabs-header">
          <button
            className={`tab ${activeTab === 'working-links' ? 'active' : ''}`}
            onClick={() => handleTabChange('working-links')}
          >
            Working Links
          </button>
          <button
            className={`tab ${activeTab === 'broken-links' ? 'active' : ''}`}
            onClick={() => handleTabChange('broken-links')}
          >
            Broken Links
          </button>
          <button
            className={`tab ${activeTab === 'image-links' ? 'active' : ''}`}
            onClick={() => handleTabChange('image-links')}
          >
            Image Links
          </button>
          <button
            className={`tab ${activeTab === 'status-codes' ? 'active' : ''}`}
            onClick={() => handleTabChange('status-codes')}
          >
            Status Codes
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="tabs-content">
        {activeTab === 'working-links' && (
          <div className="link-group">
            <div className="link-container">
              <a href="https://www.google.com " target="_blank" rel="noopener noreferrer" style={{ color: 'red' }}>
                Link 1
              </a>
              <a href="https://www.yahoo.com " target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>
                Link 2
              </a>
              <a href="https://www.bing.com " target="_blank" rel="noopener noreferrer" style={{ color: 'green' }}>
                Link 3
              </a>
            </div>
          </div>
        )}

        {activeTab === 'broken-links' && (
          <div className="link-group">
            <div className="link-container">
              <a href="http://nonexistent-url-1.com" target="_blank" rel="noopener noreferrer">
                Link 1
              </a>
              <a href="http://nonexistent-url-2.com" target="_blank" rel="noopener noreferrer">
                Link 2
              </a>
              <a href="http://nonexistent-url-3.com" target="_blank" rel="noopener noreferrer">
                Link 3
              </a>
            </div>
          </div>
        )}

        {activeTab === 'image-links' && (
          <div className="link-group">
            <div className="image-link-container">
              <a href="https://www.google.com " target="_blank" rel="noopener noreferrer">
                <img
                  src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png "
                  alt="Google Logo"
                />
              </a>
              <a href="https://www.linkedin.com/feed/ " target="_blank" rel="noopener noreferrer">
                <img
                  src="https://magnus.jalatechnologies.com/Content/img/linkedin.png "
                  alt="LinkedIn Logo"
                />
              </a>
              <a href="https://jalatechnologies.com/ " target="_blank" rel="noopener noreferrer">
                <img
                  src="https://magnus.jalatechnologies.com/Content/img/jala-tech-logo.png "
                  alt="JALA Logo"
                />
              </a>
            </div>
          </div>
        )}

        {activeTab === 'status-codes' && (
          <div className="link-group">
            <div className="link-container">
              <a href="https://www.restapitutorial.com/httpstatuscodes " target="_blank" rel="noopener noreferrer" style={{ color: 'green' }}>
                200
              </a>
              <a href="https://httpstat.us/301 " target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>
                301
              </a>
              <a href="https://httpstat.us/404 " target="_blank" rel="noopener noreferrer" style={{ color: 'red' }}>
                404
              </a>
              <a href="https://httpstat.us/500 " target="_blank" rel="noopener noreferrer" style={{ color: 'orange' }}>
                500
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LinksPage;