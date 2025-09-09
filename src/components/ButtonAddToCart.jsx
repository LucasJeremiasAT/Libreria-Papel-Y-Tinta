import { useState } from "react";

function ButtonAddToCart(){
    const [statusInCart, setStatusInCart ] = useState("Aún no agregaste al carrito")

    function handleClick(){
        alert("Agregado al carrito");
        setStatusInCart("Agregaste una unidad al carrito");
    }

    return(
        <div>
            <button onClick= {handleClick} >Agregar al carrito</button>
            <div>
                <small> {statusInCart} </small>
            </div>
        </div>
    )
}

export default ButtonAddToCart;