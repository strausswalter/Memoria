// Exemplo do uso do props
import React from 'react'
import './Header.css';

function Header(props) { // o Header irá receber os props (propriedades) do componente pai (App.jsx)
      return (<header className='header'>
        <h1>{props.name}</h1>
        <ul className='menu'>
          <li>{props.links[0]}</li>
          <li>{props.links[1]}</li>
          <li>{props.links[2]}</li>
        </ul>
      </header>);
};

export default Header