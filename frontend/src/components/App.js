import React from 'react';
import Routes from '../routes/routes';
import Navbar from './template/navbar/navbar';
import Header from './template/header/header';
import Footer from './template/footer/footer';

const App = () => (
  <div className="container">
    <Header />
    <Navbar />
    <Routes />
    <Footer />
  </div>
);

export default App;
