
import React from "react";
import Header from "./Components/Header/Header";
//import CartWidget from "./Components/Header/CartWidget";
import ItemListContainer from "./ItemListContainer";
import ItemCount from "./ItemCount";

const App = () => {

  const aviso = (mensaje) => {
    console.log(mensaje);
  }

  const onAdd = (cantidad) => {
    alert(`Se agregaron ${cantidad} items en el carrito`)
  }
  
  const unMensaje = "Carrito de Compras";
  return (
    <>
      <Header />
      <ItemListContainer greeting="Bienvenidxs a Medicina Natural" />
      <ItemCount miProp={unMensaje} aviso={aviso} stock={5} initial={1} onAdd ={onAdd}/>
    </>
  )
}

export default App