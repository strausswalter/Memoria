import React, { Component } from "react";
import TableComState from "./TableComState.js";
import Form from './Form'





class App extends Component {
  state = {
    characters: [],
  };

  removeCharacter = (index) => {
    const { characters } = this.state;
  
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      }),
    });
  };

  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] })
  }



  render() {
    const { characters } = this.state

    return (
      <>
        <div className="container">
          <h1>Hello, React!</h1>
        </div>
        <h2>Exemplo</h2>
        <TableComState characterData={characters} removeCharacter={this.removeCharacter} />
        <Form handleSubmit={this.handleSubmit} />

      </>
    );
  }
}

export default App;
