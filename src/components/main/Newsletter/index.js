import React, { useState, useEffect } from 'react';
import { db } from "../../../firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import Swal from "sweetalert2";

const Newsletter = () => {

    const [errors, setErrors] = useState({});
    const [idEmailInNewsLetter, setIdEmailInNewsLetter] = useState("");
    const initialForm = {
        email: " ",
      };
      const validations = (form) => {
        let errors = {};
        let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
      
        if (!regexEmail.test(form.email.trim())) {
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
    
    
      const NewsletterEmail = form;
      const emailInDB = () => {
        const newsletterCollection = collection(db, "newsletter");
        const date = serverTimestamp() 
        addDoc(newsletterCollection, {
            NewsletterEmail,
            date: date,
        }).then((result) => {
            setIdEmailInNewsLetter(result.id);
          });
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validations(form));
        emailInDB();
        };

    const sendEmail = () => {
        if (Object.keys(errors).length === 0){
        Swal.fire({
            icon: "success",
            title: "Confirmation",
            html: "Congratulations, you have been subscribed to our Newsletter",
            confirmButtonText: "Accept",
            confirmButtonColor: "#CD5C5C"
            })}
            };
    useEffect(() => {
        if (idEmailInNewsLetter) {
            sendEmail();
            }
        });

        

  return (
    <div>
        <form onSubmit={handleSubmit} style={styles.footSearching}>
        <h3>Subscribe to our Newsletter!!</h3>
        <div style={styles.flexRow}>
        <div style={styles.formSearching}>        
        <input
              type="e_mail"
              placeholder="Your Email"
              name="email"
              onBlur={handleBlur}
              onChange={handleInputChange}
              value={form.email}
              required
              style={styles.footBar}
            />
            {errors.email && <p style={styles.errors}>{errors.email}</p>}
        </div>
        <button style={styles.go}>
            GO
        </button>
        </div>
        </form>
    </div>
  )
}

const styles = {
    footSearching:{
        dipslay: 'flex',
        flexDirection: 'column',
        widht: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px',
        textDecoration: 'none' ,
        fontSize: '100%' ,
        color: '#E6E8E5' ,
        fontFamily: 'Roboto',
        fontWeight: 'bold'
    },
    formSearching:{
        dipslay: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footBar:{
        dipslay: 'flex',
        justifyContent: 'center',
        background: '#FFFFFF',
        borderRadius: '50px',
        padding: 10,
        margin: '10px'
    },
    errors:{
        dipslay: 'flex',
        color: 'red',
        fontWeight: '10',
        marginBottom: '-25px'
    },
    go:{
        dipslay: 'flex',
        fontWeight: 'bold',
        background: '#932D30',
        widht: '100%',
        heidht: '100%',
        borderRadius: '50px',
        padding: 10,
        color: '#E6E8E5',
        cursor:'pointer'
    },
    flexRow:{
        display: 'flex',
        flexDirection: 'row'
    }
}

export default Newsletter;
