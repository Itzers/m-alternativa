
import React from "react";
import Header from "./Components/Header/Header";
//import CartWidget from "./Components/Header/CartWidget";
import ItemListContainer from "./ItemListContainer";

const App = () => {
  return (
    <>
      <Header />
      <ItemListContainer greeting="Bienvenidxs a Medicina Natural" />
    </>
  )
}

export default App