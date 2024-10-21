import React from "react";
import styled from "styled-components";
// Assets
import HeaderImage from "../../assets/img/about.jpeg"; // Replace with your actual image path

export default function About() {
  return (
    <Wrapper id="about">
      <ImageWrapper>
        <Img src={HeaderImage} alt="About us" />
      </ImageWrapper>

      <ContentWrapper>
        <Title>About Us</Title>
        <Paragraph>
          A&M Architectural Glass is a well-known family business that takes
          care of each one of its customers. Our attention is directed to cover
          even the smallest details of our work. We do our best to satisfy
          customers' needs in quality, time, and price. A&M Architectural Glass
          offers the best products and services available for the lowest prices.
        </Paragraph>
        <h3>Why Choose Us?</h3>
        <Paragraph>
          By offering you a wide variety of choices, including glass colors,
          thickness, shapes, and designs, you can choose the glass type you want
          us to apply to your place and do what we do best: make it a wonderful
          and unique place with our top-notch products and services. Customer
          satisfaction is our main goal at A&M Architectural Glass. Whether you
          are a homeowner or a contractor, whether you have a small internal
          design change or a big shopping center, we will always support you and
          provide you with top-quality products, professional assistance, and
          the lowest prices in the market.
        </Paragraph>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding: 80px 20px 0; // Set bottom padding to 0  min-height: 840px;
  margin-bottom: 0;
  background: linear-gradient(180deg, #f0f0f0 0%, #ffffff 100%);
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  @media (max-width: 960px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ContentWrapper = styled.div`
  max-width: 600px; // Adjusted width for better balance
  padding: 20px; // Added padding for spacing
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  line-height: 1.6rem;
  margin-bottom: 20px;
  color: #555; // Softer text color
`;

const ImageWrapper = styled.div`
  max-width: 500px; // Restrict image width for balance
  flex: 1; // Flex-grow to take remaining space
  margin-right: 20px; // Space between image and text
`;

const Img = styled.img`
  width: 100%;
  border-radius: 15px; // Rounded corners for the image
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;
