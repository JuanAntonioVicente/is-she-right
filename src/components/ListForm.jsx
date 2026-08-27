import { useState } from "react";
import "./ListForm.css";

function ListForm({ onCrear }) {
    const [nombre, setNombre] = useState("");
    const [color, setColor] = useState("#008000");
    function handleSubmit() {
        if (nombre.trim() === "") {
            return;
        }
        onCrear(nombre, color);
        setNombre("");
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