import { SellerBox, RecommendGridCards } from "./components";
function RecommendSeller() {
  return (
    <div className="p-0 bg-bg-banner-2 relative pt-16">
      <div className="my-0 mx-auto max-w-[1800px] box-border">
        <div className="my-0 mx-5 flex flex-wrap box-border ">
          <SellerBox />
          <RecommendGridCards />
        </div>
      </div>
    </div>
  );
}

export default RecommendSeller;
