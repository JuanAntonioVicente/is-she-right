import { useState } from "react";

function Calendar({ listas, entradas }) {
    const [mes, setMes] = useState(new Date())
    function mesAnterior() {
        setMes(new Date(mes.getFullYear(), mes.getMonth() - 1, 1))
    }
    function mesSiguiente() {
        setMes(new Date(mes.getFullYear(), mes.getMonth() + 1, 1))
    }
    const year = mes.getFullYear();
    const numeroMes = mes.getMonth();
    const diasDelMes = new Date(year, numeroMes + 1, 0).getDate()
    const dias = [];
    for (let i = 1; i <= diasDelMes; i++) {
        dias.push(i);
    }
    const estiloCuadricula = {
        display: "grid",
        gridTemplateColumns: "repeat(7,1fr)"
    };
    const estiloCelda = {
        border: "1px solid #ccc",
        padding: "10px",
        minHeight: "60px"
    };
    return (
        <div>
            <button onClick={mesAnterior}>Anterior</button>
            <h2>{mes.toLocaleDateString("es-ES", { month: "long", year: "numeric" })}</h2>
            <button onClick={mesSiguiente}>Siguiente</button>
            <div style={estiloCuadricula}>
                {dias.map((dia) => {
                    const fecha = year + "-" + String(numeroMes + 1).padStart(2, "0") + "-" + String(dia).padStart(2, "0");
                    const encontrarEntradas = entradas.filter((mismaEntrada) => mismaEntrada.fecha === fecha);
                    return <div style={estiloCelda} key={dia}>
                        {dia}{encontrarEntradas.map((entradaDelDia) => {
                            const laLista = listas.find((lista) => lista.id === entradaDelDia.listaId);
                            return <div style={{ backgroundColor: laLista.color, height: "8px", marginTop: "2px" }}></div>;
                        })}</div>
                })}
            </div>
        </div>
    );
}
export default Calendar;