import React from 'react';
import CartWidget from "../CartWidget";
import logo from "../../assets/images/logo.svg"
const menuItems = [
    {
      id: "1",
      label: "HOME",
    },
    {
      id: "2",
      label: "ANALOG",
    },
    {
      id: "3",
      label: "DIGITAL",
    },
    {
      id: "4",
      label: "SMART",
    },
    {
      id: "5",
      label: "VINTAGE",
    },
  ];

const NavBar = () => {
   return (
    <nav style={styles.navbar}>
      <img style={styles.logo}src={logo} alt="Roloi" />
      <div>
        {menuItems.map((item) => (
          <a href="/" style={styles.anchors} key={item.id}>
            {item.label}
          </a>
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
        justifyContent: 'space-between',
        alignItems: 'center',  
        background: '#D9BEBE',  
    },
    logo: {
        width: '5%',
        padding: 10
    },
    anchors: {
        padding: 10 ,
        textDecoration: 'none' ,
        fontSize: '100%' ,
        color: 'black' ,
        fontFamily: 'Roboto',
        fontWeight: 'bold' , 
    }
} 

export default NavBar