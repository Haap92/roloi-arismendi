import React from 'react';
import gear from "../../../assets/images/gear.svg";
import ItemListContainer from '../../../containers/ItemListContainer';

const Landing = ({greeting}) => {

  return (
    <div>
     <div style={styles.landing}>
        <div><img style={styles.gear}src={gear} alt="gear" /></div>
        <span style={styles.greeting}>{greeting}</span>
     </div>
     <div>
        <ItemListContainer/>
     </div>        
    </div>
  );
};

const styles = {
    loading:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '15%'
    },
    loadingGif:{
        display: 'flex',
        width: '10%'
    },
    landing:{ 
        width: '100%',
        height: 'calc(100vh - 60px)',
        display: 'flex',
        flexDirection: 'column' ,
        justifyContent: 'center',
        alignItems: 'center',
        wrap: 'wrap'
    },
    gear: {
        width: '100%',
        padding: 10
    },
    greeting:{
        fontSize: '100%' ,
        color: 'black' ,
        fontFamily: 'Roboto',
        fontWeight: 'bold' ,
    }
}

export default Landing;