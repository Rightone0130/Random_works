import React, { useState } from 'react';
import './header.css'
import { Link } from 'react-router-dom';



const Header = () => {
    const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  
    const toggleMobileNav = () => {
      setMobileNavOpen(!isMobileNavOpen);
    };
  
    return (
      <header className="header">
        <div className="logo"><a href="/"><img width={70} src='https://res.cloudinary.com/dcntmhgwf/image/upload/v1697381606/Cool%20entertainment/IMG-20221116-WA0023_k4ep9i.jpg'/></a></div>
        <nav className={`nav ${isMobileNavOpen ? 'open' : ''}`}>
          <a href="/">Home</a>
          <Link to="/events"> <a href="/">Events</a> </Link>
          <a href="/">About</a>
          <a href="/">Services</a>
          <a href="/">Contact</a>
        </nav>
        <div className={`breadcrumb-icon ${isMobileNavOpen ? 'active' : ''}`} onClick={toggleMobileNav}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </header>
    );
  };
  
  export default Header;