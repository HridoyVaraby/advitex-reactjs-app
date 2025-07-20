import { products } from "@/data/products";

import React, { useEffect } from "react";
import { useContext, useState } from "react";
const dataContext = React.createContext();
export const useContextElement = () => {
  return useContext(dataContext);
};

export default function Context({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const subtotal = cartProducts.reduce((accumulator, product) => {
      return accumulator + product.quantity * product.price;
    }, 0);
    setTotalPrice(subtotal);
  }, [cartProducts]);

  const isAddedToCartProducts = (id) => {
    if (cartProducts.filter((elm) => elm.id == id)[0]) {
      return true;
    }
    return false;
  };
  const addProductToCart = (id, qty, isModal = true) => {
    if (!isAddedToCartProducts(id)) {
      const item = {
        ...products.filter((elm) => elm.id == id)[0],
        quantity: qty ? qty : 1,
      };
      setCartProducts((pre) => [...pre, item]);
      if (isModal) {
      }
    }
  };

  const updateQuantity = (id, qty) => {
    if (isAddedToCartProducts(id)) {
      let item = cartProducts.filter((elm) => elm.id == id)[0];
      let items = [...cartProducts];
      const itemIndex = items.indexOf(item);
      if (qty / 1 > 0) {
        item.quantity = qty / 1;
        items[itemIndex] = item;
        setCartProducts(items);
      }
    }
  };
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartList"));
    if (items?.length) {
      setCartProducts(items);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("cartList", JSON.stringify(cartProducts));
  }, [cartProducts]);

  const contextElement = {
    cartProducts,
    setCartProducts,
    totalPrice,
    addProductToCart,
    isAddedToCartProducts,

    updateQuantity,
  };
  return (
    <dataContext.Provider value={contextElement}>
      {children}
    </dataContext.Provider>
  );
}
