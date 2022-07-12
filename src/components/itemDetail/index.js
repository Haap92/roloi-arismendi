import React, { useContext, useState } from "react";
import ItemCount from '../ItemCount';
import { Link } from "react-router-dom";
import { cartContext } from "../../context/CartContext";

const ItemDetail = ({productDetail}) => {

  const [buyfinalized, setBuyFinalized] = useState(false);
  const { addCartProduct } = useContext(cartContext);

  const onAdd = (amount) => {
    addCartProduct({ ...productDetail, cantidad: amount });
    setBuyFinalized(true);
  };

    return (
      <div style={styles.detailContainer}>
        <div style={styles.detailCard}>
        <h2 style={styles.detailTitle}>{productDetail.name}</h2>
          <div style={styles.detailRow}>
            <img style={styles.detailImg} src={productDetail.img} alt={productDetail.name}/>
            <div style={styles.detailDesc}>
              <p style={styles.detailPara}>{productDetail.description}</p>
              <p style={styles.detailPrice}>Price: {productDetail.price} USD</p>
              <div>
              {buyfinalized ? (
                <Link to="/cart">
                  <button style={styles.goToCart}>Go to Cart</button>
                </Link>
              ) : (
                <ItemCount style={styles.detailCounter} name={productDetail.name} stock={productDetail.stock} initial={1} onAdd={onAdd} />
                )}
              </div>
            </div>
          </div> 
        </div>
      </div>
      )
    }

const styles ={

  detailContainer:{
    display: 'flex',
    flexDirection: 'row' ,
    justifyContent: 'center',
    alignItems: 'center'
  },

  detailCard:{
    height: '500px' ,
    width: '600px' ,
    display: 'flex',
    flexDirection: 'column' ,
    justifyContent: 'space-evenly',
    alignItems: 'center',  
    background: '#D9BEBE', 
    MarginTop: '10%',
    margin: '1%',
    border: '1px',
    borderRadius:'30px',
    boxShadow: 'inset 0 0 5px black'
  },
  detailTitle:{
    display: 'flex',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: '28px',
    paddinTop: '10px'
  },
  detailRow:{
    display: 'flex',
    flexDirection: 'row' 
  },
  detailImg:{
    display: 'flex',
    width:'300px',
    height: '300px',
    marginLeft: '30px'
  },
  detailDesc:{
    display: 'flex',
    flexDirection: 'column' ,
    paddinTop: '10px'
  },
  detailPara:{
    display: 'flex',
    width: '80%',
    height: '40px',
    fontFamily: 'Roboto',
    fontSize: '20px',
    marginLeft: '30px',
    marginBottom: '100px'
  },
  detailPrice:{
    display: 'flex',
    width: '80%',
    height: '40px',
    fontFamily: 'Roboto',
    fontSize: '24px',
    marginLeft: '85px',
    marginBottom: '5px'
  },
  goToCart:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '234px',
    height: '44px',
    background: '#CD5C5C',
    color: 'white',
    textDecoration: 'none',
    borderRadius:'50px',
    marginLeft: '40px'
}
}
export default ItemDetail;