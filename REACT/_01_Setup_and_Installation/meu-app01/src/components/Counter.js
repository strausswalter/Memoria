import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    // Inicializando o estado do componente (com 'this.state').
    // Só no contrutor é possível alterar o estado do componente. Em outros lugares, deve-se usar o setState
    
    //Configurando o estado inicial do componente via propriedade no App.js:
    // this.state = { count: this.props.count };

    //Configuração do estado inicial no uso do 'localStorage'. O componente será atualizado via localStorage na componentDidMount. ):
    this.state = { count: 0 };

    //O 'this' dentro das funções increment e decrement não é o mesmo 'this' do construtor. Por isso, é necessário fazer o bind
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment = () => {
    //Não é possível alterar o state diretamente, por isso é necessário usar o setState
    //Não é correto usar o this.state.count++ pois ao pressionar rapido o botão, pode dar erro (o React pode demorar a entender que o estado foi alterado)
    // this.setState({ count: this.state.count + 1 }); 

    //Forma correta de alterar o estado
    //Desta forma cria uma fila de alterações, e o React entende que o estado foi alterado. Garanto que o estado será alterado corretamente

    //Sem callback:
    // this.setState((state) => { return { count: state.count + 1 } });

    //Com callback, para ajudar durante desenvolvimento. O callback é chamado após o setState ser executado
    this.setState((state) => { return { count: state.count + 1 } }, () => {
        console.log(this.state);
        // caso queira quardar na memória o estado atual do contador. Assim pode atualizar a página e continuar de onde parou
        localStorage.setItem("state", JSON.stringify(this.state));   
    });
  };

  decrement = () => {
    // this.setState({ count: this.state.count - 1 });
    //Com a opção de callback, para ajudar durante desenvolvimento
    this.setState((state) => { return { count: state.count - 1 } }, () => { 
        console.log(this.state);
        // caso queira guardar na memória o estado atual do contador
        localStorage.setItem("state", JSON.stringify(this.state));   
    });
  };

  //O estado é atualizado apenas após o componente ser montado (renderizado) na tela. Ou seja, na primeira vez que aparece na tela (direfente de componentDidUpdate que ocorre em todo update).:
componentDidMount() {
    this.setState(JSON.parse(localStorage.getItem("state")));
}
 //outra opção:
//  componentDidUpdate() {
//     localStorage.setItem("state", JSON.stringify(this.state));
// }



// Modelo de uso do método 'shouldComponentUpdate()' , caso queira que o render não funcione:
//     shouldComponentUpdate() {
//         return false;
//       }






  render() {
    return (
      <div>
        <h1>Contador: {this.state.count}</h1>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}


//Desativado para usar o 'CounterComHooks.js' no lugar:
// export default Counter;

