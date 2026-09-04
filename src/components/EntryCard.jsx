import { useState } from "react";
import "./EntryCard.css";

function EntryCard({ entrada, onBorrar, onEditar, entradaEnEdicion, setEntradaEnEdicion }) {
  const [fechaEditada, setFechaEditada] = useState(entrada.fecha);
  const [nombreEditado, setNombreEditado] = useState(entrada.nombre);
  const [tiempoEditado, setTiempoEditado] = useState(entrada.tiempo);
  const [puntuacionEditada, setPuntuacionEditada] = useState(entrada.puntuacion);
  const [confirmar, setConfirmar] = useState(false);
  const editar = entradaEnEdicion === entrada.id;
  return (
    <div className="entrada-fila">
      {editar ? (
        <span className="entrada-editando">
          <input
            className="entrada-input"
            type="date"
            value={fechaEditada}
            onChange={(e) => setFechaEditada(e.target.value)}
          />
          <input
            className="entrada-input"
            type="text"
            value={nombreEditado}
            onChange={(e) => setNombreEditado(e.target.value)}
          />
          <input
            className="entrada-input entrada-input-tiempo"
            type="number"
            value={tiempoEditado}
            onChange={(e) => setTiempoEditado(e.target.value)}
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
          <span className="entrada-tiempo">{entrada.tiempo}</span>
          <span className="entrada-puntuacion">{entrada.puntuacion}</span>
        </span>
      )}

      <span className="entrada-derecha">
        {!editar && !confirmar && (
          <button className="entrada-boton" onClick={() => {
            setEntradaEnEdicion(entrada.id);
            setFechaEditada(entrada.fecha);
            setNombreEditado(entrada.nombre);
            setTiempoEditado(entrada.tiempo);
            setPuntuacionEditada(entrada.puntuacion);
          }}>
            Editar
          </button>
        )}
        {editar && !confirmar && (
          <button
            className="entrada-boton entrada-guardar"
            onClick={() => {
              onEditar(entrada.id, fechaEditada, nombreEditado, tiempoEditado, puntuacionEditada);
              setEntradaEnEdicion(null);
            }}>
            Guardar
          </button>
        )}
        {!confirmar && (
          <button className="entrada-borrar" onClick={() => {
            setConfirmar(true);
          }}>
            Borrar
          </button>
        )}
        {editar && !confirmar && (
          <button className="entrada-boton" onClick={() => {
            setFechaEditada(entrada.fecha);
            setNombreEditado(entrada.nombre);
            setTiempoEditado(entrada.tiempo);
            setPuntuacionEditada(entrada.puntuacion);
            setEntradaEnEdicion(null);
          }}>
            Cancelar
          </button>
        )}
        {confirmar && (
          <div className="entrada-confirmar">
            <button
              className="entrada-boton entrada-boton-confirmar"
              onClick={() => {
                onBorrar(entrada.id);
                setConfirmar(false);
              }}>
              Confirmar
            </button>
            <button
              className="entrada-boton"
              onClick={() => {
                setConfirmar(false);
              }}>
              Cancelar
            </button>
          </div>
        )}
      </span>
    </div>
  );
}

export default EntryCard;
