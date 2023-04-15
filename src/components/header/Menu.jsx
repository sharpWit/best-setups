import React, { useState } from "react";
function Menu() {
  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div>
      <div className="shrink-0 box-border select-none ml-5 relative">
        <div
          className={
            isActive
              ? null
              : "  text-2xl rounded-[50%]  transition-200 ease-in-out delay-0 translate-x-0 translate-y-0 bg-gray-400 opacity-30"
          }
        >
          <div
            onClick={handleToggle}
            className="block py-2 px-2 cursor-pointer hover:bg-slate-800/10 rounded-3xl transition ease-in-out delay-100 hover:scale-110 duration-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
