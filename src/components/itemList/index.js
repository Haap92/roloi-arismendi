import React from 'react'
import Item from '../item'

const ItemList = ({productList}) => {
  return (
    <div>
        <div style={styles.list}>
        {productList.map((product)=><Item key={product.id} product={product}/>)}
        </div>
    </div>
  )
}

const styles={
    list:{
        display:'flex', 
        justifyContent:'space-between', 
        alignItems:'center', 
        flexWrap:'wrap'
    }
}
export default ItemList