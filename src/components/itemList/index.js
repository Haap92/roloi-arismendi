import React from 'react'
import Item from '../item'

const ItemList = ({products}) => {
  
  return (
    <div>
        <div style={styles.list}>
        {products.map((product)=><Item key={product.id} product={product}/>)}
        </div>
    </div>
  )
}

const styles={
    list:{
        display:'flex', 
        justifyContent:'center', 
        alignItems:'center', 
        flexWrap:'wrap'
    }
}
export default ItemList