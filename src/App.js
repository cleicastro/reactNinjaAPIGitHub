import React from 'react';
import './App.css';
import MenuLateral from './componentes/menu-lateral';
import './include/bootstrap';
import Conteudo from './componentes/conteudo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MenuLateral name={"Clei"} />
        <Conteudo></Conteudo>
      </header>
    </div>
  );
}

export default App;
