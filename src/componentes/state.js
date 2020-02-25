import React, { Component } from 'react'
import Button from './button';
import {Square} from './conteudo';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import Timer from './timer';

class StateTeste extends Component {    
    constructor(){
        console.log('constructor app');        
        super()
        this.state = {
            like: false,
            deslike: true,
            color: null,
            showTimer: true,
            time: 0
        }
    }

    componentWillMount(){
        console.log('componentWillMount app');        
    }
    componentDidMount(){
        console.log('componentDidMount');        
    }

    render() {
        console.log('render app');
        return (
            <div>
               <Button name={"btn btn-success"} handleClick={() => this.setState({
                   like: !this.state.like,
                   deslike: !this.state.deslike,
                   color: 'green'
               })} disabled={this.state.like}><FontAwesomeIcon icon={faThumbsUp} /> Verde</Button>
               <Button name="btn btn-danger" handleClick={() =>this.setState({
                  like: !this.state.like,
                  deslike: !this.state.deslike,
                  color:'red'
               })} disabled={this.state.deslike}><FontAwesomeIcon icon={faThumbsDown} /> Vermelho</Button>
                
               <Square color={this.state.color}> 
                    {this.state.showTimer && <Timer time={this.state.time}></Timer>}  
                    <Button handleClick={() => this.setState({ time: this.state.time + 10 }) } >
                        change props
                    </Button>
                </Square>
            </div>
        )
    }
}
export default StateTeste