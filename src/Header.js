import React from 'react';

const Header = ({ name, surname, city, hobby, group }) => (
  <header>
    <h1>{name} {surname}</h1>
    <p>City: {city}</p>
    <p>Hobby: {hobby}</p>
  </header>
);

export default Header;
