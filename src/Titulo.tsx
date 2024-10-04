function Titulo() {
  const name = "juanda";
  if (name) {
    return <h1>Hola {name}</h1>;
  } else {
    return <h1>nada bro</h1>;
  }
}

export default Titulo;
