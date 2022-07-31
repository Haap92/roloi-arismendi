import React, { useEffect, useState } from 'react';
import ItemList from "../../components/products/ItemList";
import loadingGif from "../../assets/images/loading.gif";
import { useParams } from 'react-router-dom';
import { db } from "../../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {
    const [products, setProducts]=useState([]);
    const [loading, setLoading]=useState(true);

    const { categoryId } = useParams();

    useEffect(() => {
     const productsQuery = categoryId
        ? query(collection(db, 'products'), where('category', '==', categoryId))
        : collection(db, 'products')
  
      getDocs(productsQuery)
        .then((result) => {
          const listProducts = result.docs.map((product) => {
            return {
              id: product.id,
              ...product.data(),
            };
          });
          setProducts(listProducts);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }, [categoryId]);
    console.log(products);

  return (
    <div>
       {loading 
       ? <div style={styles.loading}><img style={styles.loadingGif}src={loadingGif} alt="loading" /></div>
       : <ItemList products={products}/> }       
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
export default ItemListContainer;