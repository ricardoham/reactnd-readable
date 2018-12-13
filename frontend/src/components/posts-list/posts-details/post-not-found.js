import React from 'react';
import Unicorn from '../../../assets/339465-PABS5I-528.jpg';

const PostNotFound = () => (
  <div className="post-not-found">
    <img className="post-not-found__img" src={Unicorn} alt="unicorn" />
    <span className="post-not-found__text">Post Not Found! (╯°□°）╯︵ ┻━┻</span>

  </div>
);

export default PostNotFound;
