import React, { useState } from "react";
//import {useParams } from 'react-router-dom';
//import {getDataProduct} from './mocks/fakeApi';
import ItemDetail from '../ItemDetailContainer/ItemDetail';
import { useEffect } from "react";
import { getDataProduct } from "../../mocks/fakeApi";

const ItemDetailContainer = ({}) => {
    const [productList, setProductList] = useState({})
    const [loading, setLoading]=useState(true)

    //const {id} = useParams();

    // useEffect(() =>{
    //     setLoading (true);
        
    //     const URL = `https://fakestoreapi.com/products/${id}`;
    //     fetch (URL)
    //         .then(res=>res.json())
    //         .then(json=>console.log(json))
    //         .finally(() => {
    //             setLoading (false);
    //         });
        
    // })
    const getProductosHerbolarios = async () => {
        try{
            const respuesta = await getDataProduct
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
        <div>
            {loading ? (<p>Cargando...</p>) : (
            <>
            <ItemDetail productList={productList} /> 
            </>
            )}
        </div>
    );
};

export default ItemDetailContainer
