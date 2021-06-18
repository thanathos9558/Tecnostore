import React from 'react'

function Item(props) {   
    const items=props.item;
    const listItems = items.map((item) => 
    <li>{item}</li>
    ) 
    return (
        <div>
      <ul>{listItems}</ul>
        </div>
    )
}
const items = [
    {id: '1', 
    title :'titulo 1', 
    price:'200', 
    description :'Esta es la descripcion', 
    pictureUrl:'https://perro'}
]
export default Item
