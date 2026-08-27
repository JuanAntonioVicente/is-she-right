import { useState } from "react";
import "./EntryForm.css";

function EntryForm({ onCrear }) {
    const [fecha, setFecha] = useState("");
    const [puntuacion, setPuntuacion] = useState("");
    const [error, setError] = useState("");
    function handleSubmit() {
        if (fecha === "" || puntuacion === "" || Number(puntuacion) < 0 || Number(puntuacion) > 10) {
            setError("Debes poner una fecha y puntuación correctas.");
            return;
        }
        onCrear(fecha, puntuacion);
        setFecha("");
        setPuntuacion("");
        setError("");
    }
    return (
        <div className="entry-form">
            <input className="entry-form-input" type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
            <input className="entry-form-input entry-form-puntuacion" type="number" min="0" max="10" value={puntuacion} onChange={(e) => setPuntuacion(e.target.value)} />
            <button className="entry-form-boton" onClick={handleSubmit}>Añadir entrada</button>
            {error && <p className="entry-form-error">{error}</p>}
        </div>
    )
}
export default EntryForm