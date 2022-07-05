import React, { useEffect, useState } from 'react';
import ItemDetail from "../itemDetail";
import { productData } from '../../mocks/productsmock';
import loadingGif from "../../assets/images/loading.gif"

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail]=useState([])
    const [loading, setLoading]=useState(true)
    useEffect(()=>{
        productData
        .then((res)=> setProductDetail(res.find((item)=> item.id === '02')))
        .catch((error)=> console.log(error))
        .finally(()=>setLoading(false))
      },[])
  return (
    <div>
       {loading ? <div style={styles.loading}><img style={styles.loadingGif}src={loadingGif} alt="loading" /></div>: 
        <ItemDetail productDetail={productDetail}/> }        
    </div>
  );
};

const styles = {
    loading:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '15%'
    },
    loadingGif:{
        display: 'flex',
        width: '10%'
    }
}
export default ItemDetailContainer;