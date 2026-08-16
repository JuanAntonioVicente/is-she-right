function ListCard({ lista }) {
    return (
        <div style={{ borderLeft: "4px solid " + lista.color, padding: "10px", display: "flex", justifyContent: "space-between" }}>
            <span>{lista.nombre}</span>
            <span>0</span>
        </div>
    )
}

export default ListCard