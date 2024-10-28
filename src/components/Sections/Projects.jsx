import React, { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faTimes } from "@fortawesome/free-solid-svg-icons";

// Assets
import ProjectImg1_1 from "../../assets/img/projects/Costco1.jpeg";
import ProjectImg1_2 from "../../assets/img/projects/Costco2.jpeg";
import ProjectImg1_3 from "../../assets/img/projects/Costco3.jpeg";
import ProjectImg1_4 from "../../assets/img/projects/Costco4.jpeg";
import ProjectImg2_1 from "../../assets/img/projects/proj2.1.jpeg";
import ProjectImg2_2 from "../../assets/img/projects/proj2.2.jpeg";
import ProjectImg2_4 from "../../assets/img/projects/proj2.3.png";
import ProjectImg2_3 from "../../assets/img/projects/proj2.3.jpeg";
import ProjectImg2_5 from "../../assets/img/projects/proj2.5.png";
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
import ProjectImg8_7 from "../../assets/img/projects/proj8.7.jpeg";
import ProjectImg8_8 from "../../assets/img/projects/proj8.8.jpeg";
import ProjectImg9_1 from "../../assets/img/projects/proj9.1.jpeg";
import ProjectImg9_2 from "../../assets/img/projects/proj9.2.jpeg";
import ProjectImg9_3 from "../../assets/img/projects/proj9.3.jpeg";
import ProjectImg10_1 from "../../assets/img/projects/proj10.1.jpeg";
import ProjectImg10_2 from "../../assets/img/projects/proj10.2.jpeg";
import ProjectImg10_3 from "../../assets/img/projects/proj10.3.jpeg";
import ProjectImg10_4 from "../../assets/img/projects/proj10.4.jpeg";
import ProjectImg10_5 from "../../assets/img/projects/proj10.5.jpeg";
import ProjectImg11_1 from "../../assets/img/projects/proj11.1.jpeg";
import ProjectImg11_2 from "../../assets/img/projects/proj11.4.jpeg";
import ProjectImg11_3 from "../../assets/img/projects/proj11.2.jpeg";
import ProjectImg11_4 from "../../assets/img/projects/proj11.3.jpeg";
import ProjectImg12_1 from "../../assets/img/projects/proj12.1.jpeg";
import ProjectImg12_2 from "../../assets/img/projects/proj12.4.jpeg";
import ProjectImg12_3 from "../../assets/img/projects/proj12.2.jpeg";
import ProjectImg13_1 from "../../assets/img/projects/proj13.1.jpeg";
import ProjectImg13_2 from "../../assets/img/projects/proj13.2.jpeg";
import ProjectImg13_3 from "../../assets/img/projects/proj13.3.jpeg";
import ProjectImg13_4 from "../../assets/img/projects/proj13.4.jpeg";
import ProjectImg14_1 from "../../assets/img/projects/proj14.1.jpeg";
import ProjectImg15_1 from "../../assets/img/projects/proj15.1.jpeg";
import ProjectImg15_2 from "../../assets/img/projects/proj15.2.jpeg";
import ProjectImg15_3 from "../../assets/img/projects/proj15.3.jpeg";
import ProjectImg15_4 from "../../assets/img/projects/proj15.4.jpeg";

const projectData = [
  {
    images: [ProjectImg1_1, ProjectImg1_2, ProjectImg1_3, ProjectImg1_4],
    location: "Richmond, Texas",
    title: "Costco",
  },
  {
    images: [
      ProjectImg2_4,
      ProjectImg2_5,
      ProjectImg2_1,
      ProjectImg2_2,
      ProjectImg2_3,
    ],
    location: "Houston, Texas, Post Oak Blvd",
    title: "Tanishq Jewelers",
  },
  {
    images: [ProjectImg3_3, ProjectImg3_1, ProjectImg3_2],
    location: "Beasley, Texas",
    title: "Chemical factory",
  },
  {
    images: [ProjectImg4_1, ProjectImg4_2],
    location: "Houston, Texas",
    title: "Steel supply",
  },
  {
    images: [ProjectImg5_2, ProjectImg5_4, ProjectImg5_3, ProjectImg5_1],
    location: "Katy, Texas",
    title: "I shine car wash",
  },
  {
    images: [ProjectImg6_4, ProjectImg6_1, ProjectImg6_2, ProjectImg6_3],
    location: "West Leak, Houston, Texas",
    title: "I shine car wash",
  },
  {
    images: [ProjectImg7_3, ProjectImg7_4, ProjectImg7_1, ProjectImg7_2],
    location: "Houston, Texas",
    title: "JD Sport Galleria Mall",
  },
  {
    images: [
      ProjectImg8_7,
      ProjectImg8_3,
      ProjectImg8_1,
      ProjectImg8_2,
      ProjectImg8_4,
      ProjectImg8_5,
      ProjectImg8_6,
      ProjectImg8_8,
    ],
    location: "Harlingen, Texas",
    title: "Club car wash",
  },
  {
    images: [ProjectImg9_1, ProjectImg9_2, ProjectImg9_3],
    location: "El Campo, Texas",
    title: "Red tailed Hawk",
  },
  {
    images: [
      ProjectImg10_5,
      ProjectImg10_1,
      ProjectImg10_2,
      ProjectImg10_3,
      ProjectImg10_4,
    ],
    location: "Weslaco, Texas",
    title: "I shine car wash",
  },
  {
    images: [ProjectImg11_1, ProjectImg11_2, ProjectImg11_3, ProjectImg11_4],
    location: "Houston, Texas",
    title: "Auto Zone",
  },
  {
    images: [ProjectImg12_3, ProjectImg12_1, ProjectImg12_2, ProjectImg13_1],
    location: "Rosenberg, Texas",
    title: "OCUSOFT",
  },
  {
    images: [ProjectImg13_1, ProjectImg13_2, ProjectImg13_3, ProjectImg13_4],
    location: "Houston, Texas",
    title: "Railing System",
  },
  {
    images: [ProjectImg14_1, ProjectImg14_1],
    location: "Houston, Texas",
    title: "Gucci Gallery",
  },
  {
    images: [ProjectImg15_1, ProjectImg15_2, ProjectImg15_3, ProjectImg15_4],
    location: "Katy Mills, Texas",
    title: "Miss A",
  },
];

