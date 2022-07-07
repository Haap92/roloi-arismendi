import React, { useEffect, useState } from 'react';
import ItemDetail from "../itemDetail";
import { detailData } from '../../mocks/productsmock';
import loadingGif from "../../assets/images/loading.gif"
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail]=useState([]);
    const [loading, setLoading]=useState(true);

    const { id } = useParams();

    useEffect(()=>{
        detailData(id)
        .then((res) => {
            setProductDetail(res);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            setLoading(false);
        }); 
      },[id]);
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