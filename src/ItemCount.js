import React,{ useState } from 'react'

const ItemCount = ({ miProp, aviso, initial, stock, onAdd}) => {

    const [contador, setContador] = useState(initial);


        const handlerClickSumar = () =>{
            if (contador < stock){
                setContador(contador +1);
            }
        };
    
        const handlerClickRestar = () =>{
            if (contador > initial){
                setContador(contador -1 );
            }
        };

        const reset = () => {
            setContador(initial);
        }

    return (
        <div style = {styles.card}>
            <div style = {styles.carrito}>{miProp}</div>
            <h1>{contador}</h1>
            <button onClick={handlerClickSumar}>+</button>
            <button onClick={handlerClickRestar}>-</button>
            <button style= {styles.sincarrito} onClick={reset}>vaciar carrito</button>
            <button style= {styles.carrito} onClick={()=>onAdd(contador)}>Agregar al carrito</button>

        </div>
    );
}

const styles ={
    card:{
        backgroundColor: '#a9a9a9',
        padding: '1rem',
        margin: 'auto',
        width: 'fit-content',
        textAlign: 'center',
    },
    
    sincarrito:{
        display: 'none',
    },

    carrito:{
        display:'flex',
    },
}
export default ItemCount


