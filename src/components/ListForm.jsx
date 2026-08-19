import { useState } from "react";

function ListForm({ onCrear }) {
    const [nombre, setNombre] = useState("");
    const [color, setColor] = useState("#008000");
    return (
        <div>
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
            <button onClick={() => onCrear(nombre,color)}>Crear lista</button>
        </div>
    )
}
export default ListForm