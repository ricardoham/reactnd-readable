import React from 'react';
import moment from 'moment';

const Footer = () => (
  <div className="footer-container">
    <ul className="footer">
      <li className="footer-item footer-item--date">{moment().format('ddd, MMM, YYYY')}</li>
      <li className="footer-item footer-item--author">Author: Ricardo T. Manoel Junior</li>
      <li className="footer-item footer-item--github"><a href="https://github.com/ricardoham">GitHub</a></li>
    </ul>
  </div>
);

export default Footer;
