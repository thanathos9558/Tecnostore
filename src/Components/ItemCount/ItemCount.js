import React, { useState } from 'react';
import './ItemCount.css'

export default class ItemCount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initial: 1,
      stock: 5,
      onAdd: 0
    };
  }
  render() {
    return (
      <div className="col mb-3">
        <p className="cantidad">  {this.state.initial} </p>
        <button onClick={() => this.setState({ initial: this.state.initial + 1 })}>
          +
        </button>
        <button onClick={() => this.setState({ initial: this.state.initial - 1 })}>
          -
        </button>
        <button onClick={(("Has agregado " + this.state.onAdd + " al carrito"))}>
          Agregar al Carrito
        </button>
      </div>
    );
  }
}
// Otra forma de Hacerlo

// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import './ItemCount.css'

// const ItemCount = ({ value = 0 }) => {
//   const [counter, setCounter] = useState(value);
//   const handleAdd = () => {
//     setCounter(counter + 1);
//   }
//   const handleSubtract = () => setCounter(counter - 1);
//   const handleReset = () => setCounter(value);
//   return (
//     <div className="plot">
//       <h1>ItemCount</h1>
//       <h2> {counter} </h2>
//       <button onClick={handleAdd}>+1</button>
//       <button onClick={handleSubtract}>-1</button>
//       <button onClick={handleReset}>Limpiar</button>
//     </div>
//   )
// }

// ItemCount.propTypes = {
//   value: PropTypes.number
// }

// export default ItemCount;
