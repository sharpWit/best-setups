import { case1, case2, case3, case4, case5, case6 } from "../../assets";

function PersonalizedCards() {
  return (
    <div className="relative mt-[-6rem]">
      <div className="my-0 mx-auto max-w-[1800px] box-border">
        <div className="flex flex-wrap box-border mt-[80px] mb-[-20px] mr-[300px] ml-5">
          <div className="grid-card min-h-[180px] mt-0 mb-5 mx-3 bg-bg shadow-xl grow shrink basis-1 w-full box-border rounded-xl">
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
          <div className="grid-card min-h-[180px] mt-0 mb-5 mx-3 bg-bg shadow-xl grow shrink basis-1 w-full box-border rounded-xl">
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
          <div className="grid-card min-h-[180px] mt-0 mb-5 mx-3 bg-bg shadow-xl grow shrink basis-1 w-full box-border rounded-xl">
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
  );
}

export default PersonalizedCards;
