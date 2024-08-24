import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const fileCategories = {
  documents: 'Document',
  images: 'Image',
  videos: 'Video',
};

// Utility function to format file size
const formatFileSize = (bytes) => {
  if (bytes >= 1073741824) {
    return (bytes / 1073741824).toFixed(2) + ' GB';
  } else if (bytes >= 1048576) {
    return (bytes / 1048576).toFixed(2) + ' MB';
  } else if (bytes >= 1024) {
    return (bytes / 1024).toFixed(2) + ' KB';
  } else {
    return bytes + ' bytes';
  }
};

export default function FileTypeDropdowns() {
  const [selectedDocument, setSelectedDocument] = useState('');
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedVideo, setSelectedVideo] = useState('');
  const [allFiles, setAllFiles] = useState([]);
  const [fileUrls, setFileUrls] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFiles = async () => {
      setLoading(true);
      setError(null);

      const email = localStorage.getItem('userEmail');
      console.log('Fetching files for email:', email);

      try {
        const response = await fetch('http://localhost:5000/api/list-files', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        const data = await response.json();

        if (data.success) {
          setAllFiles(data.files);
        } else {
          setError('Failed to fetch files.');
        }
      } catch (err) {
        setError('Error fetching files.');
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
  }, []);

  const getSignedUrl = async (filename, contentType) => {
    const email = localStorage.getItem('userEmail');
    const file = filename.split('/').pop();

    try {
      const response = await fetch('http://localhost:5000/api/download-url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userMail: email,
          filename: file,
          contentType: contentType,
        }),
      });

      const data = await response.json();
      if (data.url) {
        return data.url;
      } else {
        throw new Error('Failed to get signed URL.');
      }
    } catch (err) {
      console.error('Error fetching signed URL:', err);
      return '';
    }
  };

  const filterFiles = (type) => {
    return allFiles.filter(file => file.type === fileCategories[type]);
  };

  const handleDownload = (url) => {
    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank'; // Open the file in a new tab
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleFileSelect = (type, setSelectedFile) => async (event) => {
    const selectedKey = event.target.value;
    setSelectedFile(selectedKey);

    const file = allFiles.find(file => file.Key === selectedKey);
    if (file) {
      const url = await getSignedUrl(file.Key, file.type);
      if (url) {
        setFileUrls(prevUrls => ({
          ...prevUrls,
          [file.Key]: url
        }));
      }
    }
  };

  const renderFileOptions = (type, selectedFile, setSelectedFile) => (
    <div>
      <select
        value={selectedFile}
        onChange={handleFileSelect(type, setSelectedFile)}
        className="form-select mb-3"
      >
        <option value="">Select {type}</option>
        {filterFiles(type).map((file, index) => (
          <option key={index} value={file.Key}>{file.Key.split('/').pop()}</option>
        ))}
      </select>
      {selectedFile && (
        <ul>
          {filterFiles(type).filter(file => file.Key === selectedFile).map((file, index) => (
            <li key={index} className="d-flex align-items-center">
              <span>{file.Key.split('/').pop()}</span>
              <span> ({formatFileSize(file.Size)})</span> {/* File size formatted */}
              <button
                onClick={() => handleDownload(fileUrls[file.Key])}
                className="btn btn-primary btn-sm ms-2"
              >
                Open File
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const display = searchParams.get("display");

  return (
    <div>
      <div className="mb-3 mt-3" style={{ margin: "15px" }}>
        <div className='card text-black' style={{margin:"15px", padding:"10px", backgroundColor:"#e3f2fd"}}>
          <h5>Documents</h5>
          {renderFileOptions('documents', selectedDocument, setSelectedDocument)}
        </div>

        <div className='card text-black' style={{margin:"15px", padding:"10px", backgroundColor:"#e3f2fd"}}>
          <h5>Images</h5>
          {renderFileOptions('images', selectedImage, setSelectedImage)}
        </div>

        <div className='card text-black' style={{margin:"15px", padding:"10px", backgroundColor:"#e3f2fd"}}>
          <h5>Videos</h5>
          {renderFileOptions('videos', selectedVideo, setSelectedVideo)}
        </div>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">{error}</p>}
    </div>
  );
}
