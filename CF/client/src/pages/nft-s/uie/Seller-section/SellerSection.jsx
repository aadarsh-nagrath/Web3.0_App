import React from "react";
import "./seller.css";
import { Container, Row, Col } from "reactstrap";
import { SELLER__DATA } from "../../../../assets/data/data";

const SellerSection = () => {
  return (
    <section>
      <Container className="overflow-x-hidden">
        <Row className="flex flex-col">
          <Col lg="12" className="mb-5">
            <div className="seller__section-title">
              <h3>Top Seller</h3>
            </div>
          </Col>
          <div className="flex w-full flex-wrap">
            {SELLER__DATA.map((item) => (
              <Col lg="2" md="3" sm="4" xs="6" key={item.id} className="mb-4 m-2">
                <div className=" flex single__seller-card d-flex align-items-center gap-3">
                  <div className="seller__img">
                    <img src={item.sellerImg} alt="" className="w-100" />
                  </div>

                  <div className="seller__content">
                    <h6>{item.sellerName}</h6>
                    <h6>{item.currentBid} ETH</h6>
                  </div>
                </div>
              </Col>
            ))}
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default SellerSection;
