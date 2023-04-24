import "./style.css";
function RecommendGridCards() {
  return (
    <div className="grid-col mb-8 mt-0 mx-3 shrink w-full min-w-0 box-border flex flex-wrap justify-between pt-8 order-none grow basis-auto">
      <div className="flex-wrap pt-4 pb-5 px-5 relative text-center recommend-container bg-bg rounded-lg">
        <div className="mb-5 grow shrink basis-auto w-full"></div>
        <div className="grow shrink basis-auto w-full">
          <ul className="grid grid-col-2 grid-row-2 gap-4 ">
            <li className="block mb-1.5 relative w-full box-border"></li>
            <li className="block mb-1.5 relative w-full box-border"></li>
            <li className="block mb-1.5 relative w-full box-border"></li>
            <li className="block mb-1.5 relative w-full box-border"></li>
          </ul>
          <div></div>
        </div>
      </div>
      <div className="flex-wrap pt-4 pb-5 px-5 relative text-center recommend-container bg-bg rounded-lg">
        <div className="mb-5 grow shrink basis-auto w-full"></div>
        <div className="grow shrink basis-auto w-full">
          <ul className="grid grid-col-2 grid-row-2 gap-4 ">
            <li className="block mb-1.5 relative w-full box-border"></li>
            <li className="block mb-1.5 relative w-full box-border"></li>
            <li className="block mb-1.5 relative w-full box-border"></li>
            <li className="block mb-1.5 relative w-full box-border"></li>
          </ul>
          <div></div>
        </div>
      </div>
      <div className="flex-wrap pt-4 pb-5 px-5 relative text-center recommend-container bg-bg rounded-lg">
        <div className="mb-5 grow shrink basis-auto w-full"></div>
        <div className="grow shrink basis-auto w-full">
          <ul className="grid grid-col-2 grid-row-2 gap-4 ">
            <li className="block mb-1.5 relative w-full box-border"></li>
            <li className="block mb-1.5 relative w-full box-border"></li>
            <li className="block mb-1.5 relative w-full box-border"></li>
            <li className="block mb-1.5 relative w-full box-border"></li>
          </ul>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default RecommendGridCards;
