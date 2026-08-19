import { useState } from "react";

function EntryForm({ onCrear }) {
    const [fecha, setFecha] = useState("");
    const [puntuacion, setPuntuacion] = useState("");
    function handleSubmit() {
        if (fecha === "" || puntuacion === "") {
            return;
        }
        onCrear(fecha, puntuacion);
        setFecha("");
        setPuntuacion("");
    }
    return (
        <div>
            <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
            <input type="number" min="0" max="10" value={puntuacion} onChange={(e) => setPuntuacion(e.target.value)} />
            <button onClick={handleSubmit}>Añadir entrada</button>
        </div>
    )
}
export default EntryForm