function ListCard({ lista, entradas }) {
    const total = entradas.filter((entrada) => entrada.listaId === lista.id).length
    return (
        <div style={{ borderLeft: "4px solid " + lista.color, padding: "10px", display: "flex", justifyContent: "space-between" }}>
            <span>{lista.nombre}</span>
            <span>{total}</span>
        </div>
    )
}

export default ListCard