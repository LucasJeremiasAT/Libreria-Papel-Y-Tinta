import { useParams } from 'react-router';
import ItemColorPick from '../ItemColorPick';
import "./ItemDetailContainer.css"
import { getProductsById } from '../../data/firebase';
import { ProductNotFound } from '../NotFound';
import { useEffect, useState, useContext } from 'react';
import { cartContext } from '../../context/cartContext';
import ItemCount from './ItemCount';

function ItemDetailContainer(){
    const { idParam } = useParams();
    const [product, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const {addItem} = useContext(cartContext);

    useEffect( () => {
        console.log("id recibido:", idParam);
        setLoading(true);
        setError(false);
        getProductsById(idParam)
            .then( response => {
                console.log("Producto recibido:", response);
                setProducts(response)
                setLoading(false);
            })
            .catch( error => {
                console.error("Error:", error);
                setError(true);
                setLoading(false);
            })
    }, [idParam])

    function handleAddToCart(count){
    addItem(product, count)
    }

    if (loading){
        return( <h2>Cargando...</h2> );
    }

    if (error || !product) {
        return <ProductNotFound />;
    }

    return (
        <div className="details">
            <h3 className="detail_title"> {product.nombre} </h3>
            <img className="detail_img" src={product.imagen} alt={product.nombre}></img>
            <p className="detail_price"> Precio: ${product.precio.toFixed(2)} </p>
            <p className="detail_stock" >Stock: {product.stock} </p>
            <p className="description"> {product.descripcion} </p>
            <hr/>
            {product.hasColorPick && <ItemColorPick />}
            <ItemCount max={product.stock} min={1} onAddToCart={handleAddToCart} />
        </div>
    )
}

export default ItemDetailContainer