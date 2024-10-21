import React from "react";
import styled from "styled-components";

const ServiceBox = ({ icon, title, subtitle, backgroundImage }) => {
  return (
    <ServiceBoxWrapper backgroundImage={backgroundImage}>
      <Overlay>
        <Icon className={`icon-${icon}`}></Icon>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Overlay>
    </ServiceBoxWrapper>
  );
};

export default ServiceBox;

const ServiceBoxWrapper = styled.div`
  position: relative;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  color: white; // Change text color if needed
  overflow: hidden;
  height: 300px; // Set a fixed height for uniformity
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05); // Optional: Scale effect on hover
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); // Semi-transparent black overlay
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Icon = styled.div`
  // Add styles for your icon here, e.g.:
  margin-bottom: 15px;
`;

const Title = styled.h3`
  font-size: 24px; // Adjust as needed
  margin: 10px 0;
`;

const Subtitle = styled.p`
  font-size: 16px; // Adjust as needed
`;
