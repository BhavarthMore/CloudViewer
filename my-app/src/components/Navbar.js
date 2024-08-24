import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ display }) {
  const navigate = useNavigate();

  const handleFileUpload = () => {
    navigate(`/uploadfile?display=download`);
  };

  const handleFileDownload = () => {
    navigate(`/download?display=upload`);
  };

  const handleLogOut = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#e3f2fd" }}>
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic text-black" to="/">
            CloudViewer
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <Link className="nav-link active text-black" aria-current="page" to="/"></Link>
              </li>
            </ul>
            {!localStorage.getItem("authToken") ? (
              <div className="d-flex">
                <Link className="btn bg-white mx-1" to="/login">
                  Login
                </Link>
                <Link className="btn bg-white mx-1" to="/signup">
                  Sign Up
                </Link>
              </div>
            ) : (
              <div className="d-flex">
                {display === "upload" ? (
                  <button
                    className="btn bg-white mx-1"
                    onClick={handleFileUpload}
                    aria-label="Upload Files"
                  >
                    Upload Files
                  </button>
                ) : (
                  <button
                    className="btn bg-white mx-1"
                    onClick={handleFileDownload}
                    aria-label="My Uploaded Files"
                  >
                    My Uploaded Files
                  </button>
                )}
                <button className="btn bg-white mx-1" onClick={handleLogOut} aria-label="Logout">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
