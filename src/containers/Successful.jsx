import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { isDesktop } from "react-device-detect";
import { useDispatch } from "react-redux";
import Skeleton from "@mui/material/Skeleton";
import {
  setCartProducts,
  updateProductCount,
} from "../redux/actions/productsActions";
import { useEffect } from "react";
import { useState } from "react";
export default function Successful() {
  const [loaded, setLoaded] = useState(false);
  const handleImgLoad = () => {
    setLoaded(true);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCartProducts([]));
    dispatch(updateProductCount(0));
  }, []);
  return (
    <div className="w-100 text-center d-flex flex-column align-items-center successful-pic">
      {!loaded && (
        <Skeleton variant="rounded" width={700} height={700} className="my-3" />
      )}

      <img
        src="/successful1.png"
        alt="successfulPic"
        className="successful-pic"
        onLoad={handleImgLoad}
      />
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <Button
          text={"back to store"}
          backGroundColor={"bg-orange"}
          icon={"bi bi-shop"}
          width={`${isDesktop ? "200px" : "280px"}`}
        />
      </Link>
    </div>
  );
}
