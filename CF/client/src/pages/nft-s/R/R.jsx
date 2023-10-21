import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Marketplace from "../pag/Marketplace";
import Market from "../pag/Market";
import Create from "../pag/Create";
import Contact from "../pag/Contact";
import Wallet from "../pag/Wallet";
import NftDetails from "../pag/NftDetails";

const R = () => {
  const location = useLocation();

  const renderComponent = () => {
    switch (location.pathname) {
      case "/nft":
        return <Marketplace />;
      case "/market":
        return <Market />;
      case "/create":
        return <Create />;
      case "/contact":
        return <Contact />;
      case "/wallet":
        return <Wallet />;
      case "/market/:id":
        return <NftDetails/>
      default:
        return <Navigate to="/nft" />;
    }
  };

  return <Routes>{renderComponent()}</Routes>;
};

export default R;
