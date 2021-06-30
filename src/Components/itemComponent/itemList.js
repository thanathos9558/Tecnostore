import React, { useState } from 'react'
import Item from './item'

function ItemList() {

    const [data, setData] = useState([]);
    React.useEffect(() => {
        setTimeout(() => {
            const data1 = [
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
                }, 
                {
                    id: 3,
                    title: 'Earpods ',
                    description: 'Auriculares Inalambricos Bluetooth',
                    price: '400.000 $',
                    pictureUrl: 'https://images-na.ssl-images-amazon.com/images/I/51y9mfta36S._AC_SL1500_.jpg'
                },
                {
                    id: 4,
                    title: 'Airpods ',
                    description: 'Auriculares Inalambricos Bluetooth',
                    price: '400.000 $',
                    pictureUrl: 'https://images-na.ssl-images-amazon.com/images/I/71K8hu-yewL.__AC_SY445_SX342_QL70_FMwebp_.jpg'
                }
            ];
            var promise = new Promise((resolve, reject) => {
                if (data1.length !== 0) {
                    resolve("Se cumple la promesa");
                }
                else {
                    reject(Error("El arreglo esta Vacio"));
                }
            });
            let obj = data1;
            promise.then(result => {
                obj['success'] = result
            }, function (error) {
                obj['error'] = error
            });
            console.log(obj)
            setData(obj);
        }, 2000);
    }, []);

    return (
        <Item items={data} />
    )

}
export default ItemList

