import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartButton from "./CartButton";
import EmptyCart from "./EmptyCart";
import CartBox from "./CartBox";
export default function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const [uniqueCart, setUniqueCart] = useState([]);
  const handleIsInCartChange = (newIsInCart) => {
    setIsInCart(newIsInCart);
  };
  const [isInCart, setIsInCart] = useState(true);
  useEffect(() => {
    const getUniqueCart = () => {
      const uniqeObjects = {};
      cart.forEach((product) => {
        if (uniqeObjects[product.id]) {
          uniqeObjects[product.id].count++;
        } else {
          uniqeObjects[product.id] = { ...product, count: 1 };
        }
      });
      return Object.values(uniqeObjects);
    };
    setUniqueCart(getUniqueCart());
  }, cart);
  return (
    <div className="cart-page">
      <div className="carts-box mx-auto p-4 w-100">
        {cart.length > 0 &&
          uniqueCart.map((item, index) => (
            <div key={index}>
              {item.count && isInCart && (
                <CartBox
                  product={item}
                  onIsInCartChange={handleIsInCartChange}
                />
              )}
            </div>
          ))}
        {cart.length > 0 && <CartButton />}
        {cart.length == 0 && <EmptyCart />}
      </div>
    </div>
  );
}
