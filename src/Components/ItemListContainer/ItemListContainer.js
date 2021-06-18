import React from 'react'
import ItemList from '../Item/ItemList'
import './ItemListContainer.css'

export const ItemListContainer = ({ greetings }) => {
  return (
    <div className="greetings"> Welcome, {greetings}!
    <ItemList />
    </div>
    )
}

