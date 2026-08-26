import "./Summary.css";

function Summary({ listas, entradas }) {
    return (
        <>
            <div className="summary-titulo">Resumen del mes</div>
            <div className="summary-grid">
                {listas.map((lista) => {
                    const total = entradas.filter((entrada) => entrada.listaId === lista.id).length;
                    return (
                        <div className="summary-card" key={lista.id}>
                            <div className="summary-nombre">{lista.nombre}</div>
                            <div className="summary-total" style={{ color: lista.color }}>{total}</div>
                        </div>
                    );
                })}
            </div >
        </>
    );
}
export default Summary;