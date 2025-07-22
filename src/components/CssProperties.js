// src/components/CssProperties.js
import React from 'react';
import './CssProperties.css';

const CssProperties = () => {
  const [activeTab, setActiveTab] = React.useState('links');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="css-properties">
      {/* Tabs Header */}
      <div className="tabs-container">
        <button
          className={`tab ${activeTab === 'links' ? 'active' : ''}`}
          onClick={() => handleTabChange('links')}
        >
          Links
        </button>
        <button
          className={`tab ${activeTab === 'labels' ? 'active' : ''}`}
          onClick={() => handleTabChange('labels')}
        >
          Labels
        </button>
        <button
          className={`tab ${activeTab === 'buttons' ? 'active' : ''}`}
          onClick={() => handleTabChange('buttons')}
        >
          Buttons
        </button>
        <button
          className={`tab ${activeTab === 'alerts' ? 'active' : ''}`}
          onClick={() => handleTabChange('alerts')}
        >
          Alerts
        </button>
        <button
          className={`tab ${activeTab === 'progress-bars' ? 'active' : ''}`}
          onClick={() => handleTabChange('progress-bars')}
        >
          Progress Bars
        </button>
      </div>

      {/* Tab Content */}
      <div className="tabs-content">
        {activeTab === 'links' && (
          <div className="link-group">
            <div className="link-container">
              <a href="https://www.google.com " target="_blank" rel="noopener noreferrer" style={{ color: 'red' }}>
                Link 1
              </a>
              <a href="https://www.facebook.com " target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>
                Link 2
              </a>
              <a href="https://www.yahoo.com " target="_blank" rel="noopener noreferrer" style={{ color: 'orange' }}>
                Link 3
              </a>
              <a href="https://www.opera.com " target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>
                Link 4
              </a>
              <a href="https://www.bing.com " target="_blank" rel="noopener noreferrer" style={{ color: 'green' }}>
                Link 5
              </a>
            </div>
          </div>
        )}

        {activeTab === 'labels' && (
          <div className="label-group">
            <p>These are label examples:</p>
            <div className="label-container">
              <span className="label default">Default</span>
              <span className="label primary">Primary</span>
              <span className="label success">Success</span>
              <span className="label info">Info</span>
              <span className="label danger">Danger</span>
            </div>
          </div>
        )}

        {activeTab === 'buttons' && (
          <div className="button-group">
            <p>These are button examples:</p>
            <div className="button-container">
              <button className="btn default">Default</button>
              <button className="btn primary">Primary</button>
              <button className="btn success">Success</button>
              <button className="btn info">Info</button>
              <button className="btn danger">Danger</button>
            </div>
          </div>
        )}

        {activeTab === 'alerts' && (
          <div className="alert-group">
            <div className="alert success">
              <span className="alert-message">Success! Indicates a successful or positive action.</span>
              <button className="alert-close">&times;</button>
            </div>
            <div className="alert info">
              <span className="alert-message">Info! Indicates a neutral informative change or action.</span>
              <button className="alert-close">&times;</button>
            </div>
            <div className="alert warning">
              <span className="alert-message">Warning! Indicates a warning that might need attention.</span>
              <button className="alert-close">&times;</button>
            </div>
            <div className="alert danger">
              <span className="alert-message">Danger! Indicates a dangerous or potentially negative action.</span>
              <button className="alert-close">&times;</button>
            </div>
          </div>
        )}

        {activeTab === 'progress-bars' && (
          <div className="progress-bar-group">
            <p>These are progress bar examples:</p>
            <div className="progress-bar-container">
              <div className="progress-bar success" style={{ width: '70%' }}></div>
              <div className="progress-bar info" style={{ width: '40%' }}></div>
              <div className="progress-bar warning" style={{ width: '60%' }}></div>
              <div className="progress-bar danger" style={{ width: '80%' }}></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CssProperties;