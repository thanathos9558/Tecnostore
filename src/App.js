import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/Navbar/NavBar.jsx';
import ItemCount from './Components/ItemCount/ItemCount'
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer'


function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <ItemListContainer greetings="Oscar Salamanca" />
        <ItemCount />
      </div>
    </div>

  );
}

export default App;

