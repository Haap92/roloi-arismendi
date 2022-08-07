import React, { useState, useEffect } from 'react';
import loadingGif from "../../../assets/images/loading.gif";
import { db } from "../../../firebase/firebase";
import { getDocs, collection } from "firebase/firestore";

const ImageSlider = () => {

    const [images, setImages] = useState([]);
    const [current, setCurrent] = useState(0)
    const [loading, setLoading]=useState(true);

    useEffect(() => {
        const slidesCollection = collection(db, "banners");

        getDocs(slidesCollection)
            .then((res) =>
                setImages(
                    res.docs.map((img) => ({
                        ...img.data(),
                    }))
                )
            )
            .catch((error) => {
                console.log(error);
              })
              .finally(() => {
                setLoading(false);
              });
    }, []);

    const length = images.length
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(images) || images.length <= 0 ) {
        return null
    }
    
  return (
    <div>
    {loading 
       ? <div style={styles.loading}><img style={styles.loadingGif}src={loadingGif} alt="loading" /></div>
       :
        <section style={styles.slider}>
            <div style={styles.lefttArrow} onClick={prevSlide}>←</div>
            {images.map((slide,index)=> {
                return(
                    <div
                    className={index === current ? 'slide active' : 'slide'}
                    key ={index}>
                        {index === current && (<img style={styles.image} src={slide.image} alt='product images' />)}
                    </div>
                ) 
            })}
            <div style={styles.rightArrow} onClick={nextSlide}>→</div>
        </section>
    }
    </div>
  )
}
const styles = {
    slider:{
        width: '100%',
        height: 'calc(100vh - 82px)',
        display: 'flex',
        postion: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image:{
        width: '1000px',
        height: '580px',
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
    }
}
export default ImageSlider