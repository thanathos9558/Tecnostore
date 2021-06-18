import React from "react";
import "./Navbar.css";
import CartWidget from '../CartWidget/CartWidget';

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
      
      <div className="container-fluid sideBarFull">
        <div className="row h-100">
        <nav className="col-md-2 d-none d-md-block bg-light sidebar ">
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
  );
}