import React from 'react'
import Header from "./nft-s/Header/Header";
import Footer from "./nft-s/Footer/Footer";
import "./nft.css";
import Marketplace from './../pages/nft-s/pag/Marketplace';
import Market from "./../pages/nft-s/pag/Market";
// import Create from "./../pages/nft-s/pag/Create";
// import Contract from "./../pages/nft-s/pag/Contact";

function Nft() {
  const path = window.location.pathname;

  return (
    <div>
    <Header />
    <div>
      <Marketplace/>
    </div>
    <Footer />
    </div>
  );
}

export default Nft;
