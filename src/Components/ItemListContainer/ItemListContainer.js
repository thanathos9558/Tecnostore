import React from 'react'
import './ItemListContainer.css'

export const ItemListContainer = ({ greetings }) => {
  return (
    <div className="greetings"> Welcome!, {greetings} </div>
    )
}
export default ItemListContainer;
