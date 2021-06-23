import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { Col, Row } from 'react-bootstrap';
import ReactPlayer from "react-player";


const ItemDetail = (props) => (
    <Row>
        <Col>
            <h2>Desafio API</h2>
            <Card className="mt-2 mb-2" style={{ width: '50%' }}>
                <ReactPlayer url={props.data.url} width="100%" />
                <Card.Body>
                    <Card.Title>{props.data.title}</Card.Title>
                    <Card.Text className="text-justify">
                        {props.data.explanation}
                        <br></br>
                        <br></br>
                        <span className='date'>Date: {props.data.date}</span>
                    </Card.Text>
                    <Button variant="primary">More details</Button>
                </Card.Body>
            </Card>
        </Col>
    </Row>
);

export default ItemDetail;

