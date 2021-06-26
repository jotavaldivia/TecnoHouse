import './App.css';
import NavBar from './components/navbar/Navbar.js'
import Home from './components/Home/Home.js'
import Counter from './components/itemCount/itemCount.js'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'
function App() {
  
  return (
    <div className="App">
     <NavBar logo={'./TECNO-HOGAR.png'}></NavBar>
     <Home name={"Tecno Hogar"}></Home>
     <div className="App__counter">
     {/* <Counter /> */}
     <ItemListContainer/>
     </div>
     
    </div>
  );
}

export default App;
