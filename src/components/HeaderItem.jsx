import React from "react";

function HeaderItem({ name }) {
  return (
    <div className="text-center cursor-pointer">
      <h2 className="text-[#e5e5e5] text-sm font-medium hover:text-[#c1bfbe] duration-300">
        {name}
      </h2>
    </div>
  );
}

export default HeaderItem;
