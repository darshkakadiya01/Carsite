import React, { useState } from 'react';
import { FaFacebookF, FaXTwitter, FaBehance, FaInstagram, FaDribbble } from 'react-icons/fa6';

function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => { 
    e.preventDefault();

    if (!email) {
      alert('Please enter your email');
      return;
    }

    console.log('Subscribed Email:', email);
    alert(`Subscribed successfully with ${email}`);
    setEmail('');
  };

  return (
    <>
      <div className="Footer-main-container">

        <div className="Footer-main-container-divone">
          <h1>LET'S TALK NOW!</h1>
          <p>
            <b>
              Join our newsletter to stay up to date on features and <br />
              releases.
            </b>
          </p>

          <form onSubmit={handleSubmit} className="footer-input-wrapper">
            <input
              type="email"
              placeholder="Enter your email address"
              className="Footer-main-container-divone-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button
              type="submit"
              className="Footer-main-container-divone-button"
            >
              <b>Subscribe</b>
            </button>
          </form>

          <p>
            By subscribing you agree to with our Privacy Policy and provide
            consent to <br />
            receive updates from our company.
          </p>
        </div>

        <div className="Footer-main-container-divtwo">
          <ul className="Footer-main-container-divtwo-ul">
            <li className="Footer-main-container-main-li"><b>Pages</b></li>
            <li className="Footer-main-container-main-li-li">Home</li>
            <li className="Footer-main-container-main-li-li">About</li>
            <li className="Footer-main-container-main-li-li">Services</li>
            <li className="Footer-main-container-main-li-li">Blogs</li>
            <li className="Footer-main-container-main-li-li">Contact</li>
          </ul>
        </div>

        <div className="Footer-main-container-divthree">
          <ul className="Footer-main-container-divthree-ul">
            <li className="Footer-main-container-main-li"><b>Utility Pages</b></li>
            <li className="Footer-main-container-main-li-li">Style Guide</li>
            <li className="Footer-main-container-main-li-li">Licenses</li>
            <li className="Footer-main-container-main-li-li">Changelog</li>
          </ul>
        </div>

        <div className="Footer-main-container-divfour">
          <ul className="Footer-main-container-divfour-ul">
            <li className="Footer-main-container-main-li"><b>Office</b></li>
            <li>cardetailingbrand.com</li>
            <li>(603) 555-0123</li>
            <li>
              4517 Washington Ave. <br />
              Manchester, Kentucky <br />
              39495
            </li>
          </ul>
        </div>

      </div>

      <hr className="footer-hr" />

      <p className="footer-bottom-text">
        © 2025 CARDETAILING BRAND. All rights reserved. Made By Darsh Kakadiya.
      </p>

      <img
        src="logo-car-detailing-brand_126903-118__1_-removebg-preview.png"
        alt="Logo"
        className="footer-logo-image"
      />

      <div className="footer-social-icons">
        <a href="https://www.facebook.com/" className='icon-btn'><FaFacebookF /></a>
        <a href="https://www.twitter.com/" className='icon-btn'><FaXTwitter /></a>
        <a href="https://www.behance.net/" className='icon-btn'><FaBehance /></a>
        <a href="https://www.instagram.com/" className='icon-btn'><FaInstagram /></a>
        <a href="https://dribbble.com/" className='icon-btn'><FaDribbble /></a>
      </div>
    </>
  );
}

export default Footer;
