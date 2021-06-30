import React from 'react'
import { Col, Row, Card, Button } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';

export default Item
function Item(props) {
    const card = (
        <Row>
            {props.items.map((item) =>
                <Col key={item.id} xs="3" >
                    <Card className="mt-2 mb-2"  >
                        <Card.Img variant="top" src={item.pictureUrl} style={{ height:"300px", padding:"0 5%"}} />
                        <Card.Body className="text-center">
                            <Card.Title className="text-uppercase">{item.title}</Card.Title>
                            <Card.Text>
                                {item.description}
                                <br></br>
                                {item.price}
                            </Card.Text>
                            <Button className="mb-2" variant="primary">Detalles</Button>
                            <ItemCount />
                        </Card.Body>
                    </Card>
                </Col>
            )}
        </Row>

    );
    return (
        <div>
            {card}
        </div>

    );
}
