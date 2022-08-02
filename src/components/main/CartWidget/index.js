import React from "react";
import sbag from "../../../assets/images/sbag.svg";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { cartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { qtyProducts } = useContext(cartContext);

  if (qtyProducts === 0) {
    return (
    <div style={styles.buttonbag}>
    <Link to='/cart'>
      <img src={sbag} alt="Bag Icon" style={styles.bag} />
    </Link>
    <p style={styles.cartQty}></p>
  </div>
  );
} else{
  return (
    <div style={styles.buttonbag}>
      <Link to='/cart'>
        <img src={sbag} alt="Bag Icon" style={styles.bag} />
      </Link>
      <p style={styles.cartQty}>{qtyProducts}</p>
    </div>
  );
};
};

const styles = {

    buttonbag: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'none',
      color: 'inherit', 
      border: 'none',
      cursor: 'pointer',
      outline: 'inherit',
      width: '2rem',
      height: '2rem',
      padding: 10,
      marginRight: '32px'
    },
    bag: {
      display: 'flex',
      width: '35px',
      marginRight: '10px'
    },
    cartQty: {
      display: 'flex',
      color: '#E6E8E5',
      fontWeight: 'bold',
      fontSize: '1.8rem',
      marginRight: '32px'
    }
}
export default CartWidget;