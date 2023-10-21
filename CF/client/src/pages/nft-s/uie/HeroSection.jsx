import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./hero-section.css";

import heroImg from "./../../../assets/images/hero.jpg";

const HeroSection = () => {
  return (
    <section className="hero__section">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2>
                Unlock the Digital Canvas: Own Your NFT Masterpiece
                <span>sell Unique</span> NFTs
              </h2>
              <p>
              In the age of digital innovation and blockchain technology, the world of
               art has undergone a revolutionary transformation. Now, collectors and enthusiasts
                can explore and invest in rare digital art through Non-Fungible Tokens (NFTs). 
              </p>

              <div className="hero__btns d-flex align-items-center gap-4">
                <button className=" explore__btn d-flex align-items-center gap-2">
                  <i class="ri-rocket-line"></i>{" "}
                  <Link to="/market">Explore</Link>
                </button>
                <button className=" create__btn d-flex align-items-center gap-2">
                  <i class="ri-ball-pen-line"></i>
                  <Link to="/create">Create</Link>
                </button>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6" className="flex justify-center ">
            <div className="hero__img ">
              <img src={heroImg} alt=""  className="w-[100%]" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
