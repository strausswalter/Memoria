// Exemplo do uso do props
import React from 'react';
import Header from './components/header/Header_ex_props';
import './App.css';


function App() {
  return (
    <Header name = 'Nome da Empresa' links = {['Sobre', 'Comprar', 'Contato']}></Header>

  );
}

export default App;
