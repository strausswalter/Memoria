import React from "react";

// Função Menu, que receberá props.links do App.js
// Criar novos componentes sempre em letras maiúsculas para diferenciar dos componentes do HTML
function Menu(props) {

    const listLinks = props.links.map((link, index) =><li key={index}>{link}</li>)

    return (
      <ul className="menu">
          {listLinks}
      </ul>
    )
  }



  export default Menu;