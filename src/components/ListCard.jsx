import { useState } from "react";
import "./ListCard.css";

function ListCard({ lista, entradas, onSeleccionar, onBorrar, onEditar }) {
  const total = entradas.filter(
    (entrada) => entrada.listaId === lista.id
  ).length;
  const [editando, setEditando] = useState(false);
  const [nombreEditado, setNombreEditado] = useState(lista.nombre);
  const [confirmar, setConfirmar] = useState(false);
  return (
    <div
      onClick={() => onSeleccionar(lista.id)}
      className="list-card"
      style={{ borderLeft: "4px solid " + lista.color }}
    >
      {editando ? (
        <input
          className="list-card-input"
          type="text"
          value={nombreEditado}
          onChange={(e) => setNombreEditado(e.target.value)}
        />
      ) : (
        <span className="list-card-nombre">{lista.nombre}</span>
      )}
      <div
        className="list-card-acciones"
      >
        <span className="list-card-total">{total}</span>
        <button
          className="list-card-boton"
          onClick={(e) => {
            e.stopPropagation();
            setConfirmar(true);
          }}
        >
          Borrar
        </button>
        <button
          className="list-card-boton"
          onClick={(e) => {
            e.stopPropagation();
            setEditando(true);
          }}
        >
          Editar
        </button>
        {editando && (
          <button
            className="list-card-boton"
            onClick={(e) => {
              e.stopPropagation();
              onEditar(lista.id, nombreEditado);
              setEditando(false);
            }}
          >
            Guardar
          </button>
        )}
        {confirmar && (
          <div className="list-card-confirmar">
            <button
              className="list-card-boton list-card-boton-peligro"
              onClick={(e) => {
                e.stopPropagation();
                onBorrar(lista.id);
                setConfirmar(false);
              }}
            >
              Confirmar
            </button>
            <button
              className="list-card-boton"
              onClick={(e) => {
                e.stopPropagation();
                setConfirmar(false);
              }}
            >
              Cancelar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ListCard;
