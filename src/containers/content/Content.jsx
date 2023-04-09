import "./content.css";
import React from "react";

function Content() {
  return (
    <div className="content block min-w-[768px] w-full h-auto min-h-fit pt-28 pl-0 pb-0 my-0 mx-auto overflow-hidden">
      {/* nav main*/}
      <div className="relative my-0 mx-auto max-w-[1800px] box-border">
        <div className="right-5 absolute z-[5] whitespace-normal lg:block hidden">
          {/* nav main menu list */}
          <div className="z-[1] relative py-4 px-4 box-border">
            <div className="flex relative">
              <div className="w-[240px] flex flex-col box-border relative">
                <div>
                  <ul>
                    <li>
                      <a href="">
                        <div>
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
                              d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                            />
                          </svg>
                          قطعات و ذخیره‌سازها
                        </div>
                      </a>
                      <div></div>
                    </li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* nav main menu list ends */}
          {/* nav main menu tab */}
          <div className="absolute top-0 left-0 right-0 bottom-[-10px] opacity-5 overflow-hidden"></div>
          {/* nav main menu tab ends */}
        </div>
      </div>
      {/* nav main ends */}
    </div>
  );
}

export default Content;
