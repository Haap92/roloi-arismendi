import React, { useEffect, useState } from 'react';
import { db } from "../../../firebase/firebase";
import { getDocs, collection } from "firebase/firestore";
import { Link } from 'react-router-dom';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const categoriesCollection = collection(db, "categories");

        getDocs(categoriesCollection)
            .then((res) =>
                setCategories(
                    res.docs.map((category) => ({
                        ...category.data(),
                    }))
                )
            )
    }, []);
    
    return (
        <div>
        {categories.map((cat) => (
            <Link to={cat.path} key={cat.id} style={styles.anchors}>
                {cat.label}
            </Link>
        ))}
        </div>
        );
    };  

    const styles = {
        
        anchors: {  
            dipslay: 'flex',
            padding: 10 ,
            textDecoration: 'none' ,
            fontSize: '100%' ,
            color: '#E6E8E5' ,
            fontFamily: 'Roboto',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            paddingRight: 15
          }
    };

export default Categories;