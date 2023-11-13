import React, { useState, useEffect } from "react";
import Button from "./Button";
import Counter from "./Counter";
import { useSelector, useDispatch } from "react-redux";
import { isDesktop } from "react-device-detect";
import {
  updateProductCount,
  setCartProducts,
} from "../redux/actions/productsActions";
export default function PurchaseButton({ product }) {
  const count = useSelector((state) => state.count.count);
  const cart = useSelector((state) => state.cart.cart);
  const [isInCart, setIsInCart] = useState(false);
  const [productAmount, setProductAmount] = useState(1);
  const disPatch = useDispatch();
  const addToCart = () => {
    disPatch(updateProductCount(count + 1));
    cart.push(product);
    disPatch(setCartProducts(cart));
    setIsInCart(cart.some((item) => item.id === product.id && cart.length));
  };
  const handleIsInCartChange = (newIsInCart) => {
    setIsInCart(newIsInCart);
  };
  useEffect(() => {
    const checkCart = () => {
      const result = cart.some((item) => item.id === product.id && cart.length);
      return result;
    };

    setIsInCart(checkCart);
  }, [cart, product.id]);
  return (
    <div className="d-flex justify-content-center justify-content-lg-start w-100">
      {!isInCart && (
        <Button
          text="add to cart"
          onClick={addToCart}
          backGroundColor={"bg-success"}
          icon={"bi bi-cart"}
          width={`${isDesktop ? "200px" : "280px"}`}
        />
      )}
      {isInCart && (
        <Counter
          product={product}
          onIsInCartChange={handleIsInCartChange}
          countIsChanged={false}
        />
      )}
    </div>
  );
}
