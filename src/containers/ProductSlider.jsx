import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import RedeemIcon from "@mui/icons-material/Redeem";
import ProductComponent from "./ProductComponent";
import {
  isMobileOnly,
  isTablet,
  isIPad13,
  isDesktop,
} from "react-device-detect";
export default function ({ products }) {
  const [swiperRef, setSwiperRef] = useState(null);
  const view = isMobileOnly ? 1 : isTablet || isIPad13 ? 2 : 3;
  return (
    <div className="d-lg-flex mySwiper align-items-center w-100 p-0">
      {isDesktop && (
        <div className="h-100 d-flex align-items-center w-80 justify-content-center">
          <span
            className="text-white px-3 text-center"
            style={{ fontSize: "40px", fontWeight: "bold" }}
          >
            amazing offer
            <RedeemIcon style={{ fontSize: "40px", fontWeight: "bold" }} />
          </span>
        </div>
      )}
      {!isDesktop && (
        <div className="d-flex justify-content-center my-3">
          <span
            className="text-white mx-auto text-center"
            style={{ fontSize: "40px", fontWeight: "bold" }}
          >
            amazing offer
            <RedeemIcon style={{ fontSize: "40px", fontWeight: "bold" }} />
          </span>
        </div>
      )}
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={view}
        spaceBetween={30}
        navigation={true}
        modules={[Pagination, Navigation]}
        className=" d-flex px-5"
      >
        <div className="d-flex ">
          {products.map((product, index) => {
            return (
              <SwiperSlide
                key={index}
                className="col-3 "
                style={{ verticalAlign: "middle" }}
              >
                <ProductComponent product={product} offer={true} />
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </div>
  );
}
