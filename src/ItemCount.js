import React,{ useState } from 'react'

const ItemCount = ({ product, stock, onAdd, contador, setContador}) => {

    
        const handlerClickSumar = () =>{
            if (contador < stock){
                setContador(contador + 1);
            }
        };
    
        const handlerClickRestar = () =>{
            if (contador > 0){
                setContador(contador - 1 );
            }
        };

        // const reset = () => {
        //     setContador(initial);
        // }

    return (
        <>
        <div style = {styles.card}>
            <div style = {styles.carrito}>{product}</div>
            <h1>{contador}</h1>
            <button style = {styles.botones} onClick={handlerClickSumar}>+</button>
            <button style = {styles.botones} onClick={handlerClickRestar}>-</button>
            {/* <button style= {styles.sincarrito} onClick={reset}>vaciar carrito</button> */}
            <button style= {styles.carrito} onClick={onAdd}>Agregar al carrito</button>
        </div>
        </>
    )
}

const styles ={
    card:{
        backgroundColor: '#a9a9a9',
        padding: '1rem',
        margin: 'auto',
        width: 'fit-content',
        textAlign: 'center',
    },
    
    // sincarrito:{
    //     display: 'none',
    // },

    carrito:{
        display:'flex',
        border: 'none',
    },

    botones:{
        border:'outset',
    },
}

export default ItemCount


