import React from "react";
import { Container, Row, Col } from "reactstrap";

import { NFT__DATA } from "../../../../assets/data/data";
import "./trending.css";

import NftCard from "../Nft-card/NftCard";

const Trending = () => {
  return (
    <section>
      <Container>
        <Row className="flex flex-col">
          <Col lg="12" className="mb-5 ">
            <h3 className="trending__title">Trending</h3>
          </Col>
          <div className="flex w-full flex-wrap">
            {NFT__DATA.slice(0, 8).map((item) => (
              <Col lg="3" md="4" sm="6" key={item.id} className="mb-4 w-fit">
                <NftCard item={item} />
              </Col>
            ))}
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Trending;
