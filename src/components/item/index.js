import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({product}) => {
  const {img, name, description, price}= product

  return (
    <div style={styles.itemCard}>
        <h3 style={styles.names}>{name}</h3>
        <img style={styles.images} src={img} alt= 'img'/>
        <p style={styles.paragraph}>{description}</p>
        <p style={styles.price}>Price: {price} USD</p>
        <div>
        {product.stock === 0 ? (
            <div style={ styles.na}>
              <p>Product not Available</p>
            </div>
          ) : (
            <div>
                <Link to={`/detail/${product.id}`} style={styles.more}>More Info</Link>
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
        justifyContent: 'space-between',
        alignItems: 'center',  
        background: '#D9BEBE', 
        MarginTop: '10%',
        margin: '1%',
        border: '1px',
        borderRadius:'30px',
        boxShadow: 'inset 0 0 5px black'
    },
    names:{
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: '28px',
        padding:'12px',
        marginBottom: '5px'
    },
    paragraph:{
        width: '80%',
        height: '40px',
        textAlign: 'center',
        fontFamily: 'Roboto',
    },
    price:{
        width: '55%',
        height: '22px',
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontWeight: 'bold' 
    },
    images:{
        width:'65%',
        height: '150px',
        marginBottom: '10px'
    },
    more:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '234px',
        height: '44px',
        background: '#CD5C5C',
        color: 'white',
        textDecoration: 'none',
        borderRadius:'50px',
        marginBottom: '20px'
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