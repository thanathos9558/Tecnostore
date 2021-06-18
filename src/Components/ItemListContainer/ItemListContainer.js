import React from 'react'
import ItemList from '../itemComponent/itemList'
import './ItemListContainer.css'

export const ItemListContainer = ({ greetings }) => {
    return ( <
        div > Welcome, { greetings }!
        <
        ItemList / >
        <
        /div>
    )
}