import { useParams } from "react-router";
import { getProducts, getProductsByCategory } from "../../data/firebase"
import Item from "../ItemListContainer/Item";
import "./ItemListContainer.css"
import { CategoryNotFound } from "../NotFound";
import { useEffect, useState } from "react";

function ItemListContainer({ greeting }) {
    
    const [productos, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const { categParam } = useParams();

    useEffect( () =>{

        setLoading(true);
        setError(false);

        if(categParam === undefined){
            console.log("Peticion de datos");
            const promiseData = getProducts();
            promiseData.then( (respuesta) => {
                console.log("Datos recibidos...", respuesta);
                setProducts(respuesta);
                setLoading(false);            
        
            }).catch( (error) => {
                console.error(`Error al obtener productos: ${error.message}`);
                setError(true);
                setLoading(false);
            });
        }
        else {
            getProductsByCategory(categParam)
                .then( response => {
                    setProducts(response);
                    setLoading(false); 
                })
                .catch(error => {
                    console.error(`Error al obtener productos por categoría: ${error.message}`);
                    setError(true);
                    setLoading(false);
                })
        }
    }, [categParam]);

    if (loading) {
        return <h2>Cargando productos...</h2>;
    }

    if (error) {
        return <CategoryNotFound />;
    }

    return (
        <section>
            <h2>{greeting}</h2>
            <p><strong>Nuestros productos...</strong></p>
            <div className="card-contain">
                {
                    productos.map( (item) => 
                        { return <Item 
                                key={item.id}
                                {...item}
                            /> 
                        })
                }
            </div>
        </section>
    )
}

export default ItemListContainer