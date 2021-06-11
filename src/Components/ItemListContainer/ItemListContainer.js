import React from 'react'
import './ItemListContainer.css'

export const ItemListContainer = ({ Name,LastName }) => {
  Name= 'Oscar';
  LastName= 'Salamanca';  
  return (
    <div className="greetings"> Welcome!, {Name} {LastName}</div>
    )
}
export default ItemListContainer;
