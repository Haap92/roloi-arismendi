import React, { useEffect, useState } from 'react';
import ItemDetail from "../../components/products/ItemDetail";
import loadingGif from "../../assets/images/loading.gif";
import { useParams } from 'react-router-dom';
import { db } from "../../firebase/firebase";
import { doc, getDoc, collection } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail]=useState([]);
    const [loading, setLoading]=useState(true);

    const { id } = useParams();

    useEffect(() => {
        const productsCollection = collection(db, 'products');
        const refDoc = doc(productsCollection, id);
        getDoc(refDoc)
          .then((result) => {
            setProductDetail({
              id:id,
              ...result.data()});
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            setLoading(false);
          });
      }, [id]);
    
  return (
    <div>
       {loading 
       ? <div style={styles.loading}><img style={styles.loadingGif}src={loadingGif} alt="loading" /></div>
       : <ItemDetail productDetail={productDetail}/> }        
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