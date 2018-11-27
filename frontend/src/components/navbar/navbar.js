import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.PureComponent {
    render() {
      return(
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/react">React Posts</Link>
            </li>
            <li>
              <Link to="/redux">Redux Posts</Link>
            </li>
            <li>
              <Link to="/udacity">Udacity Posts</Link>
            </li>
          </ul>
        </div>
      );
      
    }
}


export default Navbar;
