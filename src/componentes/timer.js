import React, { Component } from 'react'

class Timer extends Component {
    constructor(){
        super()
        this.state = {
            time: 0
        }
        this.timer = null;
    }
    componentDidMount(){
        this.timer = setInterval(() => {
            this.setState({time: this.state.time + 1})
        }, 1000)
    }
    componentWillUnmount(){
        console.log('componentWillMount time');
        
        clearInterval(this.timer);
    }
    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps time', this.props, nextProps);        
    }
    shouldComponentUpdate(nextProps, nextState){
        //console.log('shouldComponentUpdate time', this.state, nextProps);
        return this.props.time !== nextProps.time       
    }
    componentWillUpdate(nextProps, nextState){
        console.log('componentWillUpdate time', nextProps, nextState);        
    }
    componentDidUpdate(prevProps, prevState){
        console.log('componentDidUpdate',prevProps, prevState);        
    }

    render(){
        return <div> Time: {this.state.time}</div>
    }
}

export default Timer