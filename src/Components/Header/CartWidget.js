import React, { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { getCardContentUtilityClass } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

const CartWidget = () => {
  const navegar = useNavigate();
  const { getQtyProductos } = useContext(CartContext);
  return (
    <button style={styles.carrito} onClick={() => navegar("/cart")}>
      <div>
        <ShoppingCartIcon color="success" sx={{ fontSize: 50 }} />
        <span>{getQtyProductos() || " "}</span>
      </div>
    </button>
  );
};

const styles = {
  carrito: {
    background: "none",
    color: "inherit",
    border: "none",
    cursor: "pointer",
    outline: "inherit",
  },
};

export default CartWidget;
