import React, { useEffect, useRef } from "react";
import {
  MdOutlineKeyboardArrowRight,
  MdKeyboardArrowLeft,
} from "react-icons/md";
import GlobalApi from "../services/GlobalApi.jsx";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function YourNextWatch() {
  const [movieList, setMovieList] = React.useState([]);
  const elementRef = useRef();
  const screenWidth = window.innerWidth;
  useEffect(() => {
    getTrendingMovies();
  }, []);
  const getTrendingMovies = () => {
    GlobalApi.getTrendingMovies.then((resp) => {
      setMovieList(resp.data.results);
    });
  };
  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 110;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
  };
  return (
    <div className="flex flex-col mb-32 -mt-[84px]">
      <h3 className="text-white text-3xl font-medium px-16 mb-4 drop-shadow-4xl">
        Your Next Watch
      </h3>
      <div className="relative">
        <MdKeyboardArrowLeft
          className="text-white text-7xl  absolute z-10 top-0 left-0 h-full rounded-tr rounded-br cursor-pointer bg-black bg-opacity-15 hover:bg-opacity-55 hover:bg-black duration-300"
          onClick={() => sliderLeft(elementRef.current)}
        />
        <MdOutlineKeyboardArrowRight
          className=" text-white text-7xl  absolute z-10 top-0 right-0 h-full rounded-tl rounded-bl cursor-pointer bg-black bg-opacity-15 hover:bg-opacity-55 hover:bg-black duration-300 scroll-smooth"
          onClick={() => sliderRight(elementRef.current)}
        />
        <div
          className="flex gap-2 overflow-x-auto scrollbar-none scroll-smooth relative"
          ref={elementRef}
        >
          {movieList.map((item) => (
            <img
              className="w-1/6 rounded cursor-pointer"
              src={IMAGE_BASE_URL + item.backdrop_path}
              alt=""
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default YourNextWatch;
