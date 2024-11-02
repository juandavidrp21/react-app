import { useState } from "react";
import Card, { CardBody } from "./components/Card";
import List from "./components/List";
import button from "./components/button";

function App() {
  const list: string[] = ["Juanda", "Tanjiro", "Eren"];

  const handleSelect = (elemento: String) => {
    console.log(elemento);
  };

  const containerList = list.length ? (
    <List data={list} onSelect={handleSelect} />
  ) : (
    "Sin valores para mostrar"
  );

  const [btnCarga, setbtnCarga] = useState(false);

  return (
    <Card>
      <CardBody tittle="Este es el Título" text="Este es el tex" />
      {containerList}

      {!btnCarga ? (
        <button
          onClick={() => setbtnCarga(true)}
          type="button"
          className="btn btn-primary"
        >
          Guardar
        </button>
      ) : (
        <button
          onClick={() => setbtnCarga(false)}
          type="button"
          className="btn btn-secondary"
        >
          Cargando...
        </button>
      )}
    </Card>
  );
}

export default App;
