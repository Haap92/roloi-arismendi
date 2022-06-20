import React from "react";
import gear from "../../assets/images/gear.svg"

const ItemListContainer = ({greeting}) => {
  return (
    <div style={styles.landing}>
        <div><img style={styles.gear}src={gear} alt="gear" /></div>
        <span style={styles.greeting}>{greeting}</span>
    </div>
  );
};

const styles = {
    landing:{ 
        width: '100%',
        height: 'calc(100vh - 60px)',
        display: 'flex',
        flexDirection: 'column' ,
        justifyContent: 'center',
        alignItems: 'center'
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
export default ItemListContainer;