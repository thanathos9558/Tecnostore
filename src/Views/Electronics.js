import React, { useState } from 'react';
import ItemCount from '../Components/ItemCount/ItemCount';
import { Card, Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Electronics() {
    const [elec, setElec] = useState([]);

    React.useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/electronics`)
            .then(response => response.json())
            .then(response => setElec(response))
    }, [])
    return (
        <Row>
            {elec.map(elec =>
                <Col xs="3" >
                    <Card className="mt-2 mb-2 pt-2 text-center" >
                        <Card.Img variant="top" src={elec.image} style={{padding:"0 30%"}} />
                        <Card.Body>
                            <Card.Title>{elec.title}</Card.Title>
                            <Card.Text className="text-justify">
                                <span >Categoria:  {elec.category} </span>
                                <p>Descripción:{elec.description}</p>
                                <span >Precio: $ {elec.price} </span>
                            </Card.Text>
                            <Button variant="dark" className=" mb-2"><Link to={`/details/${elec.id}`} className="text-white">Más detalles</Link></Button>
                            <ItemCount />
                        </Card.Body>
                    </Card>
                </Col>
            )}
        </Row>
    )
}

export default Electronics;