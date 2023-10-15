import React from 'react';
import { Link } from 'react-router-dom'; // You can use this for routing
import './landingPage.css'; // Import your CSS file

function LandingPage() {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>Welcome to Cool Entertainment</h1>
      </header>
      <main>
        <section className="hero">
          <h2>Experience Unforgettable Events with Us</h2>
          <p>Your one-stop solution for amazing events!</p>
          {/* <Link to="/events" className="btn-primary">Explore Events</Link> */}
        </section>
        <section className="about">
          <h2>About Us</h2>
          <p>
            We are passionate about creating memorable events. Our team is dedicated to making your vision come to life.
          </p>
        </section>
      </main>
   
    </div>
  );
}

export default LandingPage;
