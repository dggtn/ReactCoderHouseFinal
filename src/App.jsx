import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import Cart from './components/Cart'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './tailwind.css'

function App() {

  return (
      <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route exact path="/" element={<ItemListContainer/>}/>
            <Route exact path="/category/:id" element={<ItemListContainer/>}/>
            <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route exact path="/cart" element={<Cart/>}></Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App
