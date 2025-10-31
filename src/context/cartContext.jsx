import { createContext, useState } from "react";
import Swal from 'sweetalert2';
import "./cartContext.css"

const cartContext = createContext("default value");

function CartProvider( { children } ){

    const [cartItems, setCartItems] = useState( [] );

    function addItem(newItem, quantityCount){

        const newCart = structuredClone(cartItems);
        const isInCart = cartItems.some(item => item.id === newItem.id)

        if( isInCart ){
            const index = cartItems.findIndex(item => item.id === newItem.id);

            newCart[index].quantity += quantityCount

            Swal.fire({
                icon: 'success',
                title: '¡Unidad Sumada!',
                text: `Se ha agregado otra unidad de ${newItem.title || 'el producto'} al carrito.`,
                toast: true, 
                position: 'top-end',
                showConfirmButton: false,
                timer: 2000,
                background: '#007bff',
                color: '#FFF',
                customClass: {
                    popup: 'borde-alerta-carrito' 
                }
            })
        }
        else{
            newItem.quantity = quantityCount;
            newCart.push(newItem);
            
            Swal.fire({
                icon: 'success',
                title: '¡Agregado!',
                text: `${newItem.title || 'El producto'} ha sido añadido al carrito.`,
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2000,
                background: '#007bff',
                color: '#FFF',
                customClass: {
                    popup: 'borde-alerta-carrito' 
                }
            })
        }

        setCartItems(newCart);
    }

    function countCartItems(){
        let count = 0;
        cartItems.forEach( item => count += item.quantity)

        return count;
    }

    function removeItem(idToRemove){
        const newCart = cartItems.filter( itemInCart => itemInCart.id !== idToRemove );
        setCartItems(newCart);
        Swal.fire({
            icon: 'info',
            title: 'Eliminado',
            text: 'El producto ha sido removido del carrito.',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            background: '#007bff',
                color: '#FFF',
                customClass: {
                    popup: 'borde-alerta-carrito' 
                }
        });
    }

    function clearCart(){
        setCartItems([])
    }

    return (
        <cartContext.Provider value={ { cartItems, addItem, countCartItems, removeItem, clearCart } } >
            { children }
        </cartContext.Provider>
    )
}

export default CartProvider;
export { cartContext };