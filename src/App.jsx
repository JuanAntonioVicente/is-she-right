import { useState } from "react";
import "./App.css";
import Summary from "./components/Summary.jsx";
import ListCard from "./components/ListCard.jsx";
import ListForm from "./components/ListForm.jsx";
import EntryForm from "./components/EntryForm.jsx";

function App() {
  const [listas, setListas] = useState([
    { id: 1, nombre: "Veces que no quiere", color: "green" },
    { id: 2, nombre: "Cozitas", color: "red" },
  ]);
  const [entradas, setEntradas] = useState([
    { id: 1, listaId: 1, fecha: "2026-08-23", puntuacion: 8 },
    { id: 2, listaId: 2, fecha: "2026-08-24", puntuacion: 3 },
    { id: 3, listaId: 2, fecha: "2026-08-25", puntuacion: 4 },
  ]);
  const [listaSeleccionada, setListaSeleccionada] = useState(null);
  function agregarLista(nombre, color) {
    const nuevaLista = {
      id: Date.now(),
      nombre: nombre,
      color: color,
    };
    setListas([...listas, nuevaLista]);
  }
  function agregarEntrada(fecha, puntuacion) {
    const nuevaEntrada = {
      id: Date.now(),
      listaId: listaSeleccionada,
      fecha: fecha,
      puntuacion: puntuacion,
    };
    setEntradas([...entradas, nuevaEntrada]);
  }
  const entradasFiltradas = entradas.filter(
    (entrada) => entrada.listaId === listaSeleccionada
  );
  return (
    <>
      <section id="center">
        <div>
          <h1>Is She Right?</h1>
          <p>Tienes {listas.length} listas</p>
          {listas.map((lista) => (
            <ListCard key={lista.id} lista={lista} entradas={entradas} onSeleccionar={setListaSeleccionada} />
          ))}
          <ListForm onCrear={agregarLista} />
          {listaSeleccionada && (
            <div>
              <h3>Entradas</h3>
              {entradasFiltradas.map((entrada) => (
                <p key={entrada.id}>{entrada.fecha} - Puntuación {entrada.puntuacion}</p>
              ))}
              <EntryForm onCrear={agregarEntrada} />
            </div>
          )}
        </div>
        <Summary />
      </section>
    </>
  );
}

export default App;
