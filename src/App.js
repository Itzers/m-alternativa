import React from "react";
import Header from "./Components/Header/Header";
import ItemListContainer from "./ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Cart from './Components/Cart/Cart';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path= "/" element= {<ItemListContainer greeting="Bienvenidxs a Medicina Natural" />}  />
          <Route path= "/category/:categoryId" element= {<ItemListContainer />}/>
          <Route path= "/detail:id" element= {<ItemDetailContainer />} />
          <Route path= "/cart" element={<Cart />}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;