// src/components/MultipleTabsPage.js
import React, { useState } from 'react';
import './MultipleTabsPage.css';

const MultipleTabsPage = () => {
  const [activeTab, setActiveTab] = useState('plan-to-succeed');

  const tabs = [
    {
      id: 'plan-to-succeed',
      title: 'Plan to Succeed',
      content: (
        <div>
          <p>Congratulations, You are in the best place to learn the technologies for JOB. Please strictly follow the plan for the first 45 days to see the unbelievable results.</p>
          <p>You must UNLEARN to LEARN new things every day as technologies are changing faster than ever and Because the old rules will no longer apply...and so your old knowledge is. It's time for us to think beyond.</p>
          <p>It's not just learning technologies, Also You learn how to use your knowledge and experience to get a job in less than 100 days.</p>
          <div className="input-row">
            <input 
                type="text" 
                placeholder="Enter text here" 
                className="form-control" 
            />
            <input 
                type="text" 
                placeholder="Enter another text here" 
                className="form-control" 
            />
          </div>
        </div>
      ),
    },
    {
      id: 'unlearning',
      title: 'UnLearning',
      content: (
        <div>
          <p>Unlearning is the process of realizing that something which we learned earlier is incorrect, ineffective, or obsolete, admitting it and deciding to erase such bad conditioning and misconceptions from our mind for good. It is the process of exploring what we have stored in our system and deleting all the unnecessary data. It is the process of saying bye to an old, obsolete, and outdated paradigm and embracing a new paradigm and willingly undergoing a paradigm shift.</p>
          <p>Unfortunately, we are controlled by myths which do not allow us to open our eyes to reality</p>
          <div className="input-row">
            <input 
                type="text" 
                placeholder="Enter text here" 
                className="form-control" 
            />
            <input 
                type="text" 
                placeholder="Enter another text here" 
                className="form-control" 
            />
          </div>
        </div>
      ),
    },
    {
      id: 'ways-of-unlearning',
      title: 'Ways of Unlearning',
      content: (
        <div>
          <p>The first step towards becoming an “unlearned” is not just to have a thirst for knowledge but to question our knowledge. Discussing our knowledge with those who are competent in a particular field, being challenged constantly, and being ready to be proved wrong will help us understand whether what we have learned is still relevant or obsolete. It is also important to question one’s belief system and check whether we are treating myths as scientific facts.</p>
          <p>The next important step is to take steps to develop creative and critical thinking.</p>
          <div className="input-row">
            <input 
                type="text" 
                placeholder="Enter text here" 
                className="form-control" 
            />
            <input 
                type="text" 
                placeholder="Enter another text here" 
                className="form-control" 
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="tabs-container">
      {/* Page Header */}
      <div className="page-header">
        <h2>Tabs</h2>
      </div>

      {/* Tab Buttons - Positioned ABOVE the content */}
      <div className="tabs-header-wrapper">
        <div className="tabs-header">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>

      {/* Centered Content Box */}
      <div className="content-box">
        {tabs.find(t => t.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default MultipleTabsPage;