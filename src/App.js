import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/Navbar/NavBar.jsx';
import ItemCount from './Components/ItemCount/ItemCount'
import {ItemListContainer} from './Components/ItemListContainer/ItemListContainer'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greetings="Oscar Salamanca"/>
      <ItemCount />
    </div>
    
  );
}

export default App;

