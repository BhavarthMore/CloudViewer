import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <div >
        <div className='container ' style={{

          fontFamily: 'Arial, sans-serif',
          color: '#333',
          backgroundColor: '#e3f2fd', // Light blue background

          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',

          padding: '15px',
          marginTop: '10px',
          marginBottom: '20px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
          <h1 style={{
            color: '#2c3e50',
            fontSize: '2.5em',
            marginBottom: '10px'
          }}>Welcome to CloudViewer: Your Ultimate File Sharing Solution</h1>
          <p style={{
            fontSize: '1.2em',
            marginBottom: '20px'
          }}>Effortless File Sharing at Your Fingertips</p>
          <p style={{
            marginBottom: '20px'
          }}>At CloudViewer, we make file sharing simple, secure, and swift. Whether you're sending large documents to colleagues, sharing precious memories with loved ones, or collaborating on creative projects, we've got you covered.</p>
        </div>

        <div className='container ' style={{
          width: "100%",
          fontFamily: 'Arial, sans-serif',
          color: '#333',
          backgroundColor: '#e3f2fd', // Light blue background

          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',

          padding: '15px',
          marginTop: '10px',
          marginBottom: '20px',
          marginLeft: 'auto',
          marginRight: 'auto',

        }}>
          <h2 style={{
            color: '#2980b9',
            fontSize: '2em',
            marginBottom: '15px'
          }}>Why Choose CloudViewer?</h2>
          <ul style={{
            listStyle: 'none',
            padding: '1',
            marginBottom: '20px'
          }}>
            <li style={{
              backgroundColor: '#ecf0f1',
              borderLeft: '5px solid #3498db',
              padding: '10px',
              marginBottom: '10px',
              borderRadius: '4px'
            }}><strong>Seamless Sharing:</strong> Upload and share files of any size with just a few clicks. No more email size limits or cumbersome processes.</li>
            <li style={{
              backgroundColor: '#ecf0f1',
              borderLeft: '5px solid #3498db',
              padding: '10px',
              marginBottom: '10px',
              borderRadius: '4px'
            }}><strong>Top-Notch Security:</strong> Your files are encrypted and protected with state-of-the-art security protocols, ensuring only you and your chosen recipients have access.</li>
            <li style={{
              backgroundColor: '#ecf0f1',
              borderLeft: '5px solid #3498db',
              padding: '10px',
              marginBottom: '10px',
              borderRadius: '4px'
            }}><strong>Instant Access:</strong> Share files and folders in real-time. Our user-friendly interface makes it easy to track and manage your shared content from anywhere.</li>
            <li style={{
              backgroundColor: '#ecf0f1',
              borderLeft: '5px solid #3498db',
              padding: '10px',
              marginBottom: '10px',
              borderRadius: '4px'
            }}><strong>Collaborate with Ease:</strong> Create shared folders and invite team members to work together. Keep everyone in the loop with easy access and real-time updates.</li>
            <li style={{
              backgroundColor: '#ecf0f1',
              borderLeft: '5px solid #3498db',
              padding: '10px',
              marginBottom: '10px',
              borderRadius: '4px'
            }}><strong>Cross-Platform Compatibility:</strong> Whether you're on a computer, tablet, or smartphone, CloudViewer works seamlessly across all your devices.</li>
          </ul>
        </div>

        <div className='container' style={{

          fontFamily: 'Arial, sans-serif',
          color: '#333',
          backgroundColor: '#e3f2fd', // Light blue background

          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',

          padding: '15px',
          margin: 'auto',

        }}>
          <h2 style={{
            color: '#2980b9',
            fontSize: '2em',
            marginBottom: '15px'
          }}>Get Started Today!</h2>
          <ol style={{
            marginBottom: '20px'
          }}>
            <li><strong>Sign Up:</strong> Create your free account in minutes.</li>
            <li><strong>Upload:</strong> Drag and drop files or folders to upload them to your CloudViewer account.</li>
            <li><strong>View:</strong> Easily Select and view your files.</li>
          </ol>

          <p style={{
            marginBottom: '20px'
          }}>Join thousands of satisfied users who trust CloudViewer for all their file sharing needs. Start sharing smarter with CloudViewer!</p>

          <p style={{
            fontSize: '1.1em',
            marginBottom: '0'
          }}><a href="#help-center" style={{
            color: '#3498db',
            textDecoration: 'none'
          }}>Need Help?</a> Visit our <a href="#help-center" style={{
            color: '#3498db',
            textDecoration: 'none'
          }}>Help Center</a> or <a href="#contact-us" style={{
            color: '#3498db',
            textDecoration: 'none'
          }}>Contact Us</a> for support.</p>
        </div>
      </div>
    <Footer></Footer>
    </div >

  )
}
