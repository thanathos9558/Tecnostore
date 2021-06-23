import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { Col, Row } from 'react-bootstrap';
import ReactPlayer from "react-player";


const ItemDetail = (props) => (

    <Row>
        <Col>
        <h2>Desafio API</h2>
            <Card className="mt-2 mb-2" style={{ width: '27rem' }}>
                <ReactPlayer url={props.data.url} width="27rem"/>
                <Card.Body>
                    <Card.Title>{props.data.title}</Card.Title>
                    <Card.Text>
                        {props.data.explanation}
                        <br></br>
                        <span className='date'>Date: {props.data.date}</span>
                    </Card.Text>
                    <Button variant="primary">more details</Button>
                </Card.Body>
            </Card>
        </Col>
    </Row>
);

export default ItemDetail;

