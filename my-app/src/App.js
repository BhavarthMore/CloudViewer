import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Upload from './components/Upload';
import UploadFile from './screens/UploadFile';
import Download from './screens/DownloadFile';
import { AuthProvider } from './components/AuthContext'; // Ensure correct path

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/uploadfile" element={<UploadFile />} />
            <Route path="/download" element={<Download />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
