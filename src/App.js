import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/Navbar/NavBar.jsx';
import ItemCount from './Components/ItemCount/ItemCount'
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer'
import { Col,Row } from 'react-bootstrap';


function App() {
  return (
    <div className="app">
      <NavBar />
        <Row className="containerfull">
        <ItemListContainer greetings="Oscar Salamanca" />
        <ItemCount />
        </Row>
      
    </div>

  );
}

export default App;

