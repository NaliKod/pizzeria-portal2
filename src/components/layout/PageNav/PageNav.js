import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const PageNav = () => (
  <div>
    <Link to='/' >
    </Link>
    <nav>
      <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Dashboard</NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login</NavLink>
    </nav>
  </div>
);

export default PageNav;
