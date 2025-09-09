import CarritoImg from '../assets/cart.png'

function CartWidget() {
    return (
        <div className="cart-widget">
            <img src={CarritoImg} alt="Carrito de compras" style={{ width: '30px', height: '30px' }} />
            <span className="cart-count"> 0</span>
        </div>
    )
}

export default CartWidget