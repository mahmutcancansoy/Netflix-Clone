import React, { useEffect, useState } from "react";
import Logo from "../assets/images/logos/logo.png";
import Avatar from "../assets/images/avatar.png";
import HeaderItem from "./HeaderItem.jsx";
import {
  IoSearch,
  IoNotificationsOutline,
  IoCaretDownOutline,
} from "react-icons/io5";

function Header() {
  const menu = [
    {
      name: "Home",
    },
    {
      name: "TV Shows",
    },
    {
      name: "Movies",
    },
    {
      name: "New & Popular",
    },
    {
      name: "My List",
    },
    {
      name: "Browse by Languages",
    },
  ];
  const [bgColor, setBgColor] = useState(
    "bg-gradient-to-b from-black/90  from-20% to-transparent",
  );
  const [profileArrow, setProfileArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor("bg-[#0b0b0b]");
      } else {
        setBgColor("bg-gradient-to-b from-black/90 from-20% to-transparent");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleProfile = () => {
    setProfileArrow(!profileArrow);
  };
  return (
    <div
      className={`flex px-16 py-2 justify-between fixed z-10 w-full duration-700 ease-in-out ${bgColor}`}
    >
      <div className="flex gap-6">
        <img src={Logo} alt="" className="w-[130px]" />
        <div className="flex items-center  gap-5">
          {menu.map((item) => (
            <HeaderItem name={item.name} />
          ))}
        </div>
      </div>
      <div className="flex items-center gap-5">
        <button className="cursor-pointer">
          <IoSearch className="text-white text-2xl" />
        </button>

        <h2 className="text-white text-sm font-medium hover:text-[#c1bfbe] transition-all duration-300 cursor-pointer">
          Kids
        </h2>
        <button className="cursor-pointer">
          <IoNotificationsOutline className="text-white text-2xl" />
        </button>

        <button
          onClick={toggleProfile}
          className="flex items-center gap-1 cursor-pointer"
        >
          <img src={Avatar} alt="" className="w-8 h-8 rounded" />
          <IoCaretDownOutline
            className={`text-white text-sm duration-300 ${profileArrow ? "rotate-180" : "rotate-0"}`}
          />
        </button>
      </div>
    </div>
  );
}

export default Header;
