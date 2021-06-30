import React from "react";
import "./Navbar.css";
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <div className="full-container">
      <nav className="navbar navbar-dark bg-dark flex-md-nowrap px-3 shadow pl-5">
        <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="/">
          TecnoStore
        </a>
        <Link className='Link ' to='/productos'>
          Productos
        </Link>
        <Link className='Link nav-link disabled' to='/logout'>
          Cerrar Sesión
        </Link>
        <CartWidget />
      </nav>
    </div>
  );
}