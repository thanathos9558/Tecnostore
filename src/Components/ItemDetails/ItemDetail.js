import React, { useState } from "react";
import { Card, Col, Button } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';


export default function ItemDetail({ prop }) {

    const [sh, setSh] = useState(true);

    return (
        <>
            <Col xs="6" >
                <Card className="mt-2 mb-2 text-center pt-2">
                    <Card.Img variant="Top" src={prop.image} style={{ padding: "0 30%" }} />
                    <Card.Body>
                        <Card.Title>{prop.title}</Card.Title>
                        <Card.Text className="text-justify">
                            <span >Categoria:  {prop.category} </span>
                            <p>Descripción:{prop.description}</p>
                            <span >Precio: $ {prop.price} </span>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            {sh ? (
                <ItemCount className="mt-2 mb-2" />
            ) : (
                <div>
                    <h3>cantidad: </h3>
                    <Button variant="danger" >
                        Cancelar
                    </Button>
                    <Link to={"/cart"}>
                        <Button variant="info" >Finalizar Compra</Button>
                    </Link>
                </div>
            )}
        </>
    );
};