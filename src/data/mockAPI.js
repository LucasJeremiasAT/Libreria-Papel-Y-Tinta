import productos from "./products"

function getProducts(){
    return new Promise( (resolve, reject) => {
        console.log("Promesa creada, procesando...")
        setTimeout( () => {
            if (productos.length > 0) {
                resolve(productos)
            }
            else {
                reject("No hay productos disponibles")
            }
        }
        , 1500)
    })
}

export default getProducts

export function getProductsById(idParam){
    const promiseProduct = new Promise ((resolve, reject) => {
        const productRequested = productos.find( item => item.id === Number(idParam) )
        console.log("Devolviendo producto...", productRequested)
        setTimeout( () => {
            if(productRequested){
                resolve(productRequested)
            }
            else {
                reject(`No se encontró el producto con id ${idParam}`)
            }
        }
        , 1000)
    })

    return promiseProduct;
}

export function getProductsByCategory(categParam){
    const promiseProduct = new Promise ((resolve, reject) => {
        const productsRequested = productos.filter( item => item.categoria === categParam )
        console.log("Devolviendo productos según categoria...", productsRequested)
        setTimeout( () => {
            if (productsRequested.length > 0) {
                resolve(productsRequested)
            }
            else {
                reject(`No hay productos en la categoria "${categParam}"`)
            }
        }
        , 1000)
    })

    return promiseProduct;
}