import {
  MdOutlineMouse,
  MdOutlineComputer,
  MdOutlineRouter,
  MdOutlineCable,
  MdOutlineStorage,
  MdOutlineGames,
} from "react-icons/md";
import { GrServer } from "react-icons/gr";
import { IconContext } from "react-icons";

function MainNav() {
  return (
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
  );
}

export default MainNav;
