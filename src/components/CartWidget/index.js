import React from "react";
import sbag from "../../assets/images/sbag.svg";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { cartContext } from "../../context/CartContext";

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
      marginRight: '7px'
    },
    bag: {
      display: 'flex',
      width: '35px',
    },
    cartQty: {
      display: 'flex',
      color: 'gray',
      fontWeight: 'bold',
      fontSize: '1.8rem',
      marginLeft: '3px'
    }
}
export default CartWidget;