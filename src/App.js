import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/Navbar/NavBar.jsx';
import SideBar from './Components/Navbar/SideBar.js';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetails/ItemDetailContainer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import Electronics from './Views/Electronics';
import Home from './Views/Home';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <div className="app">
          <Row style={{ margin: "0" }}>
            <SideBar />
            <Route path="/productos">
              <ItemListContainer greetings="Oscar Salamanca" />
            </Route>
            <Route path="/category/electronics"  >
              <Col xs="10" className="p-5">
                <Electronics />
              </Col>
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/details/:id">
              <ItemDetailContainer />
            </Route>
          </Row>
        </div>
      </Switch>
    </Router>
  );
}

export default App;

