function ListCard({ lista, entradas, onSeleccionar }) {
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
        </div >
    )
}

export default ListCard