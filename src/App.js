import React from 'react';
import './include/bootstrap';
import {FontAwesome, } from 'react-fontawesome';
import Avg from '@fortawesome/fontawesome-svg-core';
import Free from '@fortawesome/fontawesome-free'

function App() {
  return (
    <div className="App">
      <div className="searchs input-group">        
        <input type="search" className="form-control col-4" placeholder="Digite o nome do usuário" />
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1"><FontAwesome></FontAwesome></span>
        </div>
      </div>
      <img src='https://avatars0.githubusercontent.com/u/50046577?v=4' />
      <h1>
        <a href='https://github.com/cleicastro'>Clei Castro</a>
      </h1>
      <ul className="repos-info">
        <li>- Repositórios: 122</li>
        <li>- Seguidores: 2</li>
        <li>- Seguindo: 5</li>
      </ul>
      <div className="actions">
        <button className="btn btn-primary col-2">Ver Repositórios</button>
        <button className="btn btn-info col-2 ml-4">Ver favoritos</button>
      </div>

      <div className="repos">
        <h2>Repositórios: </h2>
        <ul>
          <li><a href="#">Nome do repositório</a></li>
        </ul>
      </div>
      <div className="starred">
        <h2>Favoritos: </h2>
        <ul>
          <li><a href="#">Nome do repositório</a></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
