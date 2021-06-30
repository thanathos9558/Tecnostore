import React, { useState } from 'react'
import ItemDetail from '../ItemDetails/ItemDetail';
import { Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom';


function ItemDetailContainer() {

    const [data, setData] = useState({});
    const { id } = useParams();

    React.useEffect(() => {
        setTimeout(() => {
                fetch(`https://fakestoreapi.com/products/${id}`)
                .then((res) => res.json())
                .then((dataApi) => setData(dataApi));
        }, 0);

    }, [id]);
    return (
        <Col className="mt-4" xs="10">
            <ItemDetail prop={data} />
        </Col>

    )
}

export default ItemDetailContainer


