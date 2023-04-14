import { case1, case2, case3, case4, case5, case6 } from "../../assets";
import "./content.css";
import { GrServer } from "react-icons/gr";
import { IconContext } from "react-icons";
import {
  MdOutlineMouse,
  MdOutlineComputer,
  MdOutlineRouter,
  MdOutlineCable,
  MdOutlineStorage,
  MdOutlineGames,
} from "react-icons/md";
import "./content.css";
import { HeroBanner } from "../../components/hero-banner";
import "./content.css";
import React from "react";

function Content() {
  return (
    <div className="block min-w-[800px] w-full h-auto pt-28 pb-0 pl-0 my-0 mx-auto overflow-hidden menu_body">
      {/*//! nav main*/}
      <div className="relative my-0 mx-auto max-w-[1800px] box-border">
        <div className="right-5 absolute z-[5] whitespace-normal lg:block hidden">
          {/* nav main menu list */}
          <div className="z-[1] relative py-4 px-4 box-border">
            <div className="flex relative h-[530px]">
              <div className="w-[240px] flex flex-col box-border relative">
                <div>
                  <ul className=" list-none m-0 p-0">
                    <li className=" list-none m-0 p-0 relative">
                      <a
                        href=""
                        className=" relative block py-3 px-4 break-words text-ellipsis cursor-pointer hover:bg-blue-100/75 hover:rounded-xl hover:text-primary menu-list-link"
                      >
                        <div className="flex items-center">
                          <IconContext.Provider
                            value={{
                              className:
                                "shrink-0 ml-2 w-6 text-center inline-block font-normal normal-nums normal-case  leading-[1] antialiased text-2xl text-slate-950",
                            }}
                          >
                            <div>
                              <MdOutlineComputer />
                            </div>
                          </IconContext.Provider>
                          کامپیوتر و قطعات
                        </div>
                      </a>
                      <div></div>
                    </li>
                    <li className=" list-none m-0 p-0 relative">
                      <a
                        href=""
                        className=" relative block py-3 px-4 break-words text-ellipsis cursor-pointer hover:bg-blue-100/75 hover:rounded-xl hover:text-primary menu-list-link"
                      >
                        <div className="flex items-center">
                          <IconContext.Provider
                            value={{
                              className:
                                "shrink-0 ml-2 w-6 text-center inline-block font-normal normal-nums normal-case  leading-[1] antialiased text-2xl text-slate-950",
                            }}
                          >
                            <div>
                              <MdOutlineMouse />
                            </div>
                          </IconContext.Provider>
                          لوازم جانبی
                        </div>
                      </a>
                      <div></div>
                    </li>
                    <li className=" list-none m-0 p-0 relative">
                      <a
                        href=""
                        className=" relative block py-3 px-4 break-words text-ellipsis cursor-pointer hover:bg-blue-100/75 hover:rounded-xl hover:text-primary menu-list-link"
                      >
                        <div className="flex items-center">
                          <IconContext.Provider
                            value={{
                              className:
                                "shrink-0 ml-2 w-6 text-center inline-block font-normal normal-nums normal-case  leading-[1] antialiased text-2xl text-slate-950",
                            }}
                          >
                            <div>
                              <MdOutlineRouter />
                            </div>
                          </IconContext.Provider>
                          تجهیزات شبکه
                        </div>
                      </a>
                      <div></div>
                    </li>
                    <li className=" list-none m-0 p-0 relative">
                      <a
                        href=""
                        className=" relative block py-3 px-4 break-words text-ellipsis cursor-pointer hover:bg-blue-100/75 hover:rounded-xl hover:text-primary menu-list-link"
                      >
                        <div className="flex items-center">
                          <IconContext.Provider
                            value={{
                              className:
                                "shrink-0 ml-2 w-6 text-center inline-block font-normal normal-nums normal-case  leading-[1] antialiased text-2xl text-slate-950",
                            }}
                          >
                            <div>
                              <MdOutlineCable />
                            </div>
                          </IconContext.Provider>
                          مبدل و کابل
                        </div>
                      </a>
                      <div></div>
                    </li>
                    <li className=" list-none m-0 p-0 relative">
                      <a
                        href=""
                        className=" relative block py-3 px-4 break-words text-ellipsis cursor-pointer hover:bg-blue-100/75 hover:rounded-xl hover:text-primary menu-list-link"
                      >
                        <div className="flex items-center">
                          <IconContext.Provider
                            value={{
                              className:
                                "shrink-0 ml-2 w-6 text-center inline-block font-normal normal-nums normal-case  leading-[1] antialiased text-2xl text-slate-950",
                            }}
                          >
                            <div>
                              <MdOutlineStorage />
                            </div>
                          </IconContext.Provider>
                          ذخیره سازها
                        </div>
                      </a>
                      <div></div>
                    </li>
                    <li className=" list-none m-0 p-0 relative">
                      <a
                        href=""
                        className=" relative block py-3 px-4 break-words text-ellipsis cursor-pointer hover:bg-blue-100/75 hover:rounded-xl hover:text-primary menu-list-link"
                      >
                        <div className="flex items-center">
                          <IconContext.Provider
                            value={{
                              className:
                                "shrink-0 ml-2 w-6 text-center inline-block font-normal normal-nums normal-case  leading-[1] antialiased text-2xl text-slate-950",
                            }}
                          >
                            <div>
                              <MdOutlineGames />
                            </div>
                          </IconContext.Provider>
                          گیمینگ
                        </div>
                      </a>
                      <div></div>
                    </li>
                    <li className=" list-none m-0 p-0 relative">
                      <a
                        href=""
                        className=" relative block py-3 px-4 break-words text-ellipsis cursor-pointer hover:bg-blue-100/75 hover:rounded-xl hover:text-primary menu-list-link"
                      >
                        <div className="flex items-center">
                          <IconContext.Provider
                            value={{
                              className:
                                "shrink-0 ml-2 w-6 text-center inline-block font-normal normal-nums normal-case  leading-[1] antialiased text-2xl text-slate-950",
                            }}
                          >
                            <div>
                              <GrServer />
                            </div>
                          </IconContext.Provider>
                          سیستمت‌رو بساز!
                        </div>
                      </a>
                      <div></div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* nav main menu list ends */}
          {/* nav main menu tab */}
          <div className="absolute top-0 left-0 right-0 bottom-[-24px] opacity-80 overflow-hidden whitespace-normal menu_bg main-tab-blur"></div>
          {/* nav main menu tab ends */}
        </div>
      </div>
      {/* nav main ends */}
      {/*//! hero banner */}
      <div className=" relative mb-10 h-[360px] z-0">
        <HeroBanner />
      </div>
      {/* hero banner ends */}
      {/*//! personal cards */}
      <div className="relative mt-[-6rem]">
        <div className="my-0 mx-auto max-w-[1800px] box-border">
          <div className="flex flex-wrap box-border mt-[80px] mb-[-20px] mr-[300px] ml-5">
            <div className="grid-card min-h-[180px] mt-0 mb-5 mx-3 bg-bg shadow-xl rounded grow shrink basis-1 w-full box-border">
              <div className="mt-4 mb-5 flex justify-between items-center">
                <div className="leading-6 text-base mr-5 font-bold text-ellipsis break-words overflow-hidden max-h-12	">
                  دسته‌بندی‌هایی که ممکنه دوست داشته باشی
                </div>
              </div>
              <div className="mx-3 mt-0 mb-[-20px] box-border">
                <div className="flex flex-row order-0 grow shrink mt-0 mb-5 mx-0 w-full ">
                  <div className="bg-bg relative flex flex-col items-center box-border w-full rounded-lg">
                    <a
                      href="#"
                      className="mb-3 max-w-[140px] w-full block relative shrink-0 overflow-hidden cursor-pointer  "
                    >
                      <img
                        src={case1}
                        alt="Gaming"
                        className="block relative top-0 right-0 left-0 bottom-0 m-auto max-h-full max-w-full "
                      />
                    </a>
                    <div className="  text-center grow shrink basis-auto pt-0 pb-3 px-3 relative w-full min-w-0 box-border">
                      <a
                        href=""
                        className=" max-h-6 font-semibold max-w-full box-border text-ellipsis no-underline overflow-hidden leading-5 text-xs cursor-pointer"
                      >
                        گیمینگ
                      </a>
                    </div>
                  </div>

                  <div className="bg-bg relative flex flex-col items-center box-border w-full rounded-lg">
                    <a
                      href="#"
                      className="mb-3 max-w-[140px] w-full block relative shrink-0 overflow-hidden cursor-pointer  "
                    >
                      <img
                        src={case2}
                        alt="Gaming"
                        className="block relative top-0 right-0 left-0 bottom-0 m-auto max-h-full max-w-full "
                      />
                    </a>
                    <div className="  text-center grow shrink basis-auto pt-0 pb-3 px-3 relative w-full min-w-0 box-border">
                      <a
                        href=""
                        className=" max-h-6 font-semibold max-w-full box-border text-ellipsis no-underline overflow-hidden leading-5 text-xs cursor-pointer"
                      >
                        کیس گرین برای همه نسل‌ها
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-card min-h-[180px] mt-0 mb-5 mx-3 bg-bg shadow-xl rounded grow shrink basis-1 w-full box-border">
              <div className="mt-4 mb-5 flex justify-between items-center">
                <div className="leading-6 text-base mr-5 font-bold text-ellipsis break-words overflow-hidden max-h-12	">
                  محصولات محبوب
                </div>
              </div>
              <div className="mx-3 mt-0 mb-[-20px] box-border">
                <div className="flex flex-row order-0 grow shrink mt-0 mb-5 mx-0 w-full ">
                  <div className="bg-bg relative flex flex-col items-center box-border w-full rounded-lg">
                    <a
                      href="#"
                      className="mb-3 max-w-[140px] w-full block relative shrink-0 overflow-hidden cursor-pointer  "
                    >
                      <img
                        src={case3}
                        alt="Gaming"
                        className="block relative top-0 right-0 left-0 bottom-0 m-auto max-h-full max-w-full "
                      />
                    </a>
                    <div className="  text-center grow shrink basis-auto pt-0 pb-3 px-3 relative w-full min-w-0 box-border">
                      <a
                        href=""
                        className=" max-h-6 font-semibold max-w-full box-border text-ellipsis no-underline overflow-hidden leading-5 text-xs cursor-pointer"
                      >
                        کیس برای انواع سرور
                      </a>
                    </div>
                  </div>

                  <div className="bg-bg relative flex flex-col items-center box-border w-full rounded-lg">
                    <a
                      href="#"
                      className="mb-3 max-w-[140px] w-full block relative shrink-0 overflow-hidden cursor-pointer  "
                    >
                      <img
                        src={case4}
                        alt="Gaming"
                        className="block relative top-0 right-0 left-0 bottom-0 m-auto max-h-full max-w-full "
                      />
                    </a>
                    <div className="  text-center grow shrink basis-auto pt-0 pb-3 px-3 relative w-full min-w-0 box-border">
                      <a
                        href=""
                        className=" max-h-6 font-semibold max-w-full box-border text-ellipsis no-underline overflow-hidden leading-5 text-xs cursor-pointer"
                      >
                        گیمینگ ارزان
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-card min-h-[180px] mt-0 mb-5 mx-3 bg-bg shadow-xl rounded grow shrink basis-1 w-full box-border">
              <div className="mt-4 mb-5 flex justify-between items-center">
                <div className="leading-6 text-base mr-5 font-bold text-ellipsis break-words overflow-hidden max-h-12	">
                  موجودی‌های رو به اتمام{" "}
                </div>
              </div>
              <div className="mx-3 mt-0 mb-[-20px] box-border">
                <div className="flex flex-row order-0 grow shrink mt-0 mb-5 mx-0 w-full ">
                  <div className="bg-bg relative flex flex-col items-center box-border w-full rounded-lg">
                    <a
                      href="#"
                      className="mb-3 max-w-[140px] w-full block relative shrink-0 overflow-hidden cursor-pointer  "
                    >
                      <img
                        src={case5}
                        alt="Gaming"
                        className="block relative top-0 right-0 left-0 bottom-0 m-auto max-h-full max-w-full "
                      />
                    </a>
                    <div className="  text-center grow shrink basis-auto pt-0 pb-3 px-3 relative w-full min-w-0 box-border">
                      <a
                        href=""
                        className=" max-h-6 font-semibold max-w-full box-border text-ellipsis no-underline overflow-hidden leading-5 text-xs cursor-pointer"
                      >
                        کیس کولرمستر
                      </a>
                    </div>
                  </div>

                  <div className="bg-bg relative flex flex-col items-center box-border w-full rounded-lg">
                    <a
                      href="#"
                      className="mb-3 max-w-[140px] w-full block relative shrink-0 overflow-hidden cursor-pointer  "
                    >
                      <img
                        src={case6}
                        alt="Gaming"
                        className="block relative top-0 right-0 left-0 bottom-0 m-auto max-h-full max-w-full "
                      />
                    </a>
                    <div className="  text-center grow shrink basis-auto pt-0 pb-3 px-3 relative w-full min-w-0 box-border">
                      <a
                        href=""
                        className=" max-h-6 font-semibold max-w-full box-border text-ellipsis no-underline overflow-hidden leading-5 text-xs cursor-pointer"
                      >
                        گیمینگ حرفه‌ای
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* personal cards end */}
      {/*//! best deals */}
      <div className="relative mt-16">
        <div className="my-0 mx-auto max-w-[1800px] box-border">
          <div className="flex justify-between items-center mb-5"></div>
          <div className="h-[520px] flex-wrap flex-col  box-border mt-0 mx-5 mb-[-20px]"></div>
          <div className="mt-5 mb-[-20px] mx-5 flex-wrap box-border"></div>
          <div className="flex justify-center mt-5 py-0 px-8">
            <a
              href="#"
              className="bg-primary rounded-3xl px-6 text-bg box-border transition ease-in-out delay-100 hover:scale-110 duration-100 text-sm font-bold relative inline-flex items-center justify-center h-10 outline-0 border-2 border-solid border-transparent whitespace-nowrap cursor-pointer"
            >
              تماشای همه
            </a>
          </div>
        </div>
      </div>
      {/* best deals ends */}
      {/* //!recommend seller */}
      <div className="p-0 bg-bg-banner-2 relative pt-16">
        <div className="my-0 mx-auto max-w-[1800px] box-border">
          <div className="my-0 mx-5 flex flex-wrap box-border "></div>
        </div>
      </div>
      {/* recommend seller ends */}
    </div>
  );
}

export default Content;
