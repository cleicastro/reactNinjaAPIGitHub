import React from 'react'
import logo from '../logo.svg';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import StateTeste from './state';

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

const Conteudo = () => (
  <Router>
    <div>
      {['green'].map((square, index) => (
        <Square key={index} color={square} />
      ))}

      <p>
        Edit <code>src/App.js</code> and save to reload.
        </p>
      <a
        className="App-link"
        href="/conteudo"
      >
        Learn React
        </a>
      <p />
      
      <Switch>
          <Route exact path="/">
          </Route>
          <Route path="/Conteudo">
            <StateTeste />
          </Route>          
        </Switch>

    </div>
  </Router>

)

export { Conteudo, Square }