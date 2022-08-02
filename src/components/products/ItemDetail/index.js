import React, { useContext, useState } from "react";
import ItemCount from '../ItemCount';
import { Link } from "react-router-dom";
import { cartContext } from "../../../context/CartContext";

const ItemDetail = ({productDetail}) => {

  const [buyfinalized, setBuyFinalized] = useState(false);
  const { addCartProduct } = useContext(cartContext);
  

  const onAdd = (amount) => {
    addCartProduct({ ...productDetail, qty: amount });
    setBuyFinalized(true);
  };
console.log(productDetail)

    return (
      <div style={styles.detailContainer}>
          <div style={styles.detailRow}>
            <img style={styles.detailImg} src={productDetail.img} alt={productDetail.name}/>
            <div style={styles.detailColumn}>
              <h2 style={styles.detailTitle}>{productDetail.name}</h2>
              <div style={styles.detailDesc}>
                <span style={styles.detailPrice}>Price: {productDetail.price} USD</span>
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
        <div style={styles.detailRow}>
          <div style={styles.detailColumn}>
            <div>
              <h3 style={styles.detailTitle}>DESCRIPTION</h3>
              <p style={styles.detailPara}>{productDetail.description}</p>
            </div>
            <div>
              <h3 style={styles.detailTitle}>SPECIFICATIONS</h3>
              <p style={styles.detailPara}>{productDetail.specifications}</p>
            </div>
          </div>
          <div>
            <img style={styles.detailImg} src={productDetail.images} alt={productDetail.name}/>
          </div>
        </div>
      </div>
    
      )
    }

const styles ={

  detailContainer:{
    display: 'flex',
    flexDirection: 'column' ,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: '15px',
    padding: 10
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
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  detailColumn:{
    display: 'flex',
    flexDirection: 'column' 
  },
  detailImg:{
    display: 'flex',
    width:'50%',    
    marginLeft: '30px'
  },
  detailDesc:{
    display: 'flex',
    paddinTop: '10px',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
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
    height: '40px',
    fontFamily: 'Roboto',
    fontSize: '24px',
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
    marginLeft: '30px'
}
}
export default ItemDetail;