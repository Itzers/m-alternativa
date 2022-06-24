import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { getCardContentUtilityClass } from "@mui/material";

const CartWidget = () =>{
    return (
        <button style={styles.carrito}> <ShoppingCartIcon color="success" sx={{ fontSize: 50 }} />  </button>
    )
}

const styles = {
    carrito:{
        background: 'none',
        color: 'inherit',
        border: 'none',
        cursor: 'pointer',
        outline: 'inherit',
},
}

export default CartWidget

