import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
import LogoIcon from "../../assets/img/A&M logo.png";
import BurgerIcon from "../../assets/svg/BurgerIcon";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    const handleScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [y]);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper
        className="flexCenter animate whiteBg"
        style={y > 100 ? { height: "60px" } : { height: "80px" }}
      >
        <NavInner className="container flexSpaceCenter">
          <Link className="pointer flexNullCenter" to="home" smooth={true}>
            <h1 style={{ marginLeft: "15px" }} className="font20 extraBold">
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    marginTop: "15px",
                    opacity: y > 0 ? 1 : 0, // Control visibility based on scroll position
                    transition: "opacity 0.5s ease",
                  }}
                >
                  <img src={LogoIcon} alt="Logo" width={"120px"} />
                </div>
              </div>
            </h1>
          </Link>
          <BurderWrapper
            className="pointer"
            onClick={() => toggleSidebar(!sidebarOpen)}
          >
            <BurgerIcon />
          </BurderWrapper>
          <UlWrapper sidebarOpen={sidebarOpen} className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <Link
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="home"
                spy={true}
                smooth={true}
                offset={-80}
                onClick={() => toggleSidebar(false)} // Close sidebar on link click
              >
                Home
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="about"
                spy={true}
                smooth={true}
                offset={-80}
                onClick={() => toggleSidebar(false)} // Close sidebar on link click
              >
                About Us
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="services"
                spy={true}
                smooth={true}
                offset={-80}
                onClick={() => toggleSidebar(false)}
              >
                Services
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="projects"
                spy={true}
                smooth={true}
                offset={-80}
                onClick={() => toggleSidebar(false)}
              >
                Projects
              </Link>
            </li>

            <li className="semiBold font15 pointer">
              <Link
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
                onClick={() => toggleSidebar(false)}
              >
                Contact
              </Link>
            </li>
          </UlWrapper>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  transition: height 0.3s ease;
`;

const NavInner = styled.div`
  position: relative;
  height: 110%;
`;

const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;

const UlWrapper = styled.ul`
  display: flex;
  transition: all 0.3s ease;

  li {
    position: relative; /* Added for proper positioning of the border if needed */
  }

  li .active {
    color: #99a3a4; /* Change to your desired active color */
    border-bottom: 2px solid #99a3a4;
  }

  li:hover a {
    color: #99a3a4 !important; /* Ensures the color change on hover */
  }

  @media (max-width: 760px) {
    display: ${({ sidebarOpen }) => (sidebarOpen ? "flex" : "none")};
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    background-color: white;
    padding-top: 80px;
    z-index: 998;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;
