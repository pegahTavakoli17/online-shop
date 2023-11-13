import React from "react";
import CartPic from "./CartPic";
import Button from "./Button";
import { Link } from "react-router-dom";
import { isDesktop } from "react-device-detect";

export default function EmptyCart() {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column  w-100">
      <div
        style={{
          backgroundPosition: "center",
          blockSize: "cover",
          width: "370px",
          aspectRatio: 1 / 1,
        }}
      >
        <CartPic />
      </div>
      <h5 className="text-primary">your cart is empty</h5>
      <Link
        to="/"
        className="my-3 pb-3 w-100 d-flex justify-content-center"
        style={{ textDecoration: "none" }}
      >
        <Button
          text={"see all products"}
          backGroundColor={"bg-primary"}
          icon={"bi bi-shop"}
          width={`${isDesktop ? "200px" : "100%"}`}
        />
      </Link>
    </div>
  );
}
