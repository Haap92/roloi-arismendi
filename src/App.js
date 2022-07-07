import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from "./components/Landing";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element ={<Landing greeting={'WELCOME TO ROLOI STORE!!'}/>} />
        <Route path='/category/:categoryId' element ={<ItemListContainer/>} />
        <Route path='/detail/:id' element ={<ItemDetailContainer/>} />
        <Route path='/cart' element ={<Cart/>} />
      </Routes>
    </BrowserRouter>
  ); 
}

export default App;