import './App.css';
import NavBar from './components/navbar/Navbar.js'
import Home from './components/Home/Home.js'
function App() {
  return (
    <div className="App">
     <NavBar></NavBar>
     <Home name={"Tecno Hogar"}></Home>
    </div>
  );
}

export default App;
