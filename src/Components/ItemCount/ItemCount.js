import React, { useState } from 'react';

export default class ItemCount extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        initial: 0,
        stock: 5,
        onAdd: 0
    };
}
render() {
    return (
        <div>
          <p>Has agregado {this.state.initial} elementos</p>
          
          <button onClick={() => this.setState({ initial: this.state.initial +1})}>
            +
          </button>
          <button onClick={() => this.setState({ initial: this.state.initial - 1})}>
            -
          </button>
          <button onClick={( alert("Has agregado " + this.state.initial + " al carrito"))}>
            Agregar al Carrito
          </button>
        </div>
      );
    }
  }