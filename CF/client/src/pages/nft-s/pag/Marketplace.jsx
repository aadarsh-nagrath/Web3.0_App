import React from "react";

import HeroSection from "../uie/HeroSection";

import LiveAuction from "../uie/Live-auction/LiveAuction";
import SellerSection from "../uie/Seller-section/SellerSection";

import Trending from "../uie/Trending-section/Trending";

import StepSection from "../uie/Step-section/StepSection";

const Marketplace = () => {
  return (
    <>
      <HeroSection />
      <LiveAuction />
      <SellerSection />
      <Trending />
      <StepSection />
    </>
  );
};

export default Marketplace;
