function ListCard({ lista, entradas, onSeleccionar, onBorrar, onEditar }) {
    const total = entradas.filter((entrada) => entrada.listaId === lista.id).length
    const estilos = {
        borderLeft: "4px solid " + lista.color,
        padding: "10px",
        display: "flex",
        justifyContent: "space-between"
    };
    return (
        <div onClick={() => onSeleccionar(lista.id)} style={estilos} >
            <span>{lista.nombre}</span>
            <span>{total}</span>
            <button onClick={(e) => {
                e.stopPropagation();
                onBorrar(lista.id);
            }}>Borrar</button>
            <button onClick={(e) => {
                e.stopPropagation();
                onEditar(lista.id, "CAMBIADO");
            }}>Editar</button>
        </div >
    )
}

export default ListCard