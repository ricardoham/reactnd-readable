import React from 'react';
import Unicorn from '../../../assets/339465-PABS5I-528.jpg';

const PostNotFound = () => (
  <div className="post-not-found">
    <span className="post-not-found__text">Post Not Found! (╯°□°）╯︵ ┻━┻</span>
    <img className="post-not-found__img" src={Unicorn} alt="unicorn" />
  </div>
);

export default PostNotFound;
