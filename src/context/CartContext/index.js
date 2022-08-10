import React, { createContext, useState, useEffect } from "react";
import { useLocalStorage } from "../../../src/components/sales/useLocalStorage";

export const cartContext = createContext();
const { Provider } = cartContext;

const CartCustomProvider = ({ children }) => {
  const [productsCart, setProductsCart] = useLocalStorage("carrito", []);
  const [qtyProducts, setQtyProducts] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getQtyCartProducts();
  });
  useEffect(() => {
    getTotal();
  });

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
    setTotal(0);
  };

  const deleteItem = (id) => {
    const filteredProducts = productsCart.filter((prod) => prod.id !== id);
    setProductsCart(filteredProducts);
};

const getTotal = () => {
  let total = 0;
  productsCart.forEach(
    (productCart) => (total += productCart.qty * productCart.price)
  );
  setTotal(total)
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
        total
      }}
    >
      {children};
    </Provider>
  );
};

export default CartCustomProvider;