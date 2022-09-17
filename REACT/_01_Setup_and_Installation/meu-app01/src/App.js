import React from 'react';
import Header from './components/header/Header';
import './App.css';


function App() {
  return (
    <Header name = 'Nome da Empresa' links = {['Sobre', 'Comprar', 'Contato']}></Header>

  );
}

export default App;
