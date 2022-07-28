import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { cartContext } from "../../../context/CartContext";
import { db } from "../../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { collection, addDoc, serverTimestamp, doc, updateDoc } from "firebase/firestore";
import Swal from "sweetalert2";

const Sale = () => {
  const { productsCart, total, clearCart } = useContext(cartContext);
  const [idSale, setIdSale] = useState("");
  let navigate = useNavigate();
  const initialSatateValues = {
    name: " ",
    lastname: " ",
    email: " ",
  };

  const [values, setValues] = useState(initialSatateValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const buyerInfo = values;

  const endSale = () => {
    const salesCollection = collection(db, "sales");
    const date = serverTimestamp() 
    addDoc(salesCollection, {
        buyerInfo,
        items: productsCart,
        date: date,
        total: total
    }).then((result) => {
      setIdSale(result.id);
    });
console.log(endSale)

    productsCart.forEach((product) => {
      const updateCollection = doc(db, "products", product.id);
      updateDoc(updateCollection, { stock: product.stock - product.qty });
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    endSale();
  };

  const buySend = () => {
    Swal.fire({
      icon: "success",
      title: "Confirmation",
      html: `<p>We have succesfully received your order under the tracking number:<p>${idSale}`,
      confirmButtonText: "Accept",
      confirmButtonColor: "#CD5C5C"
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        return navigate("/");
      }
    });
  };

  useEffect(() => {
    if (idSale) {
      buySend();
    }
  });

  return (
    <div style = { styles.container}>
      <div>
        <form onSubmit={handleSubmit}  style= { styles.form}>
          <h2>Provide us with your Information:</h2>
          <div>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              placeholder="Your Lastname"
              name="lastname"
              onChange={handleInputChange}
              required
            />
            <input
              type="e_mail"
              placeholder="Your Email"
              name="email"
              onChange={handleInputChange}
              required
            />
          </div>
          <button style={styles.sendOrder}>Send Order</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
    container:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    form:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    sendOrder:{
        display:'flex',
        width: '108px',
        height: '44px',
        background: '#CD5C5C',
        color: 'white',
        textDecoration: 'none',
        borderRadius:'50px',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        marginTop: '20px'
    }
}
export default Sale;