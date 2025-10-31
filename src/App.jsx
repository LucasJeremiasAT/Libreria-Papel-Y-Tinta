import './App.css'
import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import NotFound from './components/NotFound'
import CartProvider from './context/cartContext'
import CartContainer from './components/CartContainer/CartContainer'

function App() {


  return (
      <main>
        <CartProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/"
              element={ <ItemListContainer greeting="¡Bienvenido a Librería Papel y Tinta!" />} 
              />
              <Route path="/detalle/:idParam" 
              element={ <ItemDetailContainer/> } 
              />
              <Route path="/categoria/:categParam"
              element={ <ItemListContainer greeting="Productos por categoria" /> }
              />
              <Route path="/carrito" 
              element={ <CartContainer /> } 
              />
              <Route path="*" 
              element={ <NotFound/> } 
              />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </main>
    )
}

export default App