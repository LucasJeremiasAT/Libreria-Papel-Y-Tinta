import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a Librería Papel y Tinta!" />
    </>
  )
}

export default App