import React from 'react';
import Nav from './Component/Nav';
import NavBar from './Component/NavBar';
import Footer from './Component/Footer';
import Card from './Component/Card';
import './Cout.scss';

const Cout = (props) => {
  return (
    <div>
      <Nav />
      <NavBar />
      <Card />
      <Footer />
    </div>
  );
};

export default Cout;
