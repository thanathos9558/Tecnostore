import React from 'react'
import ItemList from '../itemComponent/itemList'
import './ItemListContainer.css'
import { Row, Col } from 'react-bootstrap'

export const ItemListContainer = ({ greetings }) => {
    return (

        <Row >
            <Col xs={2} >
                <div className="full-container">
                    <div className="container-fluid sideBarFull">
                        <div className="row h-100">
                            <nav className="col bg-light sidebar ">
                                <div className="sidebar-sticky">
                                    <ul className="nav flex-column sideBarLinks">
                                        <li className="nav-item">
                                            <a className="nav-link active" href="/accesories">
                                                <span data-feather="home"></span>
                                                Accesorios
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link active" href="/phones">
                                                <span data-feather="home"></span>
                                                Teléfonos
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link active" href="/repair">
                                                <span data-feather="home"></span>
                                                Reparaciones
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link active" href="/tutorial">
                                                <span data-feather="home"></span>
                                                Tutoriales
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>

                        </div>

                    </div>

                </div>
            </Col>
            <Col xs={10} className="mt-2 mb-2">
                <h2>¡Bienvenido, {greetings}!</h2>
                <ItemList />
            </Col>
        </Row>
    )
}