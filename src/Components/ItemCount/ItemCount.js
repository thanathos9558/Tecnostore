import React, { useState } from "react";
import "./ItemCount.css";

function ItemCount(props) {
  const [state, setState] = useState({
    initial: 0,
    stock: 5,
    onAdd: 0
  });

  const handleAddItem = (e) => {
    e.preventDefault();
    const { initial, stock, onAdd } = state;
    const newInitial = initial + 1;
    if (stock >= newInitial) {
      setState((prevState) => ({
        ...prevState,
        initial: newInitial,
        onAdd: onAdd + 1
      }));
    }
  };

  const handleRemoveItem = (e) => {
    e.preventDefault();
    const { initial, onAdd } = state;
    const newInitial = initial - 1;
    if (newInitial >= 0) {
      setState((prevState) => ({
        ...prevState,
        initial: newInitial,
        onAdd: onAdd - 1
      }));
    }
  };

  const handleAddCar = (e) => {
    e.preventDefault();
    const { stock, onAdd } = state;
    console.log(`Agregado ${onAdd} al carrito`);
    setState(() => ({
      stock: stock - onAdd,
      initial: 0,
      onAdd: 0
    }));
  };

  return (
    <div className="plot">
      <p className="cantidad"> {state.initial} </p>
      <button onClick={handleAddItem}>+</button>
      <button onClick={handleRemoveItem}>-</button>
      <button onClick={handleAddCar}>Agregar al Carrito</button>
    </div>
  );
}

export default ItemCount;
