import React from 'react'
import { Card , Col } from 'react-bootstrap';


const ItemDetail = ({prop}) => (
        
    <Col xs="6" >
        <Card className="mt-2 mb-2 text-center pt-2">
            <Card.Img variant="Top" src={prop.image} style={{padding:"0 30%" }} />
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
);

export default ItemDetail;

