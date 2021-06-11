import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer />
    </div>
    
  );
}

export default App;

