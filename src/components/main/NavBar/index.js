import React from 'react';
import CartWidget from "../../main/CartWidget";
import logo from "../../../assets/images/logo.svg"
import { Link } from 'react-router-dom'
const menuItems = [
    {
      id: "1",
      path: '/',
      label: "HOME",
    },
    {
      id: "2",
      path: '/category/analog',
      label: "ANALOG",
    },
    {
      id: "3",
      path: '/category/digital',
      label: "DIGITAL",
    },
    {
      id: "4",
      path: '/category/smart',
      label: "SMART",
    },
    {
      id: "5",
      path: '/category/vintage',
      label: "VINTAGE",
    },
  ];

const NavBar = () => {
   return (
    <nav style={styles.navbar}>
      <Link to='/' style={styles.logo}><img src={logo} alt="Roloi" /></Link>
      <div>
        {menuItems.map((cat) => (
          <Link to={cat.path} key={cat.id} style={styles.anchors}>
            {cat.label}
          </Link>
        ))}
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
        width: 'auto' ,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',  
        background: '#D9BEBE',  
    },
    logo: {
        display: 'flex',
        width: '5%',
        padding: 10
    },
    anchors: {  
      padding: 10 ,
      textDecoration: 'none' ,
      fontSize: '100%' ,
      color: 'black' ,
      fontFamily: 'Roboto',
      fontWeight: 'bold'
    }
} 

export default NavBar