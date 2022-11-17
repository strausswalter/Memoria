import { useState } from "react"; // 1-- import useState from React:

function MyButton() {
  const [count, setCount] = useState(0); // 2-- Now you can declare a state variable inside your component

  //   O "useState" retorna um array com duas posições (1- variável com uma cópia do valor atual de um elemento, 2- função para atualizar o valor). Você pode dar a eles qualquer nome, mas a convenção é chamá-los como [algo, setAlgo].
  //   Na primeira vez que o botão for exibido, a contagem será 0 porque você passou 0 para useState(). Quando você quiser mudar de estado, chame setCount() e passe o novo valor para ele. Clicar neste botão irá incrementar o contador:

  function handleClick() {
    setCount(count + 1);
  }

  return <button onClick={handleClick}>Clicked {count} times</button>;
}
