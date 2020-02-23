import React from 'react'
import logo from '../logo.svg';
import {LikeButton, DesLikeButton} from './like-button';


const Square = ({color}) => (
  <div style={{
    backgroundColor: color,
    
  }}>
    <img src={logo} className="App-logo"  alt="logo"/>
  </div>
)
Square.defaultProps = {
  color: 'red'
}

const Conteudo = () => (
    <div>
        {['green'].map((square, index) => (
          <Square key={index} color={square}/>
        ))}       
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p />
        <LikeButton></LikeButton>
        <DesLikeButton></DesLikeButton>
    </div>
)

export default Conteudo