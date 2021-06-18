import React from 'react'
import Item from './item'

function ItemList() {
    return (
        <div>
            <Item items={items} />
        </div>
    )
}
const items = [
    {
        id: 1,
        title: 'Earpods ',
        description: 'Auriculares Inalambricos Bluetooth',
        price: '200.000 $',
        pictureUrl: 'https://images-na.ssl-images-amazon.com/images/I/51y9mfta36S._AC_SL1500_.jpg'
    }, {
        id: 2,
        title: 'Earpods ',
        description: 'Auriculares Inalambricos Bluetooth',
        price: '300.000 $',
        pictureUrl: 'https://images-na.ssl-images-amazon.com/images/I/51y9mfta36S._AC_SL1500_.jpg'
    }, {
        id: 3,
        title: 'Earpods ',
        description: 'Auriculares Inalambricos Bluetooth',
        price: '400.000 $',
        pictureUrl: 'https://images-na.ssl-images-amazon.com/images/I/51y9mfta36S._AC_SL1500_.jpg'
    }

];
export default ItemList