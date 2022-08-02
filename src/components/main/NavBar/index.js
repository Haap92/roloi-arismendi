import React from 'react';
import CartWidget from "../../main/CartWidget";
import logo from "../../../assets/images/logo.svg"
import { Link } from 'react-router-dom'
import Categories from '../Categories';

const NavBar = () => {
   return (
    <nav style={styles.navbar}>
      <Link to='/' style={styles.logo}><img src={logo} alt="Roloi" /></Link>
      <div  style = { styles.Order}>
        <Categories />
      </div>
      <div>
        <CartWidget />
      </div>
    </nav>
  );
};

const styles = {
    
    navbar: {
        height: 'auto' ,
        width: '100%' ,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',  
        background: '#B76369'
    },
    logo: {
        display: 'flex',
        width: '5%',
        padding: 10,
        marginLeft: '35px'
    },
    order:{
      dipslay: 'flex',
      flexDirection: 'row'
  },
} 

export default NavBar