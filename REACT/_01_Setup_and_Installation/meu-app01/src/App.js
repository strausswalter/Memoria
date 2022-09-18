import React from "react";
import Header from "./components/header/Header";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <Header
        name="Nome da Empresa"
        links={["Sobre", "Comprar", "Contato"]}
      ></Header>
      <Counter count={5}></Counter> {/* Passando o valor inicial do contador */}
    </>
  );
}

export default App;
