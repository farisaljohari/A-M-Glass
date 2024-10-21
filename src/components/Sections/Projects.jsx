import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

// Assets
import ProjectImg1_1 from "../../assets/img/projects/Costco1.jpeg";
import ProjectImg1_2 from "../../assets/img/projects/Costco2.jpeg";
import ProjectImg1_3 from "../../assets/img/projects/Costco3.jpeg";
import ProjectImg1_4 from "../../assets/img/projects/Costco4.jpeg";
import ProjectImg2_1 from "../../assets/img/projects/proj2.1.jpeg";
import ProjectImg2_2 from "../../assets/img/projects/proj2.2.jpeg";
import ProjectImg2_3 from "../../assets/img/projects/proj2.3.jpeg";
import ProjectImg3_1 from "../../assets/img/projects/proj3.1.jpeg";
import ProjectImg3_2 from "../../assets/img/projects/proj3.2.jpeg";
import ProjectImg3_3 from "../../assets/img/projects/proj3.3.jpeg";
import ProjectImg4_1 from "../../assets/img/projects/proj4.1.jpeg";
import ProjectImg4_2 from "../../assets/img/projects/proj4.2.jpeg";
import ProjectImg5_1 from "../../assets/img/projects/proj5.1.jpeg";
import ProjectImg5_2 from "../../assets/img/projects/proj5.2.jpeg";
import ProjectImg5_3 from "../../assets/img/projects/proj5.3.jpeg";
import ProjectImg5_4 from "../../assets/img/projects/proj5.4.jpeg";
import ProjectImg6_1 from "../../assets/img/projects/proj6.1.jpeg";
import ProjectImg6_2 from "../../assets/img/projects/proj6.2.jpeg";
import ProjectImg6_3 from "../../assets/img/projects/proj6.3.jpeg";
import ProjectImg6_4 from "../../assets/img/projects/proj6.4.jpeg";
import ProjectImg7_1 from "../../assets/img/projects/proj7.1.jpeg";
import ProjectImg7_2 from "../../assets/img/projects/proj7.2.jpeg";
import ProjectImg7_3 from "../../assets/img/projects/proj7.3.jpeg";
import ProjectImg7_4 from "../../assets/img/projects/proj7.4.jpeg";
import ProjectImg8_1 from "../../assets/img/projects/proj8.1.jpeg";
import ProjectImg8_2 from "../../assets/img/projects/proj8.2.jpeg";
import ProjectImg8_3 from "../../assets/img/projects/proj8.3.jpeg";
import ProjectImg8_4 from "../../assets/img/projects/proj8.4.jpeg";
import ProjectImg8_5 from "../../assets/img/projects/proj8.5.jpeg";
import ProjectImg8_6 from "../../assets/img/projects/proj8.6.jpeg";
import ProjectImg9_1 from "../../assets/img/projects/proj9.1.jpeg";
import ProjectImg9_2 from "../../assets/img/projects/proj9.2.jpeg";
import ProjectImg9_3 from "../../assets/img/projects/proj9.3.jpeg";

const projectData = [
  {
    images: [ProjectImg1_1, ProjectImg1_2, ProjectImg1_3, ProjectImg1_4],
    location: "Richmond, Texas",
    title: "Costco",
  },
  {
    images: [ProjectImg2_1, ProjectImg2_2, ProjectImg2_3],
    location: "Houston, Texas",
    title: "Tanishq Jewelers",
  },
  {
    images: [ProjectImg3_1, ProjectImg3_2, ProjectImg3_3],
    location: "Beasley, Texas",
    title: "Chemical factory",
  },
  {
    images: [ProjectImg4_1, ProjectImg4_2],
    location: "Houston, Texas",
    title: "Steel supply",
  },
  {
    images: [ProjectImg5_4, ProjectImg5_3, ProjectImg5_2, ProjectImg5_1],
    location: "Houston, Texas",
    title: "I shine car wash",
  },
  {
    images: [ProjectImg6_1, ProjectImg6_2, ProjectImg6_3, ProjectImg6_4],
    location: "Houston, Texas",
    title: "I shine car wash",
  },
  {
    images: [ProjectImg7_3, ProjectImg7_4, ProjectImg7_1, ProjectImg7_2],
    location: "Houston, Texas",
    title: "JD Sport Galleria Mall",
  },
  {
    images: [
      ProjectImg8_1,
      ProjectImg8_2,
      ProjectImg8_3,
      ProjectImg8_4,
      ProjectImg8_5,
      ProjectImg8_6,
    ],
    location: "Harlingen, Texas",
    title: "Club car wash",
  },
  {
    images: [ProjectImg9_1, ProjectImg9_2, ProjectImg9_3],
    location: "El Campo, Texas",
    title: "Red tailed Hawk",
  },
];

export default function Projects() {
  return (
    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Projects</h1>
          </HeaderInfo>
          <div className="row">
            {projectData.map((project, index) => (
              <ProjectCard
                className="col-xs-12 col-sm-6" // Two cards per row on small and medium screens
                key={index}
              >
                <RandomAutoplaySlider images={project.images} />
                <ContentWrapper>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <LocationInfo>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <p>{project.location}</p>
                  </LocationInfo>
                </ContentWrapper>
              </ProjectCard>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const RandomAutoplaySlider = ({ images }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const autoplay = () => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    };

    const interval = Math.floor(Math.random() * (5000 - 3000 + 1)) + 11000; // Random interval between 3s and 5s
    const timer = setInterval(autoplay, interval);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return (
    <Slider
      dots={false}
      infinite={true}
      speed={500}
      slidesToShow={1}
      slidesToScroll={1}
      swipe={true}
      swipeToSlide={true}
      touchThreshold={10}
      autoplay={false}
      arrows={true}
      prevArrow={<PrevArrow />} // Use custom left arrow
      nextArrow={<NextArrow />} // Use custom right arrow
      ref={sliderRef}
    >
      {images.map((image, imgIndex) => (
        <Image key={imgIndex}>
          <img src={image} alt={`Project Image ${imgIndex + 1}`} />
        </Image>
      ))}
    </Slider>
  );
};

// Styled Components
const PrevArrow = ({ onClick }) => (
  <ArrowButton className="slick-prev" onClick={onClick}></ArrowButton>
);

const NextArrow = ({ onClick }) => (
  <ArrowButton className="slick-next" onClick={onClick}></ArrowButton>
);

// Styled Component for Arrow Button
const ArrowButton = styled.button`
  background: none;
  border: none;
  color: #23ce6b; /* Customize color */
  font-size: 24px; /* Customize size */
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;

  &.slick-prev {
    left: 10px; /* Position for left arrow */
  }

  &.slick-next {
    right: 10px; /* Position for right arrow */
  }

  &:hover {
    color: #1e8a50; /* Hover color */
  }
`;

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  img {
    border-radius: 10px;
    display: block;
    width: 100%;
    height: auto;
  }
`;

const HeaderInfo = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const ProjectCard = styled.div`
  margin-bottom: 30px;
  transition: transform 0.3s ease-in-out;
  overflow: hidden;
  border-radius: 10px;
  background-color: #f8f8f8;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-10px); // Lift effect on hover
  }
`;

const Image = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ContentWrapper = styled.div`
  padding: 20px;
  text-align: center;
`;

const ProjectTitle = styled.h2`
  font-size: 1.5em;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

const LocationInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9em;
  color: #777;

  svg {
    margin-right: 8px;
    color: #777;
  }

  p {
    margin: 0;
  }
`;
