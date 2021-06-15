import React, { Component } from 'react'
import "./ItemCount.css";

export const ItemCount = ({ stock,initial,onAdd }) =>  {
        return (
            <div>
                <h1>{stock}</h1>
                <h1>{initial}</h1>
                <h1>{onAdd}</h1>
            </div>
        )    
}
export default ItemCount;