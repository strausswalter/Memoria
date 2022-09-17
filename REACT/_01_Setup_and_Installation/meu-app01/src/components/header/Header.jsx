import React from "react";
import "./Header.css";
import Menu from "../Menu";



// A Função Header recebe props do componente pai (App.js) e passa para o filho 'Menu' (Menu.js)
function Header(props) {
  return (
    <header className="header">  
      <h1>{props.name}</h1>
       <Menu links={props.links} /> {/* passando os links (do App.js) para o componente/Função 'Menu' */}
    </header>
  );
}



export default Header;
