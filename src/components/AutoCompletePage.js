import { useState } from 'react';
import './AutoCompletePage.css';

const AutoCompletePage = () => {
  const [activeTab, setActiveTab] = useState('single');
  const [singleValue, setSingleValue] = useState('');
  const [multipleValues, setMultipleValues] = useState([]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSingleInputChange = (e) => {
    setSingleValue(e.target.value);
  };

  const handleMultipleInputChange = (e) => {
    const value = e.target.value;
    if (!value.trim()) return;

    const newValues = [...new Set([...multipleValues, value])];
    setMultipleValues(newValues);
    e.target.value = '';
  };

  return (
    <div className="autocomplete-page">
      <div className="page-header">
        <h2>Autocomplete</h2>
      </div>
      <div className="tabs-container">
        <div className="tabs-header">
          <button
            className={`tab ${activeTab === 'single' ? 'active' : ''}`}
            onClick={() => handleTabChange('single')}
          >
            Single Values
          </button>
          <button
            className={`tab ${activeTab === 'multiple' ? 'active' : ''}`}
            onClick={() => handleTabChange('multiple')}
          >
            Multiple Values
          </button>
        </div>
        <div className="tabs-content">
          <div className="menu-side">
            {activeTab === 'single' && (
              <div className="form-group">
                <label>Tags:</label>
                <input
                  type="text"
                  placeholder="Enter a tag"
                  onChange={handleSingleInputChange}
                />
              </div>
            )}
            {activeTab === 'multiple' && (
              <div className="form-group">
                <label>Tags:</label>
                <input
                  type="text"
                  placeholder="Enter tags (comma-separated)"
                  onChange={handleMultipleInputChange}
                />
              </div>
            )}
          </div>
          <div className="content-side">
            {activeTab === 'single' && (
              <p>You entered: "{singleValue}"</p>
            )}
            {activeTab === 'multiple' && (
              <p>You entered: {multipleValues.join(', ')}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoCompletePage;