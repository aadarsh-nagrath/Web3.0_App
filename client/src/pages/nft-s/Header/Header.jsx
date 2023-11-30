import React, { useRef, useEffect, useState } from "react";
import "./Header.css";
import { Container } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import { set } from "zod";
// import { Marketplace, Market, Create, Contact } from "../pag";

const NAV__LINKS = [
  {
    display: "Marketplace",
  },
  {
    display: "Market",
  },
  {
    display: "Create",
  },
  {
    display: "Contact",
  },
];

const Header = () => {
  const headerRef = useRef(null);

  const menuRef = useRef(null);

  const [currentPage, setCurrentPage] = useState("Marketplace");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  // const condtionalRender = () => {
  //   if (currentPage == "Marketplace") return <Marketplace />;
  //   else if (currentPage == "Market") return <Market />;
  //   else if (currentPage == "Create") return <Create />;
  //   else if (currentPage == "Contact") return <Contact />;
  // };

  const toggleMenu = () => menuRef.current.classList.toggle("active__menu");

  return (
    <>
      <header className="header" ref={headerRef}>
        <Container>
          <div className="navigation">
            <div className="logo">
              <h2 className=" d-flex gap-2 align-items-center ">
                <span></span>
              </h2>
            </div>

            <div className="nav__menu" ref={menuRef} onClick={toggleMenu}>
              <ul className="nav__list">
                {NAV__LINKS.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      // to={item.url}
                      className={(navClass) =>
                        navClass.isActive ? "active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__right d-flex align-items-center gap-5 ">
              {/* <button className="btn d-flex gap-2 align-items-center">
              <span>
                <i class="ri-wallet-line"></i>
              </span>
              <Link to="/wallet">Connect Wallet</Link>
            </button> */}

              <span className="mobile__menu">
                <i class="ri-menu-line" onClick={toggleMenu}></i>
              </span>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
