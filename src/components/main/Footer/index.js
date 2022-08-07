import React from 'react';
import logo from "../../../assets/images/logo.svg";
import GH from "../../../assets/images/GH.png";
import LI from "../../../assets/images/LI.png";
import { Link } from 'react-router-dom';
import Categories from '../Categories';
import Newsletter from '../Newsletter'

const Footer = () => {
    return(
        
        <footer style={styles.footRow}>
                    <section style={styles.footColumn}>
                        
                        <div style={styles.footSocialRow}>
                        <a href='https://github.com/Haap92' rel='noreferrer' target="_blank" ><img style={styles.logoGH} src={GH} alt="Github Haap92" />
                        </a>
                        <a href='https://www.linkedin.com/in/hernanarismendi/' rel='noreferrer' target="_blank" ><img style={styles.logoLI} src={LI} alt="Roloi" />
                        </a> 
                        </div>
                    </section>
                    <section style={styles.center}>
                        <div style={styles.footDown}>
                        <Link to='/' style={styles.logo}><img src={logo} alt="Roloi" /></Link>
                        </div>
                        <div style={styles.footAnchors}>
                        <Categories/>
                        </div>
                    </section>
                    <section style={styles.footSearch}>
                        <Newsletter />
                        <div style={styles.legal}>
                            Copyright 2022. All Rights Reserved
                        </div>
                    </section>
                </footer>

    )
}
const styles = {
    
    footRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#B76369',
        position: 'absolute',
        bottom: '0',
        width: '100%',
    },
    footSocialRow:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        background: '#B76369',
        marginLeft: '50px'
    },
    center:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: '65px'
    },
    logo: {
        display: 'flex',
        width: 'auto',
        height: '100px',
        padding: 15
    },
    logoGH: {
        display: 'flex',
        width: 'auto',
        height: '65px',
        padding: 15
    },
    logoLI: {
        display: 'flex',
        width: 'auto',
        height: '90px',
        padding: 4
    },
    footColumn:{
        dipslay: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    footDown:{
        display: 'flex',
        justifyContent: 'center',
        fontWeight: '500',
        fontSize: '20px',
        lineHeight: '18px',
        alignItems: 'center',
        color: '#E6E8E5',
        margin: '10px 0 10px 0',
        
    },
    footAnchors:{
        marginBottom: '15px'
        
    },
    footSearch:{
        dipslay: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: '20px 70px 0 0 '
    },
    legal:{
        display: 'flex',
        fontWeight: '500',
        fontSize: '14px',
        lineHeight: '18px',
        color: '#E6E8E5',
        marginTop: '35px'
    }
  
} 

export default Footer