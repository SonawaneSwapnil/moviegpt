import React from "react";
import { IMG_CDN } from "../utills/constant";

export default function MoCard({ posterPath }) {
  return (
    <div className="w-40 pr-4">
      <img src={IMG_CDN + posterPath} alt="poster" className="" />
    </div>
  );
}
