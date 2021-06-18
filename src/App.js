import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/Navbar/NavBar.jsx';
import ItemCount from './Components/ItemCount/ItemCount'
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer'
import { Col, Row } from 'react-bootstrap';


function App() {
  return (
    <div className="app">
      <NavBar />
      <ItemListContainer greetings="Oscar Salamanca" />
    </div>

  );
}

export default App;

