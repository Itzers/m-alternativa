import React from "react";
import Header from "./Components/Header/Header";
//import CartWidget from "./Components/Header/CartWidget";
import ItemListContainer from "./ItemListContainer";
import ItemCount from "./ItemCount";
import 'bootstrap/dist/css/bootstrap.min.css';
//import Item from "./Item";
import ReactDOM from "react-dom";
//import { BrowserRouter, Route, useParams } from "react-router-dom";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Cart from './Components/Cart/Cart';

const App = () => {

  const aviso = (mensaje) => {
    console.log(mensaje);
  }

  const onAdd = (cantidad) => {
    console.log(`Se agregaron ${cantidad} items en el carrito`);
  }
  
  const unMensaje = "Carrito de Compras";
  return (
    
    //<BrowserRouter>
    <>
      <Header />
      <ItemCount miProp={unMensaje} aviso={aviso} stock={5} initial={1} onAdd ={onAdd}/>
      {/* <Route>
        <useParams path= "/" element= {<ItemListContainer />} greeting="Bienvenidxs a Medicina Natural" />
        <Route path= "/category/:categoryId" element= {<ItemListContainer />}/>
        <useParams path= "/detail:id" element= {<ItemDetailContainer />} />
        <useParams path="/detail/:id" element={<ItemDetailContainer />} />
        <useParams path= "/cart" element={<Cart />}/>
      </Route> */}
    </>
    //</BrowserRouter>
  );
}

export default App