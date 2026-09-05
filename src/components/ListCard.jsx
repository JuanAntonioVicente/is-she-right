import { useState } from "react";
import "./ListCard.css";

function ListCard({ lista, entradas, onSeleccionar, onBorrar, onEditar, listaEnEdicion, setListaEnEdicion, listaSeleccionada }) {
  const total = entradas.filter((entrada) => entrada.listaId === lista.id).length;
  const [nombreEditado, setNombreEditado] = useState(lista.nombre);
  const [confirmar, setConfirmar] = useState(false);
  const editando = listaEnEdicion === lista.id;
  const seleccionada = listaSeleccionada === lista.id;
  return (
    <div
      onClick={() => onSeleccionar(lista.id)}
      className={"list-card " + (seleccionada ? "list-card-activa" : "" )}
      style={{ borderLeft: "4px solid " + lista.color }}>
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
      <div className="list-card-acciones">
        <span className="list-card-total">{total}</span>
        {!editando && !confirmar && (
          <button
            className="list-card-boton"
            onClick={(e) => {
              e.stopPropagation();
              setListaEnEdicion(lista.id);
              setNombreEditado(lista.nombre);
            }}>
            Editar
          </button>
        )}
        {editando && !confirmar && (
          <button
            className="list-card-boton list-card-boton-guardar"
            onClick={(e) => {
              e.stopPropagation();
              onEditar(lista.id, nombreEditado);
              setListaEnEdicion(null);
            }}>
            Guardar
          </button>
        )}
        {!confirmar && (
          <button
            className="list-card-boton list-card-boton-borrar"
            onClick={(e) => {
              e.stopPropagation();
              setConfirmar(true);
            }}>
            Borrar
          </button>
        )}
        {editando && !confirmar && (
          <button className="entrada-boton" onClick={() => {
            setNombreEditado(lista.nombre);
            setListaEnEdicion(null);
          }}>
            Cancelar
          </button>
        )}
        {confirmar && (
          <div className="list-card-confirmar">
            <button
              className="list-card-boton list-card-boton-confirmar"
              onClick={(e) => {
                e.stopPropagation();
                onBorrar(lista.id);
                setConfirmar(false);
              }}>
              Confirmar
            </button>
            <button
              className="list-card-boton"
              onClick={(e) => {
                e.stopPropagation();
                setConfirmar(false);
              }}>
              Cancelar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ListCard;
