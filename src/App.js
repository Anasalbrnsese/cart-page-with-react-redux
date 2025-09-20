import './App.css';
import Navbar from './Componensts/Navbar';
import { Routes, Route } from 'react-router-dom';
import Products from './Componensts/Products';
import Cart from './Componensts/Cart';

function App() {
  return (
    <div className="App">
      <Navbar />



      <Routes>
        <Route path='/home' ></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
