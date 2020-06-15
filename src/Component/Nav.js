import React from 'react';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './Nav.scss';

// const list = ['img here', 'Transaction', 'Setting', 'Account', 'Logout'];

const Nav = () => {
  return (
    <nav className="nav">
      {/* <ul className="list-link">
        {list.map(item => (
          <li key={item}><a href="/">{item}</a></li>
        ))}
      </ul> */}
      <div className="mill">
        <a href="/" className="list">
          Img here
        </a>
      </div>
      <div className="milk">
        {' '}
        <a href="/" className="list">
          Transactions
          <span>
            <i class="fa fa-caret-down" aria-hidden="true"></i>
          </span>
        </a>
        <div className="dropdown">
        <p>View details</p>
        </div>
      </div>
      <div className="milled">
        {' '}
        <a href="/" className="list">
          Settings
          <span>
            <i class="fa fa-caret-down" aria-hidden="true"></i>
          </span>
        </a>
        <div className="dropdown">
          <p>Profile</p>
          <p>Addresses</p>
          <p>Payment</p>
        </div>
      </div>
      <div className="list pad">
        <a href="/" className="list listad">
          Account
        </a>
        <a href="/" className="list list-pad">
          Logout
        </a>
      </div>
    </nav>
  );
};
export default Nav;
