import { useState } from "react";
import "./App.css";
import Summary from "./components/Summary.jsx";
import ListCard from "./components/ListCard.jsx";

function App() {
  const [listas, setListas] = useState([
    { id: 1, nombre: "Veces que no quiere", color: "green" },
    { id: 2, nombre: "Cozitas", color: "red" },
  ]);
  return (
    <>
      <section id="center">
        <div>
          <h1>Is She Right?</h1>
          <p>Tienes {listas.length} listas</p>
          {listas.map((lista) => (
            <ListCard key={lista.id} lista={lista} />
          ))}
        </div>
        <Summary />
      </section>
    </>
  );
}

export default App;
