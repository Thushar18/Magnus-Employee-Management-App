/* global alert, confirm, prompt */
import React,{useState}from 'react';
import './PopupsPage.css';

const PopupsPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openWindowPopup = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const openInPopup = (url, title = '') => {
        const features = 'width=800,height=600,resizable=yes,scrollbars=yes,status=no,toolbar=no,menubar=no,location=yes';
        window.open(url, title, features);
    };

    const openDuplicatePage = () => {
        const features = 'width=800,height=600,resizable=yes,scrollbars=yes';
        const win = window.open('', '_blank', features);
        if (win) {
            win.document.write(`
                <html>
                <head><title>Duplicate Page</title></head>
                <body style="font-family: Arial, sans-serif; padding: 20px;">
                    <h2>Duplicate Page of Magnus App</h2>
                    <p>This is a duplicate instance of your website loaded in a popup window.</p>
                    <button onclick="window.close()">Close</button>
                </body>
                </html>
            `);
            win.document.close();
        }
    };

    const showAlertBox = () => {
        alert('This is an Alert Box!');
    };

    const showConfirmBox = () => {
        const result = confirm('Do you want to proceed?');
        if (result) {
            alert('Proceeding...');
        } else {
            alert('Action canceled.');
        }
    };

    const showPromptBox = () => {
        const userInput = prompt('Enter your name:');
        if (userInput) {
            alert(`Hello, ${userInput}!`);
        }
    };
    return (
        <div className="popups-page">
            {/* Page Header */}
            <div className="page-header">
                <h2>Popups</h2>
            </div>

            {/* Buttons Section */}
            <div className="popup-buttons">
                <button onClick={() => openInPopup('https://www.google.com ', 'Google')}>Popup One</button>
                <button onClick={() => openInPopup('https://www.yahoo.com ', 'Yahoo')}>Popup Two</button>
                <button onClick={() => openInPopup('https://brave.com ', 'Brave')}>Popup Three</button>
                <button onClick={() => openInPopup('https://brave.com ', 'Brave Duplicate')}>Popup Duplicate</button>
                <button onClick={() => openInPopup("http://localhost:3001/popups")}>Duplicate Page</button>
                <button onClick={openWindowPopup}>In Window Popup</button>
                <button onClick={showAlertBox}>Alert Box</button>
                <button onClick={showConfirmBox}>Confirm Box</button>
                <button onClick={showPromptBox}>Prompt Box</button>
            </div>
            {/* Modal Overlay */}
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <div className="modal-header">
                            <h3>Popup One</h3>
                            <button className="close-btn" onClick={closeModal}>
                                ×
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>
                                Popup One body...
                                <br />
                                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                                ac consectetur ac, vestibulum at eros.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PopupsPage;