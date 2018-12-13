import React from 'react';
import moment from 'moment';

const Footer = () => (
  <div>
    <ul className="footer">
      <div className="footer-list">
        <li className="footer-item footer-item--date">{moment().format('ddd, MMM, YYYY')}</li>
        <li className="footer-item footer-item--author">Author: Ricardo T. Manoel Junior</li>
        <li className="footer-item footer-item--github"><a href="https://github.com/ricardoham">GitHub</a></li>
      </div>
    </ul>
  </div>
);

export default Footer;
