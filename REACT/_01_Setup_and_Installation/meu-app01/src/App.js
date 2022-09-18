import React , { useState, useEffect } from "react";
import Header from "./components/header/Header";
import "./App.css";

//Desativado para usar o 'CounterComHooks.js' no lugar:
// import Counter from "./components/Counter";

import Counter from "./components/CounterComHooks";




function App() {

  //Os codigos abaixo são para o exemplo do "CounterComHooks.js". Tem que ser comentado se chavear para uso do antigo "Counter.js":

  const [show, setShow] = React.useState(true);



  let time = 0;
 //componentWillUnmount
  //executa o useEffect apenas uma vez, quando o componente for montado/renderizado na tela (mesmo efeito do componentdidMount). Ou seja, na primeira vez que aparece na tela (direfente de componentDidUpdate que ocorre em todo update).
  useEffect(() => {
    let timer = setInterval(() => {
      time++;
      console.log(time);
      if (time > 5) {
        clearInterval(timer);
        setShow(false);
      }
    }, 1000); // Incrementa o contador a cada 1 segundo (1000 milisegundos)
  }, []);







  //fim dos codigos do exemplo do "CounterComHooks.js".


  //if (show) --- código para o exemplo do "CounterComHooks.js". Tem que ser editado/retirado para uso do antigo "Counter.js":
  if (show){
  return (
    <>
      <Header
        name="Nome da Empresa"
        links={["Sobre", "Comprar", "Contato"]}
      ></Header>
      <Counter count={3}></Counter> {/* Passando o valor inicial do contador. Transformando uma propriedade (count) em um estado(Counter.js)(*01) */}
    </>
  );}else{
    return (
      <>
        <Header
          name="Nome da Empresa"
          links={["Sobre", "Comprar", "Contato"]}
        ></Header>
        <h1>Sem contador</h1>
        <h2>Antes a tela renderizava o component CounterComHooks.js. Mas agora este sofreu 'Unmount', executando o conteudo do seu 'useEffect - return...'. Conseguentemente, esta seguencia de códigos equivale ao antigo método "componentWillUnmount".</h2>
      </>
    );
  }
}

export default App;