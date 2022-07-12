import React, { createContext, useState, useEffect } from "react";

export const cartContext = createContext();
const { Provider } = cartContext;

const CartCustomProvider = ({ children }) => {
  const [productsCart, setProductsCart] = useState([]);
  const [qtyProducts, setQtyProducts] = useState(0);

  useEffect(() => {
    getQtyCarProducts();
  });

  const addCartProduct = (product) => {
    if (isInCart(product.id)) {
      const found = productsCart.find((producto) => producto.id === product.id);
      const index = productsCart.indexOf(found);
      const aux = [...productsCart];
      aux[index].cantidad += product.cantidad;
      setProductsCart(aux);
    } else {
      setProductsCart([...productsCart, product]);
    }
  };

  const deleteCartProduct = (id) => {
    productsCart.filter((productCart) => productCart.id !== id);
  };

  const isInCart = (id) => {
    return productsCart.some((productCar) => productCar.id === id);
  };

  const getQtyCarProducts = () => {
    let qty = 0;
    productsCart.forEach((productCart) => (qty += productCart.cantidad));
    setQtyProducts(qty);
  };

  const clearCart = () => {
    setProductsCart([]);
    setQtyProducts(0);
  };

  return (
    <Provider
      value={{
        productsCart,
        addCartProduct,
        deleteCartProduct,
        clearCart,
        qtyProducts,
      }}
    >
      {children};
    </Provider>
  );
};

export default CartCustomProvider;