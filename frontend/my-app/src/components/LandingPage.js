// components/LandingPage.jsx
import React from 'react';
import "./styles/LandingPage.css";
import ParticlesBackground from './ParticlesBackground';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <ParticlesBackground />
      <div className="centered-text">
        <h1 className='logo-text'>🎵 Syncbeats – Your Personal Music Hub</h1>
        <h2>Stream, Organize, and Enjoy Music Like Never Before</h2>
        <br/>
        <h2>SignUp or Login to Continue</h2>
        
        <div className='buttons'>
          <button><Link to={"/signup"}>SignUp</Link></button>
          <button><Link to={"/login"}>Login</Link></button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
