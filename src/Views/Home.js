import React, { Component } from 'react'
import { Row, Card, Col } from 'react-bootstrap';

export default class Home extends Component {
    render() {
        return (
            <Row className=" p-5 text-center">
                <Col style={{padding:"20% 0 0 0"}}><h2 className="text-uppercase">Somos TecnoStore</h2>
                    <p className="text-primary">¡Los mejores productos de tecnología al mejor precio!</p></Col>
                <Col>
                    <Card.Img src={"https://egecol.com/wp-content/uploads/2021/02/imagen-personaje-descripcion.jpg"} />
                </Col>
            </Row>
        )
    }
}


