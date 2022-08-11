import React from "react";
import Header from "./Components/Header/Header";
import ItemListContainer from "./ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Cart from './Components/Cart/Cart';
import CartCustomProvider  from './Context/CartContext';

const App = () => {
  return (
    <BrowserRouter>
      <CartCustomProvider>
        <Header />
          <Routes>
            <Route path= "/" element= {<ItemListContainer greeting="Bienvenidos a Medicina Natural" />}  />
            <Route path= "/category/:categoryId" element= {<ItemListContainer />}/>
            <Route path= "/detail/:id" element= {<ItemDetailContainer />} />
            <Route path= "/cart" element={<Cart />}/>
        </Routes>
      </CartCustomProvider> 
    </BrowserRouter>
  );
}

export default App;