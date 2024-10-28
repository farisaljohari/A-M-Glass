import React from "react";
import styled from "styled-components";
import LogoIcon from "../../assets/img/full_logo.png";
// Assets
import HeaderImage from "../../assets/img/intro.JPG";
import QuotesIcon from "../../assets/svg/Quotes";
import Dots from "../../assets/svg/Dots";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <>
      <div id="home" style={{ marginTop: "100px" }}>
        <LogoRow className="flexCenter">
          <img src={LogoIcon} alt="Logo" width={"420px"} />
        </LogoRow>{" "}
      </div>
      <Wrapper id="home" className="container flexSpaceCenter">
        <LeftSide className="flexCenter">
          <div>
            <h1 className="extraBold font60">
              Welcome to <span style={{ color: "#1e00ff" }}>A&M</span>{" "}
              <span style={{ color: "#ff0202" }}>Architectural Glass,Inc</span>{" "}
              ​Website
            </h1>
            <HeaderP className="font18 semiBold">
              We appreciate the time you are spending to check out our company!
              We thank you in advance for letting us take care of this project
              for you, Quality and great service is what we offer, the best
              products and services available.
            </HeaderP>
            <BtnWrapper>
              <Link to="projects">
                <CustomButton>See Our Projects</CustomButton>
              </Link>
            </BtnWrapper>
          </div>
        </LeftSide>
        <RightSide>
          <ImageWrapper>
            <Img
              className="radius8"
              src={HeaderImage}
              alt="office"
              style={{ zIndex: 9, width: "550px", height: "500px" }}
            />
            <QuoteWrapper className="flexCenter darkBg radius8">
              <QuotesWrapper>
                <QuotesIcon />
              </QuotesWrapper>
              <div>
                <p className="font15 whiteColor">
                  <em>
                    We believe that the smallest things can make a big
                    difference.
                  </em>
                </p>
              </div>
            </QuoteWrapper>
            <DotsWrapper>
              <Dots />
            </DotsWrapper>
          </ImageWrapper>
          <GreyDiv className="lightBg"></GreyDiv>
        </RightSide>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
  width: 100%;
  min-height: 500px;
  margin-bottom: 50px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
const CustomButton = styled.button`
  width: 100%;
  padding: 15px 25px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background: linear-gradient(45deg, #888, #ccc); /* Initial gradient color */
  border: none;
  border-radius: 8px;
  cursor: pointer !important;
  transition: background 0.3s ease-in-out; /* Smooth transition for background */

  &:hover {
    background: linear-gradient(
      45deg,
      #666,
      #aaa
    ); /* Darker gradient on hover */
  }
`;

const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  background-color: #f6f6f6;
  @media (max-width: 960px) {
    display: none;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img = styled.img`
  width: 100%; /* Take full width of parent container */
  max-width: 100%; /* Ensure it doesn't exceed its original size */
  height: auto; /* Maintain aspect ratio */
  border-radius: 8px; /* Rounded corners as per your design */

  @media (max-width: 960px) {
    /* Adjust styles for medium screens */
    width: 80%; /* 80% of the parent container width */
  }

  @media (max-width: 560px) {
    /* Adjust styles for small screens */
    width: 100%; /* Full width on smaller screens */
  }
`;

const QuoteWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 50px;
  max-width: 330px;
  padding: 30px;
  z-index: 99;
  background-color: #99a3a4;
  @media (max-width: 960px) {
    left: 20px;
  }
  @media (max-width: 560px) {
    bottom: -50px;
  }
`;
const QuotesWrapper = styled.div`
  position: absolute;
  left: -20px;
  top: -10px;
`;
const DotsWrapper = styled.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;
const LogoRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 40px; /* Add space between logo and content */
  @media (max-width: 960px) {
    margin-bottom: 30px; /* Adjust margin for smaller screens */
  }
`;
