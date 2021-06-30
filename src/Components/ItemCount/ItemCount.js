import React, { useState } from "react";
import "./ItemCount.css";
import { Button } from 'react-bootstrap';


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
      <Button variant="info" className="mb-2" onClick={handleAddItem}>+</Button>
      <label className="cantidad pl-2 pr-2 mb-2"> {state.initial} </label>
      <Button variant="danger" className="mb-2" onClick={handleRemoveItem}>-</Button>
      <br></br>
      <Button variant="info" onClick={handleAddCar}>Agregar al Carrito</Button>
    </div>
  );
}

export default ItemCount;
