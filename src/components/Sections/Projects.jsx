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
            <h1 className="font40 extraBold">Our Awesome Projects</h1>
          </HeaderInfo>
          <div className="row">
            {projectData.map((project, index) => (
              <ProjectCard className="col-xs-12 col-sm-6 col-md-4" key={index}>
                <RandomAutoplaySlider images={project.images} />
                <ProjectTitle>{project.title}</ProjectTitle>
                <LocationInfo>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <p>{project.location}</p>
                </LocationInfo>
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

    const interval = Math.floor(Math.random() * (5000 - 3000 + 1)) + 3000; // Random interval between 3s and 5s
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

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0; // Space around section

  img {
    border-radius: 10px; // Rounded corners
    display: block; // Prevent bottom space
  }
`;

const HeaderInfo = styled.div`
  text-align: center; // Centered header
  margin-bottom: 30px; // Space below header
`;

const ProjectCard = styled.div`
  position: relative; // Enable positioning for absolute elements
  margin-bottom: 30px; // Space between projects
  overflow: hidden; // Clip overflow
  border-radius: 10px; // Rounded corners for cards
  transition: transform 0.3s ease; // Animation on hover

  &:hover {
    transform: scale(1.05); // Scale effect on hover
  }
`;

const Image = styled.div`
  width: 100%;
  height: 220px; // Fixed height for the card
  overflow: hidden; // Prevent overflow

  img {
    width: 100%; // Fill the container
    height: 100%; // Fill the height of the container
    object-fit: cover; // Cover the entire area without distortion
    border-radius: 10px; // Keep rounded corners
  }
`;

const ProjectTitle = styled.h2`
  text-align: center;
  font-size: 1.2em;
  font-weight: bold;
  color: #ffffff; // White text color
  margin: 10px 0; // Space around title
  position: absolute; // Positioning relative to card
  top: 10px; // Adjust position as needed
  left: 50%; // Center horizontally
  transform: translateX(-50%); // Centering adjustment
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); // Add shadow for readability
`;

const LocationInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  font-size: 0.9em;
  font-weight: bold;
  color: white; // Change icon and text color
  position: absolute; // Positioning relative to card
  bottom: 10px; // Position above bottom
  left: 50%; // Center horizontally
  transform: translateX(-50%); // Adjust for centering
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);

  svg {
    margin-right: 5px; // Space between icon and text
    color: white; // Change icon color
    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.7)); // Shadow for the SVG
  }
`;
