import React, { useEffect, useState } from "react";
import GlobalApi from "../services/GlobalApi.jsx";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
import { IoPlay } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";

function Hero() {
  const [heroImg, setHeroImg] = useState([]);
  const [randomItem, setRandomItem] = useState("");
  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    GlobalApi.getTrendingMovies.then((response) => {
      const movies = response.data.results;
      setHeroImg(movies);

      const randomIndex = Math.floor(Math.random() * movies.length);
      setRandomItem(movies[randomIndex]);
    });
  };

  return (
    <div className="flex relative gap-4">
      <div className="w-full flex flex-col gap-4 absolute bottom-0 mb-32">
        <h1 className="w-1/3 text-white text-8xl font-black px-16  drop-shadow-2xl">
          {randomItem.original_title}
        </h1>
        <p className="w-1/3 text-white text-2xl px-16 drop-shadow-2xl">
          {randomItem.overview}
        </p>
        <div className="w-1/3 flex mx-16 gap-6">
          <button className="w-1/4 flex justify-center items-center gap-1 px-4 py-2 bg-white text-black hover:opacity-80 duration-300">
            <IoPlay className="text-5xl" />
            <p className="text-2xl font-bold">Play</p>
          </button>
          <button className="w-1/3 flex justify-center items-center gap-1 px-4 py-2 rounded text-white bg-gray-500 bg-opacity-90">
            <IoMdInformationCircleOutline className="text-5xl" />
            <p className="text-2xl font-bold">More İnfo</p>
          </button>
        </div>
      </div>
      <img
        className="w-full h-[950px] object-fill -z-10"
        src={IMAGE_BASE_URL + randomItem.backdrop_path}
        alt=""
      />
    </div>
  );
}

export default Hero;
