import Countdown from "../countdown";
import { GridCards, RowCards } from "./components";
function BestDeals() {
  return (
    <div className="relative mt-16">
      <div className="my-0 mx-auto max-w-[1800px] box-border">
        <div className="flex justify-between items-center mb-5">
          <h2 className="font-bold mr-7 text-title block text-3xl leading-10">
            محصولات پرفروش امروز
          </h2>
          <div className="ml-7 mr-5 flex items-center min-w-0 shrink-0 ">
            <label htmlFor="" className="text-text_gray ml-3 font-bold text-sm">
              اتمام موجودی در
            </label>
            <Countdown />
          </div>
        </div>
        <GridCards />
        <RowCards />
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
  );
}

export default BestDeals;
