import React, { useState } from "react";
import "./banne.css";

function BannerRender() {
  return (
    <div className="Banner">
      <img
        className="main-image"
        src="/my_logo.png"
        width="100%"
        height="20%"
        // padding = "0"
      />
    </div>
  );
}

export default BannerRender;
