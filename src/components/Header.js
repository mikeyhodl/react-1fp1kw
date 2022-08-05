import React from 'react';
// import '../style.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Contact from './Contact';
import Services from './Services';
import Work from './Work';
import Home from './Home';

export default function App() {
  return (
    <Router>
      <header>
        <div className="logo">Creative Agency</div>
        <div className="toggle">
          <div className="navigation">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/work">Work</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <div className="social-bar">
              <ul>
                <li>
                  <a href="https://facebook.com">
                    <img src="images/facebook.png" target="_blank" alt="" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com">
                    <img src="images/twitter.png" target="_blank" alt="" />
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com">
                    <img src="images/instagram.png" target="_blank" alt="" />
                  </a>
                </li>
              </ul>
              <a href="mailto:you@email.com" classname="email-icon">
                <img src="images/email.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
    </Router>
  );
}
