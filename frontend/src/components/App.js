import React from 'react';
import Routes from '../routes/routes';
import Navbar from './template/navbar/navbar';
import Header from './template/header/header';
import Footer from './template/footer/footer';
// import PostsCategoriesContainer from '../components/posts-categories/posts-categories-container';
// import PostEditContainer from '../components/posts-list/post-edit/post-edit-container';

const App = () => (
  <div>
    <Header />
    <Navbar />
    <Routes />
    <Footer />
  </div>
);

export default App;
