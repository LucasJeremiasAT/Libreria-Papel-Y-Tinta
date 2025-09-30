import './App.css'
import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import NotFound from './components/NotFound'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <BrowserRouter>
      <main>
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
          <Route 
            path="/contacto"
            element={<Contact />}
          />
          <Route path="/carrito" 
          element={ <div><h1>Carrito de compras</h1> Proceder a comprar</div> } 
          />
          <Route path="*" 
          element={ <NotFound/> } 
          />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App