import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import NftCard from "../Nft-card/NftCard";
import { NFT__DATA } from "../../../../assets/data/data.js";

import "./live-auction.css";

const LiveAuction = () => {
  return (
    <section >
      <Container >
        <Row className="flex flex-col">
          <Col lg="12" className="mb-5 ">
            <div className="live__auction__top d-flex align-items-center justify-content-between  ">
              <h3 className="text-2xl font-bold">Live Auction</h3>
              <span>
                <Link to="/market">Explore more</Link>
              </span>
            </div>
          </Col>
          <div className="flex ">

          
          {NFT__DATA.slice(0, 4).map((item) => (
            <Col lg="3" md="4" sm="6" className="mb-4 flex w-fit">
              <NftCard key={item.id} item={item}  />
            </Col>
          ))}
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default LiveAuction;
