
import React from "react";
import Header from "./Components/Header/Header";
//import CartWidget from "./Components/Header/CartWidget";
import ItemListContainer from "./ItemListContainer";
import ItemCount from "./ItemCount";

const App = () => {

  const aviso = (mensaje) => {
    console.log(mensaje);
  }

  const unMensaje = "Hi";
  return (
    <>
      <Header />
      <ItemListContainer greeting="Bienvenidxs a Medicina Natural" />
      <ItemCount miProp={unMensaje} aviso={aviso} stock={5} />
    </>
  )
}

export default App