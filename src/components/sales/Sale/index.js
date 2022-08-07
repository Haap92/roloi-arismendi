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
  const [errors, setErrors] = useState({});

  let navigate = useNavigate();
  const initialForm = {
    name: " ",
    lastname: " ",
    email: " ",
  };
  const validations = (form) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  
    if (!form.name.trim()) {
      errors.name = "Name it's required";
    } else if (!regexName.test(form.name.trim())) {
      errors.name = "Name only accepts characters and spaces";
    }
    if (!form.lastname.trim()) {
      errors.lastname = "Lastname it's required";
    } else if (!regexName.test(form.lastname.trim())) {
      errors.lastname = "Lastname only accepts characters and spaces";
    }
  
    if (!form.email.trim()) {
      errors.email = "Email it's required";
    } else if (!regexEmail.test(form.email.trim())) {
      errors.email = "Email it's incorrect";
    }
  
    return errors;
  };

  const [form, setForm] = useState(initialForm);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  
  const handleBlur = (e) => {
    handleInputChange(e);
    setErrors(validations(form));
  };


  const buyerInfo = form;

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

    productsCart.forEach((product) => {
      const updateCollection = doc(db, "products", product.id);
      updateDoc(updateCollection, { stock: product.stock - product.qty });
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validations(form));
    endSale();
  };


  const buySend = () => {
    if (Object.keys(errors).length === 0) {
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
  }
  useEffect(() => {
    if (idSale) {
      buySend();
    }
  });

  return (
    <div style = { styles.container}>
      <div>
        <form onSubmit={handleSubmit}  style= { styles.container}>
          <h2>Provide us with your Information:</h2>
          <div style={styles.form}>
            <p>Name</p>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              onBlur={handleBlur}
              onChange={handleInputChange}
              value={form.name}
              required
            />
            {errors.name && <p style={styles.errors}>{errors.name}</p>}
            </div>
            <div style={styles.form}>
            <p>Lastname</p>
            <input
              type="text"
              placeholder="Your Lastname"
              name="lastname"
              onBlur={handleBlur}
              onChange={handleInputChange}
              value={form.lastname}
              required
            />
            {errors.lastname && <p style={styles.errors}>{errors.lastname}</p>}
            </div>
            <div style={styles.form}>
            <p>Email</p>
            <input
              type="e_mail"
              placeholder="Your Email"
              name="email"
              onBlur={handleBlur}
              onChange={handleInputChange}
              value={form.email}
              required
            />
            {errors.email && <p style={styles.errors}>{errors.email}</p>}
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
        alignContent: 'center',
        paddingBottom: 200
    },
    form:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        textAlign: 'left',
        marginBottom: '25px'
    },
    sendOrder:{
        display:'flex',
        width: '108px',
        height: '44px',
        background: '#932D30',
        color: '#E6E8E5',
        textDecoration: 'none',
        borderRadius:'50px',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        marginTop: '20px',
        cursor:'pointer'
    },
    errors:{
      display:'flex',
      color:'red',
      marginBottom: '-25px'
    }
}
export default Sale;