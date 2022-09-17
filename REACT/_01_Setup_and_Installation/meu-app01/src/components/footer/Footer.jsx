//Programação Funcional ("React with Hooks") que tratam a programação como se fossem funções matemáticas, que evitam ter estados e dados imutáveis. É stateless e immutable.
import React from "react";
import './Footer.css';

function Footer(){
    const exibir = () => {
        return 'oi'
    };

    return <h1>Olá mundo Footer {exibir()}</h1>
}








export default Footer;


