import { useState } from "react"

function ItemColorPick(){
    const [color, setColor] = useState("#0000af")
    return (
        <div>
            <label>
                Seleccionar color:{" "}
                <select value={color} onChange={(e) => setColor(e.target.value)}>
                    <option value="#0000af">Azul</option>
                    <option value="#00790c">Verde</option>
                    <option value="#ff9900">Naranja</option>
                    <option value="#82006d">Violeta</option>
                    <option value="#ff009d">Rosa</option>
                </select>
            </label>
            <p className="color-selector">
                Color seleccionado:{" "}
            <span style={{ backgroundColor: color, width: "15px", height: "15px", display: "inline-block", border: "1px solid #333", borderRadius: "50%" }}></span>
            </p>
        </div>
    )
}

export default ItemColorPick;