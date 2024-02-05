import React from "react";

export default function GptSearchBar() {
  return (
    <div className="pt-[25%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          name=""
          placeholder="What would you like to watch today"
          className="p-4 m-4 col-span-9"
        />
        <button
          type=""
          className=" col-span-3 py-2 px-4 bg-red-700 text-white rounded-lg m-4"
        >
          Search
        </button>
      </form>
    </div>
  );
}
