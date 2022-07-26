import React from 'react';
import { useContext } from 'react';
import { cartContext } from "../../context/CartContext";

const Cart = () => {
    const { productsCart, deleteItem, calcTotal, clearCart } = useContext(cartContext);

    if (productsCart.length === 0) {
        return <h2 style={styles.empty}>Your cart it's empty.</h2>;
    }

    return (
        <div>
            <div>
                {productsCart.map((product) => (
                    <div key={product.id} style={styles.cartProduct}>
                        <div>
                            <img src={product.img} width="70px" alt="product" />
                        </div>
                        <h2> {product.name} </h2>
                        <h2> Price: {product.price}$ </h2>
                        <h2> Qty: {product.qty} </h2>
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
                    <h3>Total:  {calcTotal()} $ </h3>
                    <button style={styles.clearCart} onClick={() => clearCart()}>
                        Clear Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

const styles = {

    empty:{
        display: 'flex',
        justifyContent: 'center',
        alignContet: 'center'
    },
    cartProduct:{
        display: 'flex',
        border: '2px solid #CD5C5C',
        margin: '10px',
        padding: '10px',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    deleteProduct:{
        display:'flex',
        width: '66px',
        height: '44px',
        background: '#CD5C5C',
        color: 'white',
        textDecoration: 'none',
        borderRadius:'50px',
        justifyContent: 'center',
        alignItems: 'center'
    },
    clearCart:{
        display:'flex',
        width: '108px',
        height: '44px',
        background: '#CD5C5C',
        color: 'white',
        textDecoration: 'none',
        borderRadius:'50px',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '15px'
    },
    totalClear:{
        display: 'flex',
        width: '45%',
        justifyContent: 'space-between',
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
    }
}

export default Cart;