import { useState } from "react";
import "./App.css";
import Summary from "./components/Summary.jsx";
import ListCard from "./components/ListCard.jsx";
import ListForm from "./components/ListForm.jsx";
import EntryForm from "./components/EntryForm.jsx";
import Calendar from "./components/Calendar.jsx";

function App() {
  const [listas, setListas] = useState([]);
  const [entradas, setEntradas] = useState([]);
  const [listaSeleccionada, setListaSeleccionada] = useState(null);
  function agregarLista(nombre, color) {
    const nuevaLista = {
      id: Date.now(),
      nombre: nombre,
      color: color,
    };
    setListas([...listas, nuevaLista]);
  }
  function agregarEntrada(fecha, puntuacion, nombre) {
    const nuevaEntrada = {
      id: Date.now(),
      listaId: listaSeleccionada,
      nombre: nombre,
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
    if (id === listaSeleccionada) {
      setListaSeleccionada(null);
    }
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
  const listaActual = listas.find((lista) => lista.id === listaSeleccionada);

  return (
    <div className="app">
      <h1 className="app-titulo">Is She Right?</h1>
      {listas.length > 0 ? <p className="app-subtitulo">
        Tienes {listas.length} {listas.length === 1 ? "lista" : "listas"}
      </p> : <p className="app-vacio">No tienes ninguna lista...</p>}
      <div className="app-listas">
        {listas.map((lista) => (
          <ListCard key={lista.id} lista={lista} entradas={entradas}
            onSeleccionar={setListaSeleccionada} onBorrar={borrarLista}
            onEditar={editarLista} />
        ))}
      </div>
      <ListForm onCrear={agregarLista} />
      {listaSeleccionada && (
        <div className="entradas-panel" style={{ borderLeft: "3px solid" + listaActual.color }}>
          <div className="entradas-titulo">Entradas</div>
          {entradasFiltradas.map((entrada) => (
            <div className="entrada-fila" key={entrada.id}>
              <span className="entrada-texto">
                <span className="entrada-fecha">{entrada.fecha}</span>
                <span className="entrada-nombre">{entrada.nombre}</span>
              </span>
              <span className="entrada-derecha">
                <span className="entrada-puntuacion">{entrada.puntuacion}</span>
                <button className="entrada-borrar" onClick={() => borrarEntrada(entrada.id)}>Borrar</button>
              </span>
            </div>
          ))}
          <EntryForm onCrear={agregarEntrada} />
        </div>
      )}
      <Summary listas={listas} entradas={entradas} />
      <Calendar listas={listas} entradas={entradas} />
    </div>
  );
}
export default App;