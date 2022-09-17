import React, { Component } from "react";
import TableClass from "./TableClass.js";
import Table2 from "./TableSimple.js";
import Table03 from "./Table03.js";


class App extends Component {
  render() {
    // const characters será usada no exemplo de Table03.js
    const characters = [
        {
            name: 'Charlie',
            job: 'Janitor',
        },
        {
            name: 'Mac',
            job: 'Bouncer',
        },
        {
            name: 'Dee',
            job: 'Aspring actress',
        },
        {
            name: 'Dennis',
            job: 'Bartender',
        },
    ]

    return (
      <>
        <div className="container">
          <TableClass />
          <Table2 />
        </div>
        <br />
        <div className="App">
          <h1>Hello, React!</h1>
        </div>
        <h2>Exemplo abaixo de dados passados via Props</h2>
        {/* Pode chamar de 'characterData' ou outro nome de sua escolha */}
        <Table03 characterData={characters} />
      </>
    );
  }
}

export default App;
