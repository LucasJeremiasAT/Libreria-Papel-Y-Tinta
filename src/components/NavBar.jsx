import CartWidget from './CartWidget.jsx'

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>Papel y Tinta</h1>
            </div>
            <ul className="navbar-links">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Útiles</a></li>
                <li><a href="#">Accesorios</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar