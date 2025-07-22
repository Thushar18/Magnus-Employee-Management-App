// src/components/ImagesPage.js
import { useState } from 'react';
import './ImagesPage.css'; // Import external CSS

const ImagesPage = () => {
  const [files, setFiles] = useState([]);
  const [fileName, setFileName] = useState('');

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  // Handle upload
  const handleUpload = () => {
    if (!fileName) {
      alert("Please select an image first.");
      return;
    }

    const fileInput = document.getElementById('file-upload');
    const file = fileInput.files[0];
    if (file) {
      setFiles((prev) => [...prev, file]);
    }

    alert('✅ File uploaded successfully!');
    setFileName('');
    fileInput.value = null; // Reset input
  };

  // Handle delete image
  const handleDelete = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="images-page">
      {/* Page Header */}
      <h2>Uploading/Downloading Image</h2>

      {/* Upload Section */}
      <div className="upload-section">
        <label>Select File:</label>
        <div className="file-input-wrapper">
          {/* Hidden File Input */}
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />

          {/* Choose File Button */}
          <button
            className="choose-file-btn"
            onClick={() => document.getElementById('file-upload').click()}
          >
            Choose File
          </button>

          {/* File Name Display Input */}
          <input
            type="text"
            value={fileName}
            placeholder="No file chosen"
            readOnly
            className="file-name-input"
          />
        </div>

        {/* Upload Button */}
        <button className="upload-btn" onClick={handleUpload}>
          Upload
        </button>
      </div>

      {/* Uploaded Images List */}
      <div className="image-list">
        <h3>List Of Images:</h3>
        {files.length === 0 ? (
          <p>No images uploaded yet.</p>
        ) : (
          <div className="image-grid">
            {files.map((file, index) => (
              <div key={index} className="image-item">
                <img
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                />
                <p>{file.name}</p>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(index)}
                >
                  ❌
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImagesPage;