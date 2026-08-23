import { useState } from "react";

function ListCard({ lista, entradas, onSeleccionar, onBorrar, onEditar }) {
    const total = entradas.filter((entrada) => entrada.listaId === lista.id).length
    const estilos = {
        borderLeft: "4px solid " + lista.color,
        padding: "10px",
        display: "flex",
        justifyContent: "space-between"
    };
    const [editando, setEditando] = useState(false);
    const [nombreEditado, setNombreEditado] = useState(lista.nombre);
    return (
        <div onClick={() => onSeleccionar(lista.id)} style={estilos} >
            {editando ?
                <input type="text" value={nombreEditado} onChange={(e) => setNombreEditado(e.target.value)} />
                : <span>{lista.nombre}</span>}
            <span>{total}</span>
            <button onClick={(e) => {
                e.stopPropagation();
                onBorrar(lista.id);
            }}>Borrar</button>
            <button onClick={(e) => {
                e.stopPropagation();
                setEditando(true);
            }}>Editar</button>
            {editando && (
                <button onClick={(e) => {
                    e.stopPropagation();
                    onEditar(lista.id, nombreEditado);
                    setEditando(false);
                }}>Guardar</button>
            )}
        </div >
    )
}

export default ListCard