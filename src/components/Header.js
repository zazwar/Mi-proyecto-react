import React from 'react';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href='/'><h4>Iniciar sesión</h4></a>
          </li>
          <li>
            <a href='/Private'><h4>Productos</h4></a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;