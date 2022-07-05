import React, { useEffect, useState } from 'react';
import gear from "../../assets/images/gear.svg";
import ItemList from "../itemList";
import { productData } from '../../mocks/productsmock';
import loadingGif from "../../assets/images/loading.gif"

const ItemListContainer = ({greeting}) => {
    const [productList, setProductList]=useState([])
    const [loading, setLoading]=useState(true)
    const getProducts = async () => {
        try{
          const list = await productData
          setProductList(list)
        }catch(error){
          console.log(error)
        }finally{
          setLoading(false)
        }
      }
  
      useEffect(()=>{
        getProducts()
      },[])
  return (
    <div>
       {loading ? <div style={styles.loading}><img style={styles.loadingGif}src={loadingGif} alt="loading" /></div>: 
            <div style={styles.landing}>
            <div><img style={styles.gear}src={gear} alt="gear" /></div>
            <span style={styles.greeting}>{greeting}</span>
        </div> }
        {loading ? <p></p>: <ItemList productList={productList}/> }        
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
    },
    landing:{ 
        width: '100%',
        height: 'calc(100vh - 60px)',
        display: 'flex',
        flexDirection: 'column' ,
        justifyContent: 'center',
        alignItems: 'center',
        wrap: 'wrap'
    },
    gear: {
        width: '100%',
        padding: 10
    },
    greeting:{
        fontSize: '100%' ,
        color: 'black' ,
        fontFamily: 'Roboto',
        fontWeight: 'bold' ,
    }
}
export default ItemListContainer;