import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    // Inicializando o estado do componente.
    // Só no contrutor é possível alterar o estado do componente. Em outros lugares, deve-se usar o setState
    this.state = { count: this.props.count }; 
  }

  increment = () => {
    //Não é possível alterar o state diretamente, por isso é necessário usar o setState
    //Não é correto usar o this.state.count++ pois ao pressionar rapido o botão, pode dar erro (o React pode demorar a entender que o estado foi alterado)
    // this.setState({ count: this.state.count + 1 }); 

    //Forma correta de alterar o estado
    //Desta forma cria uma fila de alterações, e o React entende que o estado foi alterado. Garanto que o estado será alterado corretamente
    this.setState((state) => { return { count: state.count + 1 } });
  };

  decrement = () => {
    // this.setState({ count: this.state.count - 1 });
    this.setState((state) => { return { count: state.count - 1 } });
  };

  render() {
    return (
      <div>
        <h1>Contador</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

export default Counter;

