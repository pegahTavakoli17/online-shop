import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { isDesktop } from "react-device-detect";
export default function CartButton() {
  return (
    <div className="d-flex justify-content-center align-items-center w-100 mt-3 flex-column flex-md-row mx-auto text-center">
      <Link to={"/successful"} style={{ textDecoration: "none" }}>
        <Button
          text={"pay"}
          backGroundColor={"bg-primary"}
          icon={"bi bi-credit-card"}
          width={`${isDesktop ? "200px" : "280px"}`}
        />
      </Link>

      <div className="mx-md-2 mt-md-0 mt-2">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Button
            text={"back to store"}
            backGroundColor={"bg-orange"}
            icon={"bi bi-shop"}
            width={`${isDesktop ? "200px" : "280px"}`}
          />
        </Link>
      </div>
    </div>
  );
}
