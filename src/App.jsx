import { useState } from "react";
import "./App.css";
import Summary from "./components/Summary.jsx";
import ListCard from "./components/ListCard.jsx";
import ListForm from "./components/ListForm.jsx";

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
  return (
    <>
      <section id="center">
        <div>
          <h1>Is She Right?</h1>
          <p>Tienes {listas.length} listas</p>
          {listas.map((lista) => (
            <ListCard key={lista.id} lista={lista} entradas={entradas} />
          ))}
          <ListForm />
        </div>
        <Summary />
      </section>
    </>
  );
}

export default App;
