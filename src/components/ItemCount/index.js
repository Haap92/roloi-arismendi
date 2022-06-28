import React, { useState } from 'react'

const ItemCount = ({name, img, description, initial, stock, onAdd}) => {
    const [count, setCount]=useState(initial)
    const incrementCount = () => {
        if (count < stock) {
            setCount((currentCount)=> currentCount+1);
        }else{
            alert('Maximum stock for this product')
        }
    }
    const decrementCount = () => {
        if (count > initial) {
            setCount((currentCount)=> currentCount-1);
        }else{
            alert('Cant go below 1')
        }
    }
    const addingBag = () =>{
        if(count < initial || count > stock) {
            alert('Cant add '+ count + ' to bag')
        }else{
            alert(count + ' '+ name + ' added to bag')
            onAdd(count)
        }
    }
    
  return (
    <div style={styles.itemCard}>
        <h3>{name}</h3>
        <img style={styles.images} src={img} alt= 'img'/>
        <p style={styles.paragraph}>{description}</p>
        <div style={styles.buttonbar}>
            <button style={styles.minus} onClick={decrementCount}>-</button>
            <span style={styles.counter}>{count}</span>
            <button style={styles.plus} onClick={incrementCount}>+</button>
        </div>
        <button style={styles.adding} onClick={addingBag}>Add to Bag</button>
    </div>
  )
}

const styles ={
    itemCard:{
        height: '45%' ,
        width: '22%' ,
        display: 'flex',
        flexDirection: 'column' ,
        justifyContent: 'space-between',
        alignItems: 'center',  
        background: '#D9BEBE', 
        MarginTop: '10%',
        margin: '1%',
        border: '1px',
        borderRadius: '5px'
    },
    paragraph:{
        width: '80%',
        height: '40px',
        textAlign: 'center'
    },
    images:{
        width:'65%',
        height: '150px'
    },
    buttonbar:{
        margin: '5%',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-evenly'
    },
    plus:{
        backgroundColor: 'green',
        color:'white',
    },
    minus:{
        backgroundColor: 'red',
        color:'white',
    },
    counter:{
        fontSize: '120%'
    },
    adding:{
        marginBottom: '10%',
        width: '60%',
        backgroundColor: 'teal',
        color: 'white'
    }
}
export default ItemCount