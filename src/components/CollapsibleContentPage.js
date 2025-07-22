// src/components/CollapsibleContentPage.js
import { useState } from 'react';
import './CollapsibleContentPage.css'; // Make sure styles are applied

const CollapsibleContentPage = () => {
  const [activeTab, setActiveTab] = useState('single'); // 'single' or 'multiple'
  const [expandedSections, setExpandedSections] = useState({});

  // Toggle collapse for any section
  const toggleCollapse = (sectionId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  // Original 3 sections for "Single Collapse"
  const singleCollapseSections = [
    {
      id: 'collapseOne',
      title: 'Know your goals and Prioritize Wisely',
      content:
        'What are your priorities for the day? Make a list of your priorities and plan your day. The tasks of the day must be outlined with the most important and urgent ones on top. Likewise, determine your short-term and long-term goals and evaluate your progress frequently.',
    },
    {
      id: 'collapseTwo',
      title: 'Be focused and Eliminate Distractions',
      content:
        'Focus is key to productivity. Identify and eliminate distractions in your environment. Use tools and techniques to maintain focus, such as time-blocking or noise-canceling headphones.',
    },
    {
      id: 'collapseThree',
      title: 'Choose the right mentor to Succeed in Career',
      content:
        'Having a good mentor can significantly accelerate your career growth. Look for mentors who have experience in your desired field and can provide valuable guidance and support.',
    },
  ];

  // New 4 sections for "Multiple Collapse"
  const multipleCollapseSections = [
    {
      id: 'collaborate',
      title: 'Collaborate with Colleagues',
      content:
        'Teach and learn from each other\n' +
        'Collaborate on lesson plans—Two minds are better than one.\n' +
        'Build your own social network\n' +
        'Get feedback regularly\n' +
        'Work together to solve problems\n' +
        'Become a teacher-leader\n' +
        'Adopt a team mentality\n' +
        'Ask for help\n' +
        'Find a mentor\n' +
        'Be open to new ideas',
    },
    {
      id: 'learnQuickly',
      title: 'Learn Anything Quickly',
      content:
        'Use spaced repetition\n' +
        'Apply what you learn immediately\n' +
        'Teach others what you’ve learned\n' +
        'Break complex topics into smaller parts\n' +
        'Practice consistently\n' +
        'Reflect on mistakes and adjust',
    },
    {
      id: 'reasonsGiveUp',
      title: 'Reasons People Give Up on Their Goals Too Early',
      content:
        'Lack of clear goals\n' +
        'Fear of failure\n' +
        'Overcommitment\n' +
        'No accountability\n' +
        'Negative self-talk\n' +
        'Not tracking progress\n' +
        'Unrealistic expectations',
    },
    {
      id: 'signsSettlingLess',
      title: 'Signs of Settling For Less in Life',
      content:
        'Constantly comparing yourself to others\n' +
        'Avoiding challenges\n' +
        'Focusing on past failures\n' +
        'Not setting ambitious goals\n' +
        'Ignoring opportunities for growth\n' +
        'Feeling stuck in routines',
    },
  ];

  return (
    <div className="collapsible-content-page">
      {/* Page Header */}
      <div className="page-header">
        <h2>Collapsible Content</h2>
      </div>

      {/* Tabs Header */}
      <div className="tabs-container">
        <div className="tabs-header">
          <button
            className={`tab ${activeTab === 'single' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('single');
              // Optionally reset expanded state when switching tabs
              setExpandedSections({});
            }}
          >
            Single Collapse
          </button>
          <button
            className={`tab ${activeTab === 'multiple' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('multiple');
              setExpandedSections({});
            }}
          >
            Multiple Collapse
          </button>
        </div>
      </div>

      {/* Two-column layout */}
      <div className="tabs-content">
        {/* Left Side - Collapsible Sections */}
        <div className="menu-side">
          {(activeTab === 'single' ? singleCollapseSections : multipleCollapseSections).map((section) => (
            <div key={section.id} className="collapsible-section">
              <div
                className="collapsible-header"
                onClick={() => toggleCollapse(section.id)}
              >
                <span>{section.title}</span>
                <span className="toggle-icon">
                  {expandedSections[section.id] ? '-' : '+'}
                </span>
              </div>
              {expandedSections[section.id] && (
                <div className="collapsible-body">
                  {section.content.split('\n').map((line, index) => (
                    <p key={index}>{line.trim()}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Side - Placeholder */}
        <div className="content-side">
          {/* Optional: Add summary or instructions here later */}
        </div>
      </div>
    </div>
  );
};

export default CollapsibleContentPage;