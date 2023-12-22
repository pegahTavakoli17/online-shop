import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Link } from "react-router-dom";

export default function Menu() {
  const menuItems = [
    { text: "cart", icon: <ShoppingCartOutlinedIcon />, url: "./cart" },
    { text: "favourites", icon: <FavoriteBorderOutlinedIcon />, url: "./" },
  ];
  return (
    <div className="menu">
      <img
        src="/logo.png"
        alt="logo"
        width={45}
        height={45}
        className=" text-center mx-auto my-2"
        style={{ backgroundPosition: "center", backgroundSize: "cover" }}
      />
      {menuItems.map((item, index) => {
        return (
          <Link
            to={item.url}
            style={{ textDecoration: "none" }}
            className="menu-item"
            key={index}
          >
            <div>
              <span className="text-primary">{item.icon}</span>
              <span className="text-secondary ">{item.text}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
