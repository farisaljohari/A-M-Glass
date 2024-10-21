import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStoreAlt,
  faCubes,
  faWindowMaximize,
  faBorderAll,
  faShieldAlt,
  faDoorClosed,
  faHeadSideMask,
} from "@fortawesome/free-solid-svg-icons";

export default function Services() {
  const servicesData = [
    {
      name: "Custom Commercial Frames",
      icon: <FontAwesomeIcon icon={faCubes} />,
      text: "Tailored frames for commercial buildings to fit any architectural style.",
    },
    {
      name: "Storefronts",
      icon: <FontAwesomeIcon icon={faStoreAlt} />,
      text: "Design and installation of beautiful storefronts to enhance your business presence.",
    },
    {
      name: "Curtain Walls",
      icon: <FontAwesomeIcon icon={faWindowMaximize} />,
      text: "We create durable curtain walls that meet aesthetic and performance needs.",
    },
    {
      name: "Glass Rails",
      icon: <FontAwesomeIcon icon={faBorderAll} />,
      text: "Sleek, modern glass railings for both interior and exterior applications.",
    },
    {
      name: "Sneeze Guards",
      icon: <FontAwesomeIcon icon={faHeadSideMask} />,
      text: "Protective sneeze guards for commercial spaces, custom-made for safety.",
    },
    {
      name: "Bullet Resistant Glass",
      icon: <FontAwesomeIcon icon={faShieldAlt} />,
      text: "Security glass solutions to keep your business safe.",
    },
    {
      name: "All Glass Entrances",
      icon: <FontAwesomeIcon icon={faDoorClosed} />,
      text: "Seamless, elegant glass entrances for a modern look.",
    },
  ];

  return (
    <Wrapper id="services">
      <div className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Our Commercial Services</h2>
            <p>
              We offer a wide range of services tailored for commercial
              buildings:
            </p>
          </div>
          <GridWrapper>
            {servicesData
              .slice(0, servicesData.length - 1)
              .map((service, index) => (
                <ServiceCard key={`${service.name}-${index}`}>
                  <IconWrapper>{service.icon}</IconWrapper>
                  <h3>{service.name}</h3>
                  <p>{service.text}</p>
                </ServiceCard>
              ))}
            <CenteredCard>
              <ServiceCard>
                <IconWrapper>
                  {servicesData[servicesData.length - 1].icon}
                </IconWrapper>
                <h3>{servicesData[servicesData.length - 1].name}</h3>
                <p>{servicesData[servicesData.length - 1].text}</p>
              </ServiceCard>
            </CenteredCard>
          </GridWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

// Styled Components
const Wrapper = styled.section`
  width: 100%;
  background-color: #f9f9f9;
  padding: 60px 0;
  .section-title {
    margin-bottom: 40px;
    h2 {
      font-size: 2.5rem;
      font-weight: 700;
      color: #333;
    }
    p {
      font-size: 1.1rem;
      color: #777;
    }
  }
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }

  h3 {
    font-size: 1.5rem;
    margin: 20px 0;
    color: #333;
  }

  p {
    font-size: 1rem;
    color: #666;
    line-height: 1.6;
  }
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: #707b7c;
  margin-bottom: 20px;
`;

const CenteredCard = styled.div`
  display: flex;
  justify-content: center;
  grid-column: 1 / -1; // Make sure this card takes the full width
`;

// End of Styled Components
