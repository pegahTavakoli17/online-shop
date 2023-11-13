import React, { useState, useEffect } from "react";
import Divider from "@mui/material/Divider";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/AddOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {
  updateProductCount,
  setCartProducts,
} from "../redux/actions/productsActions";
import { useDispatch, useSelector } from "react-redux";
export default function Counter({ product, onIsInCartChange, countIsChanged }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const count = useSelector((state) => state.count.count);
  const [ProductCount, setProductCount] = useState(1);

  const isInCart = cart.some((item) => item.id === product.id);
  const handleCount = (type) => {
    if (type == "add") {
      dispatch(updateProductCount(count + 1));
      cart.push(product);
      dispatch(setCartProducts(cart));
      setProductCount(ProductCount + 1);
    } else if (type == "remove") {
      const index = cart.findIndex((item) => item.id === product.id);
      if (index != -1) {
        cart.splice(index, 1);
        dispatch(setCartProducts(cart));
        dispatch(updateProductCount(count - 1));
        setProductCount(ProductCount - 1);
      }
    }
  };
  useEffect(() => {
    onIsInCartChange(isInCart);
  }, [isInCart, onIsInCartChange]);
  useEffect(() => {
    if (countIsChanged) {
      countIsChanged(ProductCount);
    }
  }, [ProductCount, countIsChanged]);
  useEffect(() => {
    if (product.count) {
      setProductCount(product.count);
    }

    let amount = cart.filter((item) => product.id == item.id).length;

    setProductCount(amount);
  }, []);
  return (
    <div className="counter-box justify-space-between  ">
      <div
        onClick={() => handleCount("remove")}
        className="text-grey pt-1 text-center pointer col-4"
      >
        {ProductCount == 1 && <DeleteOutlineIcon />}
        {ProductCount > 1 && <RemoveIcon />}
      </div>
      <Divider orientation="vertical" className="bg-primary" />
      <span className="col-4 pt-1 text-secondary text-center">
        {ProductCount}
      </span>
      <Divider orientation="vertical" className="bg-primary" />
      <div className="col-4" onClick={() => handleCount("add")}>
        <AddIcon
          className="text-grey text-center pt-2 pointer"
          style={{ verticalAlign: "middle", fontSize: "30px" }}
        />
      </div>
    </div>
  );
}
