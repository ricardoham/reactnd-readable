import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import Routes from '../routes/routes';
import Navbar from './template/navbar/navbar';
import Footer from './template/footer/footer';

library.add(faCheckSquare);

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
