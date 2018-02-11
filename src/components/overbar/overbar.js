import React from 'react';
import Link from 'gatsby-link';

const Overbar = ({ theme }) => {
  return (
    <nav>
      <ul className={`overbar__list ${theme}`}>
        <li><Link to="/" className="overbar__list-item">Robotics</Link></li>
        <li><Link to="/" className="overbar__list-item">Cyber</Link></li>
        <li><Link to="/" className="overbar__list-item">Computer Science</Link></li>
        <li><Link to="/" className="overbar__list-item">Hosted Events</Link></li>
      </ul>
    </nav>
  )
}

export default Overbar;