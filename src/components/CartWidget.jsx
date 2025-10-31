import { useContext } from "react"
import { cartContext } from "../context/cartContext"
import CarritoImg from '/imgs/cart.png'

function CartWidget() {
    const { countCartItems } = useContext(cartContext)
    return (
        <div className="cart-widget">
            <img src={CarritoImg} alt="Carrito de compras" style={{ width: '30px', height: '30px' }} />
            <span className="cart-count"> { countCartItems() } </span>
        </div>
    )
}

export default CartWidget