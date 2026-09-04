import { useState } from "react";
import "./ListForm.css";

const colores = ["#4A9DD9", "#E24B4A", "#5CB85C", "#EF9F27", "#9B59B6", "#1ABC9C", "#E91E63", "#F5C518"];
function colorRandom() {
    return colores[Math.floor(Math.random() * colores.length)];
}
function ListForm({ onCrear }) {
    const [nombre, setNombre] = useState("");
    const [color, setColor] = useState(colorRandom);
    function handleSubmit() {
        if (nombre.trim() === "") {
            return;
        }
        onCrear(nombre, color);
        setNombre("");
        setColor(colorRandom);
    }
    return (
        <div className="list-form">
            <input className="list-form-input" type="text" placeholder="Nombre de la lista"
                value={nombre} onChange={(e) => setNombre(e.target.value)} />
            <input className="list-form-color" type="color" value={color} onChange={(e) => setColor(e.target.value)} />
            <button className="list-form-boton" onClick={handleSubmit} >Crear lista</button>
        </div>
    )
}
export default ListForm