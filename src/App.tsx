import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const list = ["Juanda", "Tanjiro", "Eren"];

  return (
    <Card>
      <CardBody tittle="Este es el Título" text="Este es el tex" />
      <List data={list} />
    </Card>
  );
}

export default App;
