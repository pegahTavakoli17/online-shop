import React from "react";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Header() {
  const count = useSelector((state) => state.count.count);
  return (
    <div
      className="border-bottom  w-100 d-flex justify-content-between align-items-center"
      style={{ height: "60px", padding: "10px" }}
    >
      <Link to="./cart">
        <Badge badgeContent={count} color="warning">
          <i className="bi bi-cart cart-icon text-primary"></i>
        </Badge>
      </Link>

      <h3 className="text-primary">online shop</h3>
      <img
        src="/logo.png"
        alt="logo"
        width={45}
        height={45}
        style={{ backgroundPosition: "center", backgroundSize: "cover" }}
      />
    </div>
  );
}
