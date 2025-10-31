import { Link } from "react-router"
import { useContext, useState } from "react"
import { cartContext } from "../../context/cartContext"
import { createOrder } from "../../data/firebase"
import FormCheckout from "./FormCheckout";
import DeleteImg from '/imgs/delete.png'
import "./CartContainer.css"


function CartContainer(){
    const [orderCreatedId, setOrderCreated] = useState(null);

    const { cartItems, removeItem, clearCart } = useContext(cartContext);

    async function handleCheckout(buyer){
        try{
            const totalAmount = cartItems.reduce((acc, item) => acc + item.precio * item.quantity, 0);
            const newOrder = {
                buyer,
                items: cartItems,
                total: parseFloat(totalAmount.toFixed(2)),
                date: new Date(),
            };
            const newOrderConfirmed = await createOrder(newOrder);
            setOrderCreated(newOrderConfirmed.id);
            clearCart();    
        } catch (error) {
            console.error("Error enviando datos", error.message)
        }
    }

    if(orderCreatedId){
        return (
            <div className="id-compra-container" >
                <h2>Gracias por tu crompra!</h2>
                <p>Tu id es: <strong>{orderCreatedId}</strong></p>
                <Link to="/" ><button className="volver-inicio-btn">Volver al inicio</button></Link>
            </div>
        )
    }

    if (cartItems.length === 0){
        return <div>
            <h2>Tu carrito de compras esta vacio</h2>
            <Link to="/" >
                <button>Ir al inicio</button>
            </Link>
        </div>
    }
    return (
        <div className="cart-container"> {/* Contenedor principal */}
            <div>
                <h2>Tu carrito de compras</h2>
                <div className="cart-items-list"> {/* Contenedor de la lista de ítems */}
                    {
                        cartItems.map( itemInCart => 
                            <div key={itemInCart.id} className="cart-item"> {/* Ítem individual */}
                                <img width="80" src={itemInCart.imagen} alt={itemInCart.nombre}></img>
                                <div className="item-details">
                                    <h4> {itemInCart.nombre} </h4>
                                    <p>Precio Unitario: ${(itemInCart.precio).toFixed(2)} </p>
                                    <p>Cantidad: {itemInCart.quantity} </p>
                                    <strong>
                                        <p>Precio Total: ${(itemInCart.quantity * itemInCart.precio).toFixed(2)} </p>
                                    </strong>
                                </div>
                                <button className="remove-button" onClick={ () => removeItem(itemInCart.id) }>
                                    <img src={DeleteImg} alt="Eliminar" />
                                </button>
                            </div>
                        )
                    }
                </div>
                <hr/>
                <div className="cart-total"> {/* Contenedor del total */}
                    <h4>Total a pagar: ${cartItems.reduce((acc, item) => acc + item.precio * item.quantity, 0).toFixed(2)} </h4>
                </div>
            </div>
            <FormCheckout handleCheckout = {handleCheckout} />
        </div>
    )
}

export default CartContainer