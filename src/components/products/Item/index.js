import React from 'react';
import {useState} from 'react';
import { Link } from 'react-router-dom';


const Item = ({product}) => {
  const {img, name, price}= product
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <div style={styles.itemCard}>
    {product.stock === 0 ? ( 
    <div style={styles.info}>
            <img style={styles.images} src={img} alt= 'img'/>
            <h3 style={styles.names}>{name}</h3>
            <span style={ styles.na}>N/A</span>
    </div>
    ) : (
    <Link to={`/detail/${product.id}`} style={{
        textDecoration: 'none',
        borderRadius: isHovering ? '30px' : '',
        boxShadow:  isHovering ? 'inset 0 0 5px black' : '',
        color: isHovering? '#932D30' : 'black',
    }}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave} >
            <div style={styles.info}>
                <img style={styles.images} src={img} alt= 'img'/>
                <h3 style={styles.names}>{name}</h3>
                <span style={styles.price}>Price: {price} USD</span>
            </div>
    </Link>               
    )}
    </div>
  )}

const styles ={
    itemCard:{
        height: 'auto' ,
        width: '22%' ,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        MarginTop: '10%',
        border: '1px',
        borderRadius:'30px',
    },
    info:{
        display: 'flex', 
        flexDirection: 'column',
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        alignItems: 'center'
    },
    names:{
        display: 'flex',
        fontSize: '16px',
        margin: '0 5px'
    },
    price:{
        display: 'flex',
        fontSize: '12px',
        margin: '10px 5px'
    },
    images:{
        display: 'flex', 
        width:'80%',
        height: 'auto',
        margin: '10px 10px 10px 10px',
        borderRadius:'50px 50px 50px 50px'
    },
    na:{
        display: 'flex', 
        color:'red'
    }
}
export default Item