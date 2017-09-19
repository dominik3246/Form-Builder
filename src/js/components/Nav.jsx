import React from 'react';
import { Link } from 'react-router';

const Nav = () => (
  <nav className="nav">
    <ul className="nav__list">
      <li className="nav__list-item">
        <Link className="Nav__link" to="/create">
          Create
        </Link>
      </li>
      <li className="nav__list-item">
        <Link className="nav__link" to="/preview">
          Preview
        </Link>
      </li>
      <li className="nav__list-item">
        <Link className="nav__link" to="/export">
          Export
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
