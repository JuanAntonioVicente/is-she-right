import { useState } from "react";
import "./EntryCard.css";

function EntryCard({ entrada, onBorrar, onEditar }) {
  const [editar, setEditar] = useState(false);
  const [nombreEditado, setNombreEditado] = useState(entrada.nombre);
  const [fechaEditada, setFechaEditada] = useState(entrada.fecha);
  const [puntuacionEditada, setPuntuacionEditada] = useState(entrada.puntuacion);
  return (
    <div className="entrada-fila">
      {editar ? (
        <span className="entrada-editando">
          <input
            className="entrada-input"
            type="text"
            value={nombreEditado}
            onChange={(e) => setNombreEditado(e.target.value)}
          />
          <input
            className="entrada-input"
            type="date"
            value={fechaEditada}
            onChange={(e) => setFechaEditada(e.target.value)}
          />
          <input
            className="entrada-input entrada-input-puntuacion"
            type="number"
            value={puntuacionEditada}
            onChange={(e) => setPuntuacionEditada(e.target.value)}
          />
        </span>
      ) : (
        <span className="entrada-texto">
          <span className="entrada-fecha">{entrada.fecha}</span>
          <span className="entrada-nombre">{entrada.nombre}</span>
          <span className="entrada-puntuacion">{entrada.puntuacion}</span>
        </span>
      )}

      <span className="entrada-derecha">
        <button className="entrada-boton" onClick={() => setEditar(true)}>
          Editar
        </button>
        <button className="entrada-borrar" onClick={() => onBorrar(entrada.id)}>
          Borrar
        </button>
        {editar && (
          <button
            className="entrada-boton"
            onClick={() => {
              onEditar(entrada.id, nombreEditado, fechaEditada, puntuacionEditada);
              setEditar(false);
            }}>
            Guardar
          </button>
        )}
      </span>
    </div>
  );
}

export default EntryCard;
