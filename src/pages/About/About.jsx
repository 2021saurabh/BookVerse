import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookVerse</h2>
            <p className='fs-17'>Welcome to BookVerse - a haven for book enthusiasts seeking extraordinary literary adventures! We're devoted to kindling the love for reading by connecting readers with a vast array of captivating books from diverse genres and eras. Our platform offers personalized recommendations that resonate with your unique interests, unlocking new worlds of imagination and knowledge. Embrace the joy of sharing thoughts with like-minded individuals in our thriving reading community. At [Your Web Application Name], we envision a world where books empower, unite, and inspire. Join us on this transformative journey, where every page turns into an unforgettable experience of discovery and wonder.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
