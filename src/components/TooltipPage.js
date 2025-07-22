// src/components/TooltipPage.js
import React, { useState } from 'react';
import './TooltipPage.css'; // Make sure styles are applied

const TooltipPage = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="tooltip-page">
      {/* Page Header */}
      <div className="page-header">
        <h2>Tooltip</h2>
      </div>

      {/* Tooltip Section */}
      <div className="tooltip-section">
        <button
          id="tooltip-button"
          title="Check the Tooltip Before You Click." // Tooltip message
          onClick={() => setIsClicked(true)}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Check the Tooltip Before You Click.
        </button>

        {/* Tooltip Content */}
        <div
          className={`tooltip-message ${isClicked ? 'clicked' : ''}`}
          style={{
            position: 'absolute',
            top: '50px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: isClicked ? '#000' : '#fff',
            color: isClicked ? '#fff' : '#000',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            zIndex: 999,
            pointerEvents: 'none'
          }}
        >
          {isClicked
            ? "Thank you for being here!"
            : "You have not clicked this BUTTON yet. Please Click me and check the tooltip."
          }
        </div>
      </div>
    </div>
  );
};

export default TooltipPage;