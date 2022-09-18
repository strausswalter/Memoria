import React, { useState, useEffect } from "react";

//Como usar o state sem usar classes (usando hooks). O React Hooks é uma nova funcionalidade do React, são funções globais novas, que permite usar o state e outros recursos do React sem usar classes. Portanto, não teremos mais: herança do objeto React.Component; construtor; super; this.state; this.setState; this.props; this.render; this.componentDidMount; this.componentDidUpdate; this.componentWillUnmount;

//Olhar o arquivo 'Counter.js' para ver a explicação do código abaixo (mais explicações de ciclo de vida e outras) na versão com classes


function Counter(props) { // React component names must start with an uppercase letter.
  
  //como usar State com hooks: usando o React Hook name "useState". React Hook names começam com a palavra "use"
  // O "useState" retorna: 1:o valor atual do estado + 2: uma função para atualizá-lo. https://reactjs.org/docs/hooks-reference.html#usestate
  
  
  //ao invés de iniciar o contador com '0', poderia iniciar com 'props.count' (para receber o valor inicial do contador via propriedade no App.js)
  const [count, setCount] = useState(props.count);


  //useEffect é o equivalente ao componentDidMount, componentDidUpdate e componentWillUnmount combinados (ciclo de vida do componente). https://reactjs.org/docs/hooks-reference.html#useeffect

  //O useEffect é executado após o componente ser montado (renderizado) na tela (equivalente ao antigo componentDidMount). E toda vez que ele for atualizado (equivalente ao antigo componentDidUpdate). E toda vez que ele for desmontado (equivalente ao antigo componentWillUnmount).

  //The default behavior for effects is to fire the effect after every completed render. That way an effect is always recreated if one of its dependencies changes. No entanto, isso pode ser alterado, passando um segundo argumento para o useEffect (array de dependências). Se o array de dependências for vazio, o efeito será executado apenas uma vez, assim que o componente for montado (equivalente ao antigo componentDidMount). Se o array de dependências conter um valor, o efeito será executado toda vez que o valor for alterado (equivalente ao antigo componentDidUpdate).

  useEffect(() => { //com callback dentro
    setCount(parseInt(localStorage.getItem("count")));

    return () => { //este retorno é o equivalente ao componentWillUnmount, pois só será executado na saída da função, ou seja, quando o componente for desmontado.
      console.log("Não tem mais contador")
    }
  }, []) //executa o useEffect apenas uma vez, quando o componente for montado/renderizado na tela (mesmo efeito do componentdidMount). Ou seja, na primeira vez que aparece na tela (direfente de componentDidUpdate que ocorre em todo update).

  //Se não colocar o array vazio, o useEffect será executado toda vez que o componente for atualizado (renderizado novamente na tela). Se colocar um array com variáveis, o useEffect será executado toda vez que uma das variáveis for atualizada.


  useEffect(() => { //com callback dentro
    console.log("useEffect: contador atualizado");
    document.title = count; //atualiza o título da página com o contador
    localStorage.setItem("count", count); //salva o contador no localStorage do navegador")
    console.log("Conteudo do localStorage: " + localStorage.getItem("count")); //imprime o contador no console do navegador
  });
    
  

  function increment() {

      //para alterar o contador usamos o setCount, uma constante do tipo 'função' que recebeu o 2o valor retornado pela função 'useState' (a função para atualizar o valor do estado).
      setCount(count + 1);
      console.log("increment");
    }


    return (
      <div>
        <h1>Contador: {count}</h1>
        <button onClick={increment}>+</button>
        {/* <button onClick={}>-</button> */}
      </div>
    );
};



export default Counter;
