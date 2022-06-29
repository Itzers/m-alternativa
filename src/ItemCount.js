import React,{ useState } from 'react'

const ItemCount = ({ miProp, aviso, initial, stock, onAdd}) => {

    const [value, contador, setContador] = useState(initial);


        const handlerClickSumar = () =>{
            if (value <= stock){
                setContador((contadorValue)=> contadorValue + 1);
            }else{
                console.log("Sin existencia");
            }
        };
    
        const handlerClickRestar = () =>{
            if (value > initial){
                setContador((contadorValue)=> contadorValue -1 );
            }else{
                console.log("Tienes que seleccionar +");
            }
        }

        const reset = () => {
            setContador(1);
            aviso();
        }

    return (
        <div style = {styles.card}>
            <div style = {styles.carrito}>{miProp}</div>
            <h1 style = {styles.carrito}>{contador}</h1>
            <button onClick={()=>handlerClickSumar()}>+</button>
            <button onClick={handlerClickRestar}>-</button>
            <button onClick={reset}>Borrar carrito</button>
            <button onClick={()=>aviso("Agregando al carrito")}>Agregando al carrito</button>

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
    
}
export default ItemCount


