import styles from "../../style";
import { logo } from "../../assets";
import "./header.css";
import React, { useState } from "react";

function Header() {
  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div>
      <div className="my-0 mx-auto max-w-[1800px] box-border">
        <div className="flex justify-between items-center py-3.5 px-5 box-border min-w-0">
          {/* right col */}
          <div className="flex basis-2/3 items-center min-w-0">
            {/* menu */}
            <div>
              <div className="shrink-0 box-border select-none ml-2.5 relative">
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
            {/* menu ends */}
            {/* logo */}
            <div className="w-28 shrink-0 ml-10">
              <a href="#" className="block relative w-full cursor-pointer">
                <img
                  src={logo}
                  alt="logo"
                  className=" z-[1] w-full relative block"
                />
              </a>
            </div>
            {/* logo ends */}
            {/* search bar */}
            <div className="basis-7/12 relative w-full">
              <form action="">
                <div className="search_bg rounded-3xl relative flex box-border min-w-0 w-full h-10">
                  <div className="flex-1 relatove">
                    <input
                      type="search"
                      title="Search Site"
                      autoComplete="off"
                      className="py-0 px-4 border-0 outline-0 box-border w-full h-full bg-transparent appearance-none"
                    />
                  </div>
                  <div>
                    <button className="bg-primary appearance-none py-0 px-5 rounded-3xl border-0 outline-0 box-border w-full h-full cursor-pointer transition ease-in-out delay-100 hover:scale-110 duration-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 inline-block text-white "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                      </svg>
                      <span className="hidden">جستجو</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {/* search bar ends */}
          </div>
          {/* right col rnds */}
          {/* left col */}
          <div className="flex basis-1/4 items-center min-w-0 shrink-0 ml-5">
            {/* notifacation */}
            <div className="relative">
              <div className="block relative top-auto right-auto rounded-3xl text-2xl box-border border-solid border border-slate-500 cursor-pointer hover:bg-slate-800/10 transition ease-in-out delay-100 hover:scale-110 duration-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </div>
            </div>
            {/* notifacation ends */}
            {/* darkmode */}
            <div className="relative mr-5">
              <div className="block relative top-auto right-auto rounded-3xl text-2xl box-border border-solid border border-slate-500 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-7 h-7 bg-secondary rounded-full text-white  hover:bg-slate-950/75 transition ease-in-out delay-100 hover:scale-110 duration-100"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              </div>
            </div>
            {/* darkmode ends */}
            {/* login */}
            <div className="relative mr-5">
              <a
                href=""
                className="flex flex-col justify-center relative py-2 pr-12 pl-5 rounded-3xl box-border min-h-11 hover:bg-slate-800/10 transition ease-in-out delay-100 hover:scale-110 duration-100"
              >
                <div className=" absolute top-2 right-2.5 w-8 h-8 text-center text-xl leading-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-7 h-7 inline-block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </div>
                <div className="block text-xs leading-4 text-gray-700">
                  خوش‌آمدی
                </div>
                <div className=" block overflow-hidden max-w-[120px] font-bold whitespace-nowrap text-ellipsis">
                  ثبت‌نام / ورود
                </div>
              </a>
            </div>
            {/* login ends */}
            {/* cart */}
            <div className="relative mr-12">
              <a
                href=""
                className="flex flex-col justify-center relative py-2 px-3 rounded-3xl box-border min-h-11 hover:bg-slate-800/10 transition ease-in-out delay-100 hover:scale-110 duration-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-7 h-7 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </a>
            </div>
            {/* cart ends */}
          </div>
          {/* left col ends */}
        </div>
      </div>
    </div>
  );
}

export default Header;
