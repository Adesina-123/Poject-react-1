import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <hr className="move" />
        <div className="dove">
          <div className="first">
            {' '}
            <a href="/">About Us</a>
          </div>
          <div className="secod">
            {' '}
            <a href="/">FAQ</a>
          </div>
          <div className="third">
            <a href="/">Contact Us</a>
          </div>
          <div className="fourth">
            <a href="/">Terms and Conditions</a>
          </div>
          <div className="five">
            {' '}
            <a href="/">Privacy Policy</a>
          </div>

          <div className="six">
            {' '}
            <a href="/">
              <span className="copiy"> &copy;</span>
              <span className="twotwo">2020</span>{' '}
              <span className="jumpay">Jumia Pay</span>
              <span className="arre">All Right Reserve</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
