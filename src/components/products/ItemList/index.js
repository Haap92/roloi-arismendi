import React from 'react'
import Item from '../Item'

const ItemList = ({products}) => {
  
  return (
    <div style={styles.list}>
      {products.map((product)=><Item key={product.id} product={product}/>)}
    </div>
  )
}

const styles={
    list:{
        display:'flex', 
        justifyContent:'center', 
        alignItems:'center', 
        flexWrap:'wrap',
        gap: '2rem',
        margin: '2rem 2vw',
        listStyleType: 'none',
        paddingBottom: 200
    }
}
export default ItemList