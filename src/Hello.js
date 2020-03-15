import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { createStore } from 'redux';


class Hello extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.handleTooltips = this.handleTooltips.bind(this);
        this.counter = this.counter.bind(this);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);

        this.state = {
            tooltip: true,
            valorRedux: 0
        }
    }

    handleTooltips = () => {
        if (this.state.tooltip) {
            this.myRef.current.className = 'tooltips'
        } else {
            this.myRef.current.className = 'd-none'
        }
        this.setState({ tooltip: !this.state.tooltip });
    }

    counter = (state = 0, action) => {
        switch (action.type) {
            case 'INCREMENT': return state + 1
            case 'DECREMENT': return state - 1
            default: return state
        }
    }

    increment = ((store) => {
        store.dispatch({ type: 'INCREMENT' });
    });

    decrement = ((store) => {
        store.dispatch({ type: 'DECREMENT' });
    });

    render() {
        console.assert(this.counter(0, { type: 'INCREMENT' }) === 1);
        console.assert(this.counter(2, { type: 'DECREMENT' }) === 1);
        const store = createStore(this.counter);

        store.subscribe(() => {
            console.log(store.getState());
            //this.setState({valorRedux: store.getState()})
        });

        return (
            <div className="row">
                <h1>{this.state.valorRedux}</h1>

                <div className="col-12">
                    <button type="button" className="btn btn-dark p-4 mr-2" onClick={() => this.increment(store)}>+</button>
                    <button type="button" className="btn btn-dark p-4" onClick={() => this.decrement(store)}>-</button>
                </div>

                <div className="col-12">
                    <a className="btn btn-info" onClick={this.handleTooltips}>
                        <div ref={this.myRef} className="d-none">
                            <span className="bottom d-flex justify-content-around">
                                <button className="btn btn-link btn-sm" type="button">Sim</button>
                                <button className="btn btn-link btn-sm" type="button">Não</button>
                            </span>
                        </div>
                    Click-me
                    </a>
                </div>

                <div className="col-12">
                    <Link to="/">
                        <button type="button" className="btn btn-info">Home</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Hello;