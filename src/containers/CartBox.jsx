import React from "react";
import Counter from "./Counter";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Chip from "@mui/material/Chip";

export default function CartBox({ product, onIsInCartChange }) {
  const cart = useSelector((state) => state.cart.cart);
  const [finalPrice, setFinalPrice] = useState(0);
  const [discountedFinalPrice, setDiscountedFinalPrice] = useState(0);
  const [productCount, setProductCount] = useState(product.count);
  const countIsChanged = (newCout) => {
    setProductCount(newCout);
  };
  useEffect(() => {
    const handleFinalPrice = () => {
      const final = product.price * productCount;
      return final;
    };
    const handleDiscountedFinalPrice = () => {
      const final = product.price * 0.8 * productCount;
      return final;
    };
    setFinalPrice(handleFinalPrice);
    setDiscountedFinalPrice(handleDiscountedFinalPrice);
  }, [cart, productCount]);

  return (
    <section className="w-100 mx-auto  mt-3 ">
      <div
        className="product-bordered-card d-flex flex-column flex-sm-row mx-auto  align-items-center"
        style={{ textDecoration: "none" }}
      >
        <Link
          to={`/product/${product.id}`}
          className=" col-12 col-sm-2 mx-auto text-center "
        >
          <img
            src={product.image}
            alt="product image"
            width={150}
            height={150}
            style={{ objectFit: "contain" }}
          />
        </Link>
        <div className="col-1"> &nbsp; </div>
        <div className=" d-flex justify-content-start col-12 col-sm-9 flex-column align-items-md-start align-items-center">
          <div className="d-flex justify-content-center justify-content-md-start w-100  ">
            <h6 className="text-orange product-title ">{product.title}</h6>
          </div>
          <div className=" d-flex justify-content-between w-100 mt-3 mt-sm-0 flex-column-reverse flex-sm-row align-items-center">
            {/* price */}
            <div className="d-flex flex-column w-100">
              <div className="mb-2 mt-4 mt-md-2 w-100 d-flex">
                <span className="text-primary">price:</span>
                <span>
                  {product.discounted == "true" ? (
                    <div>
                      <del className="px-1 text-secondary">{product.price}</del>
                      <span className="mx-1">
                        ${Math.floor(product.price * 0.8)}
                      </span>
                    </div>
                  ) : (
                    <span className="px-1 text-secondary">
                      ${product.price}
                    </span>
                  )}
                </span>
              </div>
              <div className="my-2 text-left d-flex justify-content-start">
                <span className="text-primary">final price:</span>
                {product.discounted == "true" ? (
                  <span className="px-1 text-secondary text-left">
                    {productCount}
                    <i className="bi bi-x"></i>{" "}
                    {Math.floor(product.price * 0.8)} =
                    <span className="mx-1">
                      {Math.floor(discountedFinalPrice)}
                    </span>
                  </span>
                ) : (
                  <span className="px-1 text-secondary text-left">
                    {productCount}
                    <i className="bi bi-x"></i> {product.price} =
                    <span className="mx-1">{finalPrice}</span>
                  </span>
                )}
              </div>
              {product.discounted == "true" && (
                <Chip
                  className="bg-danger text-white text-left mt-3"
                  label="20%"
                  style={{ width: "60px" }}
                />
              )}
            </div>

            <div className="text-center text-md-right w-100  d-flex justify-content-center align-content-center justify-content-md-end ">
              <Counter
                product={product}
                onIsInCartChange={onIsInCartChange}
                countIsChanged={countIsChanged}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
