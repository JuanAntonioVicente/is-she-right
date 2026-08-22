function Summary({ listas, entradas }) {
    return (
        <>
            <h2>Resumen del mes</h2>
            {listas.map((lista) => {
                const total = entradas.filter((entrada) => entrada.listaId === lista.id).length;
                return <p key={lista.id}>{lista.nombre} - {total}</p>;
            })}
        </>
    );
}
export default Summary;