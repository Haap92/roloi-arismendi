import React, { useState } from 'react';
import Swal from "sweetalert2";


const ItemCount = ({name, initial, stock, onAdd}) => {
    const [count, setCount]=useState(initial)
    const incrementCount = () => {
        if (count < stock) {
            setCount((currentCount)=> currentCount+1);
        }else{
            Swal.fire({
                text: `Maximum stock for this product`,
                confirmButtonColor: "#932D30"
              })
        }
    }
    const decrementCount = () => {
        if (count > initial) {
            setCount((currentCount)=> currentCount-1);
        }else{
            Swal.fire({
                text: `Can't go below 1`,
                confirmButtonColor: "#932D30"
              })
        }
    }
    const addingBag = () =>{
        if(count < initial || count > stock) {
            Swal.fire({
                icon: "error",
                title: `ERROR`,
                text: `Can't Add ${count} to bag`,
                confirmButtonColor: "#932D30"
              })
        }else{
            Swal.fire({
                icon: "success",
                title: `${name}`,
                text: `${count} Added to bag`,
                confirmButtonColor: "#932D30"
              })
            onAdd(count)
        }
    }
    
  return (
    <div style={styles.ItemCounter}>
        <div style={styles.buttonbar}>
            <button style={styles.minus} onClick={decrementCount}>- </button>
            <span style={styles.counter}>{count}</span>
            <button style={styles.plus} onClick={incrementCount}>+</button>
        </div>
        <button style={styles.adding} onClick={addingBag}>ADD TO BAG</button>
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
        display: 'flex',
        backgroundColor: '#932D30',
        color:'#E6E8E5',
        fontWeight: 'bold',
        fontSize: '20px',
        borderRadius: '50px',
        cursor:'pointer'
    },
    minus:{
        display: 'flex',
        backgroundColor: '#932D30',
        color:'#E6E8E5',
        fontWeight: 'bold',
        fontSize: '20px',
        borderRadius: '60px',
        cursor:'pointer'
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
        background: '#932D30',
        color: '#E6E8E5',
        textDecoration: 'none',
        borderRadius:'50px',
        marginBottom: '20px',
        cursor:'pointer'
    }
}
export default ItemCount