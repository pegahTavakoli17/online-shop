import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CircleLoader from "react-spinners/CircleLoader";
import { useParams } from "react-router-dom";
import { isDesktop } from "react-device-detect";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productsActions";
import Divider from "@mui/material/Divider";
import ProductDetailsText from "./ProductDetailsText";
import ProductDetailsImage from "./ProductDetailsImage";
export default function productDetails() {
  const { productId } = useParams();
  const cart = useSelector((state) => state.cart.cart);
  const [loading, setLoading] = useState(false);
  const product = useSelector((state) => state.product);
  const [likesCount, setLikesCount] = useState(0);
  const [offer, setOffer] = useState(localStorage.getItem("offer"));
  const dispatch = useDispatch();

  // const [inCart, setInCart] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const getProductData = async (id) => {
    setOffer(
      localStorage.getItem("offer")
        ? Boolean(localStorage.getItem("offer"))
        : false
    );
    setLoading(true);
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    try {
      if (response.status == 200) {
        offer == false
          ? (response.data.discounted = false)
          : (response.data.discounted = true);
        dispatch(selectedProduct(response.data));
        setLikesCount(response.data.rating.count);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (product && product.id !== "") {
      getProductData(productId);
      setOffer(
        localStorage.getItem("offer") ? localStorage.getItem("offer") : false
      );
      setIsInCart(cart.some((item) => item.id === product.id && cart.length));
    }
    return () => {
      dispatch(removeSelectedProduct(product));
      setIsInCart(false);
    };
  }, [productId]);
  return (
    <div className=" w-100  productDetails-page d-flex justify-contect-center align-items-center pt-3  text-center mx-auto">
      {loading && (
        <div className="d-flex justify-content-center align-items-center w-100 h-100">
          <CircleLoader color="#007bff" />
        </div>
      )}
      {!loading && (
        <div className=" d-flex flex-column flex-lg-row product-bordered-card text-center mx-auto justify-content-start">
          <ProductDetailsImage likesNumber={likesCount} product={product} />
          <div>
            {isDesktop && (
              <Divider
                orientation="vertical"
                flexItem
                className="bg-black mr-3 pr-3"
              />
            )}
          </div>
          <ProductDetailsText
            product={product}
            offer={offer}
            isInCart={isInCart}
          />
        </div>
      )}
    </div>
  );
}
