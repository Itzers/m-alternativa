import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import {getData} from './mocks/fakeApi';
import { db } from './firebase/firebase';
import { getDocs, collection, query } from 'firebase/firestore';

const ItemListContainer = ({greeting}) => {
    const [productList, setProductList]=useState([]);
    const [loading, setLoading]=useState(true);
    const {categoryId} = useParams ()

        useEffect(()=>{

            const productsCollection = collection (db, 'ProductosHerbolarios');
            getDocs (productsCollection)
            .then (result => {
                const lista = result.docs.map(product => {
                    return product.data()
                })
                console.log(lista);
            })

            getData
            .then((result)=> {
                if (categoryId){
                    setProductList(result.filter((item)=> item.category === categoryId ))
                }else{
                    setProductList(result)
                }
            } )
            .catch ((error)=> console.log(error))
            .finally(()=>setLoading(false))
        },[categoryId])

    // const getProductosHerbolarios = async () => {
    //     try{
    //         const respuesta = await getData
    //         setProductList(respuesta)
    //     }catch(error){
    //         console.log(error)
    //     }finally{
    //         setLoading(false)
    //     }
    // }

    // useEffect(()=>{
    //     getProductosHerbolarios()
    // },[])

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

export default ItemListContainer;