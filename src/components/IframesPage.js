// src/components/IframesPage.js
import React from 'react';
import './IframesPage.css';

const IframesPage = () => {
  return (
    <div className="iframes-page">
      {/* Frame One */}
      <div className="frame frame-one">
        <h2>Frame One</h2>
        <p>This is the first iframe frame.</p>
      </div>

      {/* Frame Two */}
      <div className="frame frame-two">
        <h2>Frame Two</h2>
        <iframe
          src="https://pages.github.com"
          title="Github Pages"
          width="100%"
          height="500px"
          frameBorder="0"
        />
      </div>

      {/* Frame Three */}
      <div className="frame frame-three">
        <h2>Frame Three</h2>
        <p>This is the third iframe frame.</p>
      </div>
    </div>
  );
};

export default IframesPage;