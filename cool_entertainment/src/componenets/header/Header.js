import React, { useState } from 'react';
import './header.css'


// const Header = () => {
//     return(
//         <>
       
//        <header className="header">
//         <h1>Welcome to Cool Entertainment</h1>
//       </header>
//         </>
//     )
// }

// export default Header



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
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
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