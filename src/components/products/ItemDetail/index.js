import React, { useContext, useState } from "react";
import ItemCount from '../ItemCount';
import { Link } from "react-router-dom";
import { cartContext } from "../../../context/CartContext";

const ItemDetail = ({productDetail}) => {

  const [buyfinalized, setBuyFinalized] = useState(false);
  const [current, setCurrent] = useState(0);
  const { addCartProduct } = useContext(cartContext);
  

  const onAdd = (amount) => {
    addCartProduct({ ...productDetail, qty: amount });
    setBuyFinalized(true);
  };

let specs = productDetail.specifications.slice()
let imgs = productDetail.images.slice()
const length = imgs.length
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(imgs) || imgs.length <= 0 ) {
        return null
    }
    return (
      <div style={styles.detailContainer}>
          <div style={styles.detailRow}>
          <section style={styles.slider}>
            <div style={styles.lefttArrow} onClick={prevSlide}>◄</div>
            {imgs.map((slide,index)=> {
                return(
                    <div
                    className={index === current ? 'slide active' : 'slide'}
                    key ={index}>
                        {index === current && (<img style={styles.image} src={slide} alt='product images' />)}
                    </div>
                ) 
            })}
            <div style={styles.rightArrow} onClick={nextSlide}>►</div>
        </section>
            <div style={styles.titleColumn}>
              <h2 style={styles.productTitle}>{productDetail.name}</h2>
              <div style={styles.detailDesc}>
                <span style={styles.detailPrice}>Price: {productDetail.price} USD</span>
                <div>
                {buyfinalized ? (
                  <Link to="/cart">
                    <button style={styles.goToCart}>GO TO CART</button>
                  </Link>
                ) : (
                  <ItemCount style={styles.detailCounter} name={productDetail.name} stock={productDetail.stock} initial={1} onAdd={onAdd} />
                )}
                </div>
              </div>
            </div> 
          </div>
        <div style={styles.detailRow}>
          <div style={styles.detailColumn}>
            <div>
              <h3 style={styles.detailTitle}>DESCRIPTION                   ▼</h3>
              <p style={styles.detailPara}>{productDetail.description}</p>
            </div>
            <div>
              <h3 style={styles.detailTitle}>SPECIFICATIONS                ▼</h3>
              <p style={styles.detailColumn}>{specs.map((item)=>
                <li style={styles.detailPara} key={`{item}`}>{item}</li>
              )}</p>
            </div>
          </div>
          <div style={styles.imgDetailColumn}>
            <img style={styles.listImg} src={productDetail.img} alt={productDetail.name}/>
          </div>
        </div>
      </div>
    
      )
    }

const styles ={

  detailContainer:{
    display: 'flex',
    flexDirection: 'column' ,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: '15px',
    padding: 10,
    paddingBottom: 200
  },
  productTitle:{
    display: 'flex',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: '28px',
    paddinTop: '10px'
  },
  titleColumn:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%'
  },
  detailTitle:{
    display: 'flex',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: '28px',
    paddinTop: '10px'
  },
  detailRow:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  detailColumn:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    width: '100%'
  },
  imgDetailColumn:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%'
  },
  slider:{
    width: '500px',
    height: 'auto',
    display: 'flex',
    postion: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 40 ,
    paddingBottom: 35
},
  image:{
      width: '500px',
      height: 'auto',
      borderRadius: '10px'
  },
  rightArrow:{
      postion: 'absolute',
      top: '50%',
      right: '32px',
      fontSize: '3rem',
      color: '#932D30',
      zIndex: '10',
      cursor: 'pointer',
      userSelect: 'none'
  },
  lefttArrow:{
      postion: 'absolute',
      top: '50%',
      left: '32px',
      fontSize: '3rem',
      color: '#932D30',
      zIndex: '10',
      cursor: 'pointer',
      userSelect: 'none'
  },
  listImg:{
    display: 'flex',
    width:'300px',    
    marginLeft: '10px',
    paddingBottom: 150,
  },
  detailDesc:{
    display: 'flex',
    paddinTop: '10px',
    flexDirection: 'column',
    alignItems: 'left',
    justifyContent: 'center'
  },
  detailPara:{
    display: 'flex',
    width: '100%',
    height: 'auto',
    fontFamily: 'Roboto',
    fontSize: '20px',
    marginLeft: '30px',
    marginBottom: '5px'
  },
  detailPrice:{
    display: 'flex',
    height: '40px',
    fontFamily: 'Roboto',
    fontSize: '24px',
    marginBottom: '5px'
  },
  goToCart:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '234px',
    height: '44px',
    background: '#932D30',
    color: 'white',
    textDecoration: 'none',
    borderRadius:'50px',
    paddinTop: 10, 
    cursor:'pointer'
},
detailCounter:{
  display: 'flex',
  paddinTop: 20
}
}
export default ItemDetail;