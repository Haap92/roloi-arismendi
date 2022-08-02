import NavBar from "./components/main/NavBar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import Cart from "./components/sales/Cart";
import Sale from "./components/sales/Sale";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from "./components/main/Landing";
import CartCustomProvider from "./context/CartContext";
import Footer from "./components/main/Footer";

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
      <Footer />
    </CartCustomProvider>
    </BrowserRouter>
  ); 
}

export default App;