import React from "react";
import sbag from "../../assets/images/sbag.svg";

const CartWidget = () => {
  return (
    <div style={styles.buttonbag}>
      <button>
        <img src={sbag} alt="Bag Icon" style={styles.bag} />
      </button>
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