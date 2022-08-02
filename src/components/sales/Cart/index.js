import React from 'react';
import { useState, useContext } from 'react';
import { cartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";
import Sale from "../Sale"

const Cart = () => {
    const { productsCart, deleteItem, total, clearCart } = useContext(cartContext);
    const [buyFinalized, setBuyFinalized] = useState(false);

    const finishBuy = () => {
        setBuyFinalized(true);
    };

    if (productsCart.length === 0) {
        return <div style={styles.empty}>
                    <h2>YOUR CART IS EMPTY.</h2>
                    <Link to="/products" style={styles.goToProducts}>
                       START BUYING
                    </Link>
                </div>;
    }

    return (
        <div>
            <div>
                {productsCart.map((product) => (
                    <div key={product.id} style={styles.cartProduct}>
                        <div>
                            <img src={product.img} width="70px" alt="product" />
                        </div>
                        <h2 style={styles.name}> {product.name} </h2>
                        <h2 style={styles.price}> Price {product.price}$ </h2>
                        <h2 style={styles.qty}> Qty {product.qty} </h2>
                        <button style={styles.deleteProduct} onClick={() => deleteItem(product.id)}>
                            Delete
                        </button>
                    </div>
                ))}
            </div>
            <div style={styles.containerRow}>
                <div style={styles.placeholder}>
                    <p> </p>
                </div>
                <div style={styles.totalClear}>
                    <h3 style={styles.total}>Total:  {total} $ </h3>
                    <button style={styles.clearCart} onClick={() => clearCart()}>
                        Clear Cart
                    </button>
                </div>
                </div>
            <div>
          {buyFinalized ? (
            <Sale/>
          ) : (
            <div style={ styles.order }>
              <button onClick={finishBuy} style={styles.createOrder} >
                Create Order
              </button>
            </div>
          )}

        </div>
    </div>
    );
};

const styles = {

    empty:{
        display: 'flex',
        fontFamily: 'roboto',
        justifyContent: 'center',
        alignContet: 'center',
        alignItems: 'center',
        flexDirection: 'column', 
        marginTop: '25px'
    },
    cartProduct:{
        display: 'flex',
        border: '2px solid #932D30',
        margin: '10px',
        padding: '10px',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    name:{
        textAlign: 'left',
        width: '100%',
        paddingLeft: 25
    },
    price:{
        textAlign:'center'
    },
    qty:{
        textAlign: 'center',
        paddingRight: 15
    },
    deleteProduct:{
        display:'flex',
        width: '66px',
        height: '44px',
        background: '#932D30',
        color: '#E6E8E5',
        textDecoration: 'none',
        borderRadius:'50px',
        justifyContent: 'center',
        alignItems: 'center',
        cursor:'pointer'
    },
    total:{
        textAlign: 'right',
        paddingRight: 30
    },
    clearCart:{
        display:'flex',
        width: '108px',
        height: '44px',
        background: '#932D30',
        color: '#E6E8E5',
        textDecoration: 'none',
        borderRadius:'50px',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '15px',
        cursor:'pointer'
    },
    totalClear:{
        display: 'flex',
        width: '45%',
        justifyContent: 'right',
        alignItems: 'center'
    },
    h3Total:{
        display: 'flex',
        marginLeft: '5px',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: '28px' 
    },
    containerRow:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContet: 'center' 
    },
    placeholder:{
        width: '45%',
        display: 'flex',
        justifyContent: 'center',
        alignContet: 'center'
    },
    order:{
        display: 'flex',
        justifyContent: 'center',
        alignContet: 'center',
        alignItems: 'center',
        paddingBottom: 200
    },
    createOrder:{
        display:'flex',
        width: '408px',
        height: '44px',
        background: '#932D30',
        color: '#E6E8E5',
        textDecoration: 'none',
        borderRadius:'50px',
        marginRight: '15px',
        marginTop:'55px',
        justifyContent: 'center',
        alignContet: 'center',
        alignItems: 'center',
        cursor:'pointer'
    },
    goToProducts:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '234px',
        height: '44px',
        background: '#932D30',
        color: '#E6E8E5',
        textDecoration: 'none',
        borderRadius:'50px',
        marginBottom: '20px'
    }
}

export default Cart;