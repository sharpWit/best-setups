import "./content.css";
import { HeroBanner } from "../../components/hero-banner";
import React from "react";
import MainNav from "../../components/main-nav/MainNav";
import PersonalizedCards from "../../components/personalized-cards/PersonalizedCards";
import BestDeals from "../../components/best-deals/BestDeals";
import RecommendSeller from "../../components/recommend-seller/RecommendSeller";

function Content() {
  return (
    <div className="block min-w-[800px] w-full h-auto py-0 pl-0 my-0 mx-auto overflow-hidden menu_body">
      {/*//! main nav */}
      <MainNav />
      {/* main nav  ends */}
      {/*//! hero banner */}
      <div className=" relative mb-10 h-[360px] max-w-[1800px] mt-0 mx-auto z-0">
        <HeroBanner />
      </div>
      {/* hero banner ends */}
      {/*//! personalized cards */}
      <PersonalizedCards />
      {/* personalized cards end */}
      {/*//! best deals */}
      <BestDeals />
      {/* best deals ends */}
      {/* //!recommend seller */}
      <RecommendSeller />
      {/* recommend seller ends */}
    </div>
  );
}

export default Content;
