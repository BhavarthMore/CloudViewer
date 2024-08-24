import React, { useState } from 'react';

function FileUpload({ userMail }) {
  const [files, setFiles] = useState([]);
  const [uploadStatus, setUploadStatus] = useState('');

  // Destructure the data from the location's state
  

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  const uploadFile = async () => {
    if (files.length === 0) {
      alert("No files selected");
      return;
    }
    
    setUploadStatus('Uploading...');
    
    try {
      for (const file of files) {
        // Step 1: Get the presigned URL from the backend
        const response = await fetch('http://localhost:5000/api/generate-url', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userMail: userMail, filename: file.name, contentType: file.type }), // Send filename and contentType
        });
  
        const data = await response.json();
        const { url, filename } = data;
  
        // Step 2: Upload the file directly to S3 using the presigned URL
        const uploadResponse = await fetch(url, {
          method: "PUT",
          body: file,
          headers: {
            'Content-Type': file.type,
          },
        });
  
        if (uploadResponse.ok) {
          console.log('File uploaded successfully:', filename);
        } else {
          throw new Error('Upload failed');
        }
      }
      
      setUploadStatus('Upload complete');
      alert('Files uploaded successfully');
    } catch (error) {
      console.error('Error uploading files:', error);
      setUploadStatus('Error occurred');
      alert("Error occurred!!");
    }
  };
  

  return (
    <div>
      <section className="py-3 py-md-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
              <div className="card border border-light-subtle rounded-3 shadow-sm">
                <div className="card-body p-3 p-md-4 p-xl-5">
                  <h2 className="fs-6 fw-normal text-center mb-4">Select Files for Uploading</h2>
                  <input
                    className="form-control"
                    onChange={handleFileChange}
                    type="file"
                    id="formFileMultiple"
                    multiple
                  />
                  <div className="col-12">
                    <div className="d-grid my-3">
                      <button
                        className="btn btn-primary btn-lg text-black"
                        style={{ backgroundColor: "#e3f2fd" }}
                        type="button"
                        onClick={uploadFile}
                      >
                        Upload
                      </button>
                    </div>
                    {uploadStatus && <p className="text-center">{uploadStatus}</p>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FileUpload;
