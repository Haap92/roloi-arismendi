import React, { useEffect, useState } from 'react';
import gear from "../../assets/images/gear.svg";
import ItemList from "../itemList";
import { productsData } from '../../mocks/productsmock';
import loadingGif from "../../assets/images/loading.gif"
import { useParams } from 'react-router-dom'

const Landing = ({greeting},{gimg}) => {
    const [products, setProducts]=useState([]);
    const [loading, setLoading]=useState(true);

    const { categoryId } = useParams();
      useEffect(()=>{
        productsData(categoryId)
        .then((res) => {
          setProducts(res);
      })
      .catch((error) => {
          console.log(error);
      })
      .finally(() => {
          setLoading(false);
      });
      },[categoryId])
  return (
    <div>
       {loading ? <div style={styles.loading}><img style={styles.loadingGif}src={loadingGif} alt="loading" /></div>: 
            <div style={styles.landing}>
            <div><img style={styles.gear}src={gear} alt="gear" /></div>
            <span style={styles.greeting}>{greeting}</span>
        </div> }
        {loading ? <p></p>: <ItemList products={products}/> }        
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

export default Landing;