import React from "react";

export default function VideoTitle({ title, overview }) {
  return (
    <div className=" w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button
          type=""
          className="bg-white p-4 px-12 text-lg text-black  rounded hover:bg-opacity-80"
        >
          ▶ Play
        </button>
        <button
          type=""
          className="bg-gray-600  p-4  px-12 text-lg text-white bg-opacity-50 rounded mx-2 hover:bg-opacity-90"
        >
          ❕ MoreInfo
        </button>
      </div>
    </div>
  );
}
