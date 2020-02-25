import React from 'react';
import './App.css';
import './include/bootstrap';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Square = ({ color, children }) => (
  <div style={{
    backgroundColor: color,

  }}>
    <img src={logo} className="App-logo" alt="logo" />
    {children}
  </div>
)
Square.defaultProps = {
  color: 'red'
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div>
            {['green'].map((square, index) => (
              <Square key={index} color={square} />
            ))}

            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a className="App-link" href="/">
              Learn React
            </a>
            <Link to="conteudo" className="App-link"> Rota</Link>
            <Switch>
              <Route exact path="">
              </Route>
              <Route path="/componentes/state">
              </Route>
            </Switch>

          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
