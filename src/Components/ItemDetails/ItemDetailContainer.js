import React, { useState } from 'react'
import ItemDetail from '../ItemDetails/ItemDetail';


function ItemDetailContainer() {

    const [data, setData] = useState({});
    React.useEffect(() => {
        setTimeout(() => {
            // console.log('USE EFFECT');
        }, 2000);
        fetch(
            'https://api.nasa.gov/planetary/apod?api_key=coA9qITMoP7cGlECEA0qW2T7nZhqoOerlCo8hoUM'
        )
            .then((res) => res.json())
            .then((dataApi) => setData(dataApi));
    }, []);
    return (
        <div>
            <div className='container'>
                <ItemDetail data={data} />
            </div>
        </div>
    )
}

export default ItemDetailContainer


