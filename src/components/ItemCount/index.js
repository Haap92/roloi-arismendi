import React, { useState } from 'react'

const ItemCount = ({name, initial, stock, onAdd}) => {
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
    <div style={styles.ItemCounter}>
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

    ItemCounter:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },

    buttonbar:{
        margin: '5%',
        width: '50%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '234px',
        height: '44px',
        background: '#CD5C5C',
        color: 'white',
        textDecoration: 'none',
        borderRadius:'50px',
        marginBottom: '20px'
    }
}
export default ItemCount