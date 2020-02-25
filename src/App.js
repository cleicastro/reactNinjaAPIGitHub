import React from 'react';
import './include/bootstrap';
import Search from './components/search';
import UserInfo from './components/user-info';
import Action from './components/action';
import Repositorio from './components/repositorio';

function App() {
  return (
    <div className="container">
      <Search />
      <UserInfo />
      <Action />
      <Repositorio 
        className="repos" 
        title="Repositórios: " 
        repos={[{
          name: 'Nome do repositório',
          link: '#'
        }]}
      />

      <Repositorio 
        className="starred" 
        title="Favoritos: "
        repos={[{
          name: 'Nome do repositório',
          link: '#'
        }]}
      />
      
    </div>
  );
}

export default App;
