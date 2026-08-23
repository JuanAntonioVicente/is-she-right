import { useState } from "react";
import "./App.css";
import Summary from "./components/Summary.jsx";
import ListCard from "./components/ListCard.jsx";
import ListForm from "./components/ListForm.jsx";
import EntryForm from "./components/EntryForm.jsx";
import Calendar from "./components/Calendar.jsx";

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
  function borrarEntrada(id) {
    setEntradas(entradas.filter((entrada) => entrada.id !== id));
  }
  function borrarLista(id) {
    setListas(listas.filter((lista) => lista.id !== id));
    setEntradas(entradas.filter((entrada) => entrada.listaId !== id));
  }
  const entradasFiltradas = entradas.filter(
    (entrada) => entrada.listaId === listaSeleccionada
  );
  function editarLista(id, nuevoNombre) {
    setListas(
      listas.map((lista) => {
        if (lista.id === id) {
          return { ...lista, nombre: nuevoNombre };
        }
        return lista;
      })
    );
  }
  return (
    <>
      <section id="center">
        <div>
          <h1>Is She Right?</h1>
          <p>Tienes {listas.length} listas</p>
          {listas.map((lista) => (
            <ListCard key={lista.id} lista={lista} entradas={entradas}
              onSeleccionar={setListaSeleccionada} onBorrar={borrarLista} 
              onEditar={editarLista} />
          ))}
          <ListForm onCrear={agregarLista} />
          {listaSeleccionada && (
            <div>
              <h3>Entradas</h3>
              {entradasFiltradas.map((entrada) => (
                <p key={entrada.id}>{entrada.fecha} - Puntuación {entrada.puntuacion}
                  <button onClick={() => borrarEntrada(entrada.id)}>Borrar</button>
                </p>
              ))}
              <EntryForm onCrear={agregarEntrada} />
            </div>
          )}
        </div>
        <Summary listas={listas} entradas={entradas} />
        <Calendar listas={listas} entradas={entradas} />
      </section>
    </>
  );
}

export default App;
