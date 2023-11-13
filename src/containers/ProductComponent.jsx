import React from "react";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import { Link } from "react-router-dom";
import Chip from "@mui/material/Chip";
export default function ProductComponent({ product, offer }) {
  const setOffer = () => {
    localStorage.setItem("offer", offer);
  };
  const categoryStyle =
    product.category == "women's clothing"
      ? { color: "#FF69B4" }
      : product.category == "men's clothing"
      ? { color: "#191970" }
      : product.category == "jewelery"
      ? { color: "#48D1CC" }
      : { color: "#800080" };
  return (
    <Link
      onClick={setOffer}
      style={{ textDecoration: "none" }}
      to={`product/${product.id}`}
      className="w-100 text-secondary border border-1 border-primary rounded-5 d-flex flex-column justify-content-center align-items-center product-card bg-white text-center mx-auto "
    >
      <img
        src={product.image}
        alt="product image"
        className=" product-image w-80"
        style={{ aspectRatio: 1 / 1 }}
      />
      <h6 className="text-center p-1 p-sm-3">
        {product.title.length < 45
          ? product.title
          : product.title.slice(0, 45) + "..."}
      </h6>

      <div className="d-flex justify-content-between align-items-center w-100 px-4 w-100">
        <div>
          {!offer && <b className="m-0">${product.price}</b>}
          {offer && (
            <div className="d-flex w-100 align-items-center pb-2">
              <div className=" text-left  px-1">
                <Chip className="bg-danger text-white text-left" label="20%" />
              </div>
              <div>
                <del>{product.price}</del>
              </div>
              <div>
                <b className="px-2">${Math.floor(product.price * 0.8)}</b>
              </div>
            </div>
          )}
        </div>
        {!offer && (
          <span style={categoryStyle} className="d-flex align-items-center">
            {product.category}
            {product.category === "electronics" && <ElectricalServicesIcon />}
            {product.category === "jewelery" && <DiamondOutlinedIcon />}
            {product.category === "women's clothing" && (
              <i className="bi bi-person-standing-dress h3 "></i>
            )}
            {product.category === "men's clothing" && (
              <i className="bi bi-person-standing h3"></i>
            )}
          </span>
        )}
      </div>
    </Link>
  );
}
