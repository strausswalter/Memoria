import React, { Component } from "react";
import TableComState from "./TableComState.js";





class App extends Component {
  state = {
    characters: [
      {
        name: "Charlie",
        job: "Janitor",
      },
      {
        name: "Mac",
        job: "Bouncer",
      },
      {
        name: "Dee",
        job: "Aspring actress",
      },
      {
        name: "Dennis",
        job: "Bartender",
      },
    ],
  };

  removeCharacter = (index) => {
    const { characters } = this.state;
  
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      }),
    });
  };





  render() {
    const { characters } = this.state

    return (
      <>
        <div className="container">
          <h1>Hello, React!</h1>
        </div>
        <h2>Exemplo abaixo de dados passados via State</h2>
        <TableComState characterData={characters} removeCharacter={this.removeCharacter} />
      </>
    );
  }
}

export default App;
