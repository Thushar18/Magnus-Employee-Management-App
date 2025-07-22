import React from "react";

const Home = () => {
    return(
        <div style={styles.page}>
            <div style={styles.headerSection}>
                <h1 style={styles.mainHeading}>Welcome to JALA Academy</h1>
                <p style={styles.subHeading}>The world's best upskilling academy</p>
            </div>
            <div style={styles.infoBlock}>
                <p><strong>
                    Do you want to learn Selenium/cucumber Automation completely with Practical Scenarios in 7 Days?
                    Use this website to find all the scenarios at one place.
                </strong></p>
                <p><strong>
                    To understand or test RESTful APIs, use the JALA Academy FREE live APIs.
                    Search on Google with the keyword "JALA Academy Postman APIs"
                </strong></p>
            </div>

            <div style={styles.card}>
                <p>
                    You learn Everything by doing projects if you are very serious to get a software job in 90 days&nbsp;
                    <a href="http://jalatechnologies.com" target="_blank" rel="noopener noreferrer">
                    http://jalatechnologies.com
                    </a>
                </p>
                <p>Don't forget to read our website JALA Academy completely to know more opportunities</p>
            </div>

            <div style={styles.highlightBox}>
                <strong>
                    If you are a working professional, Up-skill with JALA Academy Job Guarantee Programs
                    to keep your Job secure for 10 Years
                </strong>
            </div>

            <footer style={styles.footer}>
                <p>
                    Copyright © 2025 <a href="https://jalaacademy.com" style={{ color: '#337ab7' }}>JALA Technologies</a>. All rights reserved.
                </p>
            </footer>
        </div>
  );
};

const styles = {
  page: {
    backgroundColor: '#e7ecf2',
    padding: '20px',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif'
  },
  headerSection: {
    textAlign: 'center',
    marginBottom: '30px'
  },
  mainHeading: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '10px'
  },
  subHeading: {
    fontSize: '16px',
    color: '#555'
  },
  infoBlock: {
    textAlign: 'center',
    fontSize: '15px',
    color: '#000',
    fontWeight: 'bold',
    marginBottom: '20px'
  },
  card: {
    backgroundColor: '#fff',
    padding: '20px',
    border: '1px solid #d6d6d6',
    borderTop: '3px solid #337ab7',
    marginBottom: '20px',
    maxWidth: '80%',
    margin: '0 auto 20px'
  },
  highlightBox: {
    backgroundColor: 'yellow',
    fontWeight: 'bold',
    padding: '15px',
    border: '1px solid #ccc',
    maxWidth: '80%',
    margin: '0 auto',
    marginBottom: '30px'
  },
  footer: {
    textAlign: 'center',
    marginTop: '40px',
    paddingTop: '20px',
    fontSize: '14px',
    color: '#444'
  }
};

export default Home;

