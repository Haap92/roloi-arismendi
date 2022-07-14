import React, { createContext, useState, useEffect } from "react";

export const cartContext = createContext();
const { Provider } = cartContext;

const CartCustomProvider = ({ children }) => {
  const [productsCart, setProductsCart] = useState([]);
  const [qtyProducts, setQtyProducts] = useState(0);

  useEffect(() => {
    getQtyCartProducts();
  });
console.log(productsCart)
  const addCartProduct = (product) => {
    if (isInCart(product.id)) {
      const found = productsCart.find((producto) => producto.id === product.id);
      const index = productsCart.indexOf(found);
      const aux = [...productsCart];
      aux[index].qty += product.qty;
      setProductsCart(aux);
    } else {
      setProductsCart([...productsCart, product]);
    }
  };

  const deleteCartProduct = (id) => {
    productsCart.filter((productCart) => productCart.id !== id);
  };

  const isInCart = (id) => {
    return productsCart.some((productCart) => productCart.id === id);
  };

  const getQtyCartProducts = () => {
    let qty = 0;
    productsCart.forEach((productCart) => (qty += productCart.qty));
    setQtyProducts(qty);
  };

  const clearCart = () => {
    setProductsCart([]);
    setQtyProducts(0);
  };

  const deleteItem = (id) => {
    const filteredProducts = productsCart.filter((prod) => prod.id !== id);
    setProductsCart(filteredProducts);
};

const calcTotal = () => {
    productsCart.reduce(
        (acum, actual) => acum + actual.price * actual.qty,
        0)
};

  return (
    <Provider
      value={{
        productsCart,
        addCartProduct,
        deleteCartProduct,
        clearCart,
        qtyProducts,
        deleteItem,
        calcTotal
      }}
    >
      {children};
    </Provider>
  );
};

export default CartCustomProvider;