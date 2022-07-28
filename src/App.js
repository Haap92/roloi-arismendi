import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import Sale from "./components/Sale";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from "./components/Landing";
import CartCustomProvider from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
    <CartCustomProvider>
      <NavBar />
        <Routes>
          <Route path='/' element ={<Landing greeting={'WELCOME TO ROLOI STORE!!'}/>} />
          <Route path='/products' element ={<ItemListContainer/>} />
          <Route path='/category/:categoryId' element ={<ItemListContainer/>} />
          <Route path='/detail/:id' element ={<ItemDetailContainer/>} />
          <Route path='/cart' element ={<Cart/>} />
          <Route path="/sales" element={<Sale/>} />
        </Routes>
      </CartCustomProvider>
    </BrowserRouter>
  ); 
}

export default App;