import React from 'react';
import Routes from '../routes/routes';
import Navbar from './template/navbar/navbar';
import Footer from './template/footer/footer';

const App = () => (
  <div>
    <Navbar />
    <div className="container">
      <Routes />
    </div>
    <Footer />
  </div>

);

export default App;
