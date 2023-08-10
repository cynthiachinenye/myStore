import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Components/navbar'
import './Components/navbar.css';
import Shop from './Pages/Shop/Shop';
import Cart from './Pages/Cart/Cart';
import ShopContext from './Context/ShopContext';
function App() {
  return (
    <div className="App">
      <ShopContext>
      <Router>
       <Navbar/>
        <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/cart" element ={<Cart/>}/>
        </Routes>
      </Router>
      </ShopContext>
      
    </div>
  );
}

export default App;
