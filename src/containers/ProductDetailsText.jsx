import React from "react";
import Divider from "@mui/material/Divider";
import Rating from "@mui/material/Rating";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import PurchaseButton from "./PurchaseButton";
export default function ProductDetailsText({ product, offer, isInCart }) {
  const categoryStyle =
    product.category == "women's clothing"
      ? { color: "#FF69B4" }
      : product.category == "men's clothing"
      ? { color: "#191970" }
      : product.category == "jewelery"
      ? { color: "#48D1CC" }
      : { color: "#800080" };

  return (
    <div className="w-100">
      <div className="px-4 details-box text-left w-100">
        <h3 className="text-orange text-center">{product.title}</h3>

        <div className="d-flex justify-content-sm-between  align-items-start align-items-sm-center w-100 mt-4 flex-column flex-sm-row">
          {/* category */}
          <span
            style={categoryStyle}
            className="d-flex align-items-center text-left"
          >
            {product.category === "electronics" && <ElectricalServicesIcon />}
            {product.category === "jewelery" && <DiamondOutlinedIcon />}
            {product.category === "women's clothing" && (
              <i className="bi bi-person-standing-dress h3 "></i>
            )}
            {product.category === "men's clothing" && (
              <i className="bi bi-person-standing h3"></i>
            )}
            <b> {product.category}</b>
          </span>
          {/* rating */}
          <div className="mt-3 mt-sm-0 ">
            {product && product.rating && product.rating.rate && (
              <div className="d-flex w-100">
                <Rating name="read-only" value={product.rating.rate} readOnly />
                <div className="rating-box">{product.rating.rate} of 5</div>
              </div>
            )}
          </div>
        </div>
        {/* price */}
        <div className="d-flex justify-content-between mt-3 ">
          <div className="d-flex">
            <b className="h5  px-2">price:</b>

            <div className="d-flex">
              {offer && offer == "false" && <h5>${product.price}</h5>}
            </div>
            <div>
              {offer && offer == "true" && (
                <div className="d-flex">
                  <del className="h5 text-secondary">{product.price}</del>
                  <h5 className="px-1">${Math.floor(product.price * 0.8)}</h5>
                  <Divider
                    orientation="vertical"
                    flexItem
                    className=" mx-4 bg-secondary"
                  />
                  <b className="text-danger h4  ">20% off</b>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* add to cart  */}
        <div className="mt-3 d-flex align-items-center w-100">
          <PurchaseButton product={product} isInCart={isInCart} />
        </div>
        {/* description */}
        <div className="mt-3  d-flex justify-content-start text-left mr-auto w-100 flex-wrap">
          <p className="text-secondery text-left mr-auto w-100">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
}
