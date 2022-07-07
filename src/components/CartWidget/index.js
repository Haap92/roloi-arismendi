import React from "react";
import sbag from "../../assets/images/sbag.svg";
import { Link } from 'react-router-dom'

const CartWidget = () => {
  return (
    <div style={styles.buttonbag}>
      <Link to='/cart'>
        <img src={sbag} alt="Bag Icon" style={styles.bag} />
      </Link>
    </div>
  );
};

const styles = {

    buttonbag: {
        background: 'none',
        color: 'inherit', 
        border: 'none',
        cursor: 'pointer',
        outline: 'inherit',
        width: '2rem',
        height: '2rem',
        padding: 10
    },
    bag: {
        width: '100%',
    }
}
export default CartWidget;