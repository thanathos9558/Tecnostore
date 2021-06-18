import React from "react";
import "./Navbar.css";
import CartWidget from '../CartWidget/CartWidget';
import { ItemListContainer } from "../ItemListContainer/ItemListContainer";
export default function Navbar() {
  return (
    <div className="full-container">
      <nav className="navbar navbar-dark bg-dark flex-md-nowrap px-3 shadow">
        <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="/home">
          TecnoStore
        </a>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <a className="nav-link" href="/about">
              Nosotros
            </a>
          </li>

        </ul>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <a className="nav-link" href="/login">
              Cerrar Sesión
            </a>
          </li>
        </ul>
        <CartWidget/> 

      </nav>
      
        
    </div>
  );
}