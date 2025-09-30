import { useEffect } from "react";
import { useNavigate } from "react-router";

export function ProductNotFound() {
    const navigateTo = useNavigate();
    
    useEffect(() => {
        console.log("ProductNotFound montado, redirigiendo en 3s...");
        const timer = setTimeout(() => {
            console.log("Redirigiendo a /");
            navigateTo("/");
        }, 3000);
        return () => clearTimeout(timer);
    }, [navigateTo]);

    return (
        <div>
            <h1>Producto no encontrado</h1>
            <p>El producto que buscas no existe.</p>
            <p>Serás redirigido en unos segundos...</p>
        </div>
    );
}

export function CategoryNotFound() {
    const navigateTo = useNavigate();

    useEffect(() => {
        console.log("CategoryNotFound montado, redirigiendo en 3s...");
        const timer = setTimeout(() => {
            console.log("Redirigiendo a /");
            navigateTo("/");
        }, 3000);
        return () => clearTimeout(timer);
    }, [navigateTo]);

    return (
        <div>
            <h1>Categoría sin productos</h1>
            <p>No hay productos en esta categoría.</p>
            <p>Serás redirigido en unos segundos...</p>
        </div>
    );
}

function NotFound(){
    const navigateTo = useNavigate()

    useEffect(() => {
        console.log("NotFound montado, redirigiendo en 3s...");
        const timer = setTimeout(() => {
            console.log("Redirigiendo a /");
            navigateTo("/");
        }, 3000);
        return () => clearTimeout(timer);
    }, [navigateTo]);

    return <div>
        <h1>404: Página no encontrada</h1>
        <p>Serás redirigido en unos segundos...</p>
    </div>
}

export default NotFound;