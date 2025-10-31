import './NavBar.css'
import CartWidget from '../CartWidget'
import { Link } from "react-router"

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                    <h1>Papel y Tinta</h1>
                </Link>
            </div>
            <ul className="navbar-links">
                <Link to="/categoria/utiles"> 
                    <li>Útiles</li>
                </Link>
                <Link to="/categoria/accesorios">
                    <li>Accesorios</li>
                </Link>
                <Link to="/categoria/papelera">
                    <li>Papelera</li>
                </Link>
            </ul>
            <div>
                <Link to="/carrito">
                    <CartWidget />
                </Link> 
            </div>
        </nav>
    )
}

export default NavBar