import { useSelector } from "react-redux";

import { useTrailer } from "../hooks/useTrailer";

export default function Videobg({ movieId }) {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useTrailer(movieId);
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
      ></iframe>
    </div>
  );
}
