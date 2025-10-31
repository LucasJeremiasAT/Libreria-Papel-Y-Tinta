import { useState } from "react"
import "./ItemCount.css"

export default function ItemCount( {max, min, onAddToCart} ){
    const [count, setCount] = useState(1);

    const handleSubstract = () => { if(count > min) setCount(count-1) }
    const handleAdd = () => { if(count < max) setCount(count+1) }

    return(
        <div className="counter-container" >
            <button className="count_btn" onClick={handleSubstract} >-</button>
            <span>{count}</span>
            <button className="count_btn"  onClick={handleAdd} >+</button>
            <button onClick={ ()=> onAddToCart(count) } >Agregar</button>
        </div>
    )
}