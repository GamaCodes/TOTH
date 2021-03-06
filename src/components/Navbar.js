import React from 'react';
import { NavLink } from 'react-router-dom';

const routes = [
  { to: '/', label: 'Inicio' },
  { to: '/acerca', label: 'Acerca' },
  { to: '/servicios', label: 'Servicios' },
];

const Nav = () => {
  const links = routes.map(({ to, label }) => {
    return (
      <NavLink strict exact to={to} key={to}>
        {label}
      </NavLink>
    );
  });

  return <nav>{links}</nav>;
};

export default Nav;
