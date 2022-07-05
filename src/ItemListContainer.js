import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import {getData} from './mocks/fakeApi';

const ItemListContainer = ({ greeting }) => {
    const [productList, setProductList]=useState([])
    const [loading, setLoading]=useState(true)

        // useEffect(()=>{
        //     getData
        //     .then((result)=> setProductList(result))
        //     .catch ((error)=> console.log(error))
        //     .finally(()=>setLoading(false))
        // },[])

    
    const getProductosHerbolarios = async () => {
        try{
            const respuesta = await getData
            setProductList(respuesta)
        }catch(error){
            console.log(error)
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        getProductosHerbolarios()
    },[])

    console.log(productList);
    return (
        <div /*style= {styles.landing}*/>
            <span>{greeting}</span>
            {loading ? <p>Cargando...</p> : <ItemList productList={productList} /> }
            
        </div>
    );
}


/* const styles = {
    landing:{
        width:'100%',
        height: 'calc (100vh-60px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
} */

export default ItemListContainer