export default function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  // Open modal with selected project
  const handleProjectClick = (project) => {
    setActiveProject(project);
    setModalOpen(true);
  };

  // Close the modal
  const handleCloseModal = () => {
    setModalOpen(false);
    setActiveProject(null);
  };

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
                onClick={() => handleProjectClick(project)} // Open modal on click
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

      {modalOpen && (
        <ModalWrapper>
          <CloseButton onClick={handleCloseModal}>
            <FontAwesomeIcon icon={faTimes} />
          </CloseButton>
          <ModalContent>
            <ModalSlider images={activeProject.images} />
            <ProjectDetails>
              <h2>{activeProject.title}</h2>
              <LocationInfo>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <p>{activeProject.location}</p>
              </LocationInfo>
            </ProjectDetails>
          </ModalContent>
        </ModalWrapper>
      )}
    </Wrapper>
  );
}

// Slider Component inside Modal
const ModalSlider = ({ images }) => (
  <Slider
    dots={false}
    infinite={true}
    speed={500}
    slidesToShow={1}
    slidesToScroll={1}
    swipe={true}
    autoplay={false}
    arrows={true}
    prevArrow={<PrevArrow />}
    nextArrow={<NextArrow />}
  >
    {images.map((image, imgIndex) => (
      <ModalImage key={imgIndex}>
        <img src={image} alt={`Project Image ${imgIndex + 1}`} />
      </ModalImage>
    ))}
  </Slider>
);

// Auto-playing slider for each project (outside the modal)
const RandomAutoplaySlider = ({ images }) => (
  <Slider
    dots={true}
    infinite={true}
    speed={500}
    slidesToShow={1}
    slidesToScroll={1}
    autoplay={true}
    autoplaySpeed={8000}
  >
    {images.map((image, imgIndex) => (
      <CardImage key={imgIndex}>
        <img src={image} alt={`Project Image ${imgIndex + 1}`} />
      </CardImage>
    ))}
  </Slider>
);

// Styled Components

const Wrapper = styled.section`
  padding: 60px 0;
`;

const HeaderInfo = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const ProjectCard = styled.div`
  cursor: pointer;
  margin-bottom: 30px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  transition: 0.3s ease-in-out;
  padding: 10px;
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

const ContentWrapper = styled.div`
  margin-top: 20px;
`;

const ProjectTitle = styled.h3`
  font-size: 20px;
  color: #333;
`;

const LocationInfo = styled.div`
  display: flex;

  align-items: center;
  font-size: 14px;
  color: #777;

  & svg {
    margin-right: 5px;
  }
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const CloseButton = styled.button`
  position: absolute;
  z-index: 1100;
  top: 20px;
  right: 40px;
  background: transparent;
  border: none;
  color: #e74c3c;
  cursor: pointer;
  font-size: 24px;
  &:hover {
    color: #c0392b; // Change color on hover
  }
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 8px;
  width: 80%;
  max-width: 800px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const ModalImage = styled.div`
  img {
    width: 100%; // Full width in modal
    height: 80vh; // Full height in modal for large screens
    border-radius: 8px;

    // For tablet view
    @media (max-width: 1024px) {
      height: 60vh; // Reduce height for tablets
    }

    // For mobile view
    @media (max-width: 768px) {
      height: 40vh; // Further reduce height for mobile
    }
  }
`;

const ProjectDetails = styled.div`
  margin-top: 20px;

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }
`;

const PrevArrow = ({ onClick }) => (
  <ArrowButton className="slick-prev" onClick={onClick}></ArrowButton>
);

const NextArrow = ({ onClick }) => (
  <ArrowButton className="slick-next" onClick={onClick}></ArrowButton>
);
const ArrowButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 30px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;

  &.slick-prev {
    left: 10px;
  }

  &.slick-next {
    right: 10px;
  }

  &:hover {
    color: #ccc;
  }
`;
const CardImage = styled.div`
  img {
    width: 100%; // Set a smaller size for card images
    height: 550px; // Maintain aspect ratio
    border-radius: 10px;

    // Tablet view
    @media (max-width: 1024px) {
      height: 400px; // Reduced height for tablet
    }

    // Mobile view
    @media (max-width: 768px) {
      height: 300px; // Reduced height for mobile
    }
  }
`;
