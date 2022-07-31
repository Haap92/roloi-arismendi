import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({product}) => {
  const {img, name, price}= product

  return (
    <div style={styles.itemCard}>
        <h3 style={styles.names}>{name}</h3>
        <img style={styles.images} src={img} alt= 'img'/>
        <p style={styles.price}>Price: {price} USD</p>
        <div>
        {product.stock === 0 ? (
            <div style={ styles.na}>
              <p>Product not Available</p>
            </div>
          ) : (
            <div style={styles.more}>
                <Link to={`/detail/${product.id}`} style={styles.morea}>More Info</Link>
            </div>
          )}
         </div>
    </div>
  )}

const styles ={
    itemCard:{
        height: '500px' ,
        width: '22%' ,
        display: 'flex',
        flexDirection: 'column' ,
        justifyContent: 'space-evenly',
        alignItems: 'center', 
        alignContent: 'center',
        background: '#D9BEBE', 
        MarginTop: '10%',
        margin: '1%',
        border: '1px',
        borderRadius:'30px',
        boxShadow: 'inset 0 0 5px black'
    },
    names:{
        display: 'flex', 
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: '28px',
        padding:'12px',
        marginBottom: '5px'
    },
    price:{
        display: 'flex', 
        width: '55%',
        height: '22px',
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontWeight: 'bold' 
    },
    images:{
        display: 'flex', 
        width:'65%',
        height: '150px',
        marginBottom: '10px'
    },
    more:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '44px',
        background: '#CD5C5C',
        borderRadius:'50px',
        marginBottom: '20px'
    },
    morea:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '44px',
        color: 'white',
        textDecoration: 'none',
        margin: '20px'
    },
    na:{
        display: 'flex', 
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color:'red',
    }
}
export default Item