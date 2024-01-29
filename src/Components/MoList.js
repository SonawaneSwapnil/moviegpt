import React from "react";
import MoCard from "./MoCard";

export default function MoList({ title, movies }) {
  //   console.log(movies);
  return (
    <div className=" px-3">
      <h1 className="text-3xl font-bold py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => {
            return <MoCard key={movie.id} posterPath={movie.poster_path} />;
          })}
        </div>
      </div>
    </div>
  );
}
