// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore, getDocs, doc, getDoc, query, where, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIRESTORE_APIKEY,
    authDomain: import.meta.env.VITE_FIRESTORE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_FIRESTORE_PROJECTID,
    storageBucket: import.meta.env.VITE_FIRESTORE_BUCKET,
    messagingSenderId: "423807433405",
    appId: import.meta.env.VITE_FIRESTORE_APPID
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getProducts(){
    //referencia a una colección
    const productsRef = collection(db, "productos");
    //leer el estado de mi colección
    const productsSnapshot = await getDocs(productsRef);

    const dataDocs = productsSnapshot.docs.map( doc => {
        return { id: doc.id, ...doc.data() }
    }
    )

    //reject
    if (dataDocs.length < 1)
        throw( new Error("No pudimos obtener los datos"));

    return dataDocs;
}

export async function getProductsById(idParam){
    //referencia
    const docRef = doc(db, "productos", idParam)
    //pedido de datos asincrono
    const documentSnapshot = await getDoc(docRef);

    if( documentSnapshot.exists() ){
        return { id: documentSnapshot.id, ...documentSnapshot.data()};
    }
    throw new Error("Producto no encontrado.");
}

export async function getProductsByCategory(categParam) {
    const productsRef = collection(db , "productos");

    const q = query(productsRef, where("categoria", "==", categParam ))

    const productsSnapshot = await getDocs(q);

    const dataDocs = productsSnapshot.docs.map( doc => ( { 
        id: doc.id, ...doc.data()}))

    //reject
    if (dataDocs.length < 1)
        throw(new Error(`No se encontraron productos para la categoría: ${categParam}`));

    return dataDocs;
}


export async function createOrder(orderData) {
    //referencia a una colección -> orders
    const ordersRef = collection(db, "orders");
    //agregar el documente a esa colectionRef -> addDoc()
    const newDoc = await addDoc(ordersRef, orderData);
    return newDoc;
}

export default app;