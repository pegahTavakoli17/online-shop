import React from "react";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { isMobileOnly } from "react-device-detect";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import Hamburger from "./Hamburger";
export default function Header() {
  const count = useSelector((state) => state.count.count);
  return (
    <div
      className="border-bottom  w-100 d-flex justify-content-between align-items-center"
      style={{ height: "60px", padding: "10px" }}
    >
      {!isMobileOnly && (
        <img
          src="/logo.png"
          alt="logo"
          width={45}
          height={45}
          style={{ backgroundPosition: "center", backgroundSize: "cover" }}
        />
      )}
      {isMobileOnly && <Hamburger />}
      <h3 className="text-primary">online shop</h3>
      <Link to="./cart">
        <Badge badgeContent={count} color="warning">
          <ShoppingCartOutlinedIcon />
        </Badge>
      </Link>
    </div>
  );
}
