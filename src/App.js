import React, { useState } from 'react';
import Product from './Product';
import Button from './Button';
// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

const App = () => {
  const [response, setResponse] = useState(null);
  async function handleClick(event) {
    const url = 'https://ranekapi.origamid.dev/json/api/produto/';
    try {
      const responsee = await fetch(url + event.target.innerText);
      const respnseJson = await responsee.json();
      setResponse(respnseJson);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <>
      <button onClick={handleClick}>tablet</button>
      <button onClick={handleClick} style={{ margin: '5px' }}>
        smartphone
      </button>
      {response && <Product dados={response} />}
    </>
  );
};

export default App;
