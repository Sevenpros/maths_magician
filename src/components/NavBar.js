import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quotes',
      text: 'Quotes',
    },
  ];
  return (
    <nav className="nav">
      <div className="logo">
        <h1>MATH MAGICIANS</h1>
      </div>
      <ul className="navBar">
        {links.map((link) => (
          <li key={link.id}>
            <Link to={link.path} activeclassname="active-link">
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
