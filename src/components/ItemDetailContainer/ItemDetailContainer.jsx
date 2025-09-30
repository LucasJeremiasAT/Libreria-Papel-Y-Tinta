import { useParams } from 'react-router';
import ItemColorPick from '../ItemColorPick';
import "./ItemDetailContainer.css"
import { getProductsById } from '../../data/mockAPI';
import { ProductNotFound } from '../NotFound';
import { useEffect, useState } from 'react';
import ButtonAddToCart from "../ButtonAddToCart";

function ItemDetailContainer(){
    const { idParam } = useParams();
    const [product, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

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
                alert(error);
                setError(true);
                setLoading(false);
            })
    }, [idParam])

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
            <p className="detail_price"> Precio: ${product.precio} </p>
            <p className="description"> {product.descripcion} </p>
            <hr/>
            {product.hasColorPick && <ItemColorPick />}
            <ButtonAddToCart />
        </div>
    )
}

export default ItemDetailContainer