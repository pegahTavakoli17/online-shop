import React, { useState } from "react";
import { isDesktop } from "react-device-detect";
import FilledHeart from "./FilledHeart";
import { SideBySideMagnifier, MOUSE_ACTIVATION } from "react-image-magnifiers";
export default function ProductDetailsImage({ product, likesNumber }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(likesNumber);
  const likeProduct = () => {
    setLikesCount(likesCount + 1);
    setIsLiked(true);
  };
  const disLikeProduct = () => {
    setLikesCount(likesCount - 1);
    setIsLiked(false);
  };
  return (
    <div>
      <div className="col-lg-4 col-12 d-flex  flex-column w-100">
        {/* like */}
        <div className="px-2 text-right ml-auto w-100 d-flex justify-content-end col-12">
          {!isLiked && (
            <div className="d-flex">
              <div onClick={likeProduct} className="px-1">
                <i className="bi bi-heart"></i>
              </div>
              {product && product.rating && product.rating.count && (
                <span>{likesCount}</span>
              )}
            </div>
          )}
          {isLiked && (
            <div className="d-flex">
              <div onClick={disLikeProduct} className="px-1">
                <FilledHeart />
              </div>
              {product && product.rating && product.rating.count && (
                <span>{likesCount}</span>
              )}
            </div>
          )}
        </div>
        {/* image */}
        {isDesktop && (
          <div
            style={{ aspectRatio: 1 / 1, width: "300px" }}
            className="text-center mx-auto"
          >
            <SideBySideMagnifier
              imageSrc={product.image}
              imageAlt="product image"
              style={{
                aspectRatio: 1 / 1,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="text-center mx-auto"
              mouseActivation={MOUSE_ACTIVATION.SINGLE_CLICK} // Optional
            />
          </div>
        )}
        {!isDesktop && (
          <div className="text-center">
            <img
              src={product.image}
              alt="product image"
              className="product-image"
              style={{ aspectRatio: 1 / 1, maxWidth: "380px" }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
