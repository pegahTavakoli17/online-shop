import React from "react";

export default function Button({
  onClick,
  text,
  icon,
  backGroundColor,
  width,
}) {
  const buttonWidth = width;
  return (
    <div>
      <button
        className={`${backGroundColor} rounded border-0  px-3 text-white d-flex justify-content-center align-items-center text-center myButton`}
        onClick={onClick}
        style={{ width: `${buttonWidth}`, height: "50px" }}
      >
        <div className="text-center mx-auto d-flex justify-content-center align-items-center">
          <i className={`${icon} cart-icon button-icon`}></i>

          {text}
        </div>
      </button>
    </div>
  );
}
