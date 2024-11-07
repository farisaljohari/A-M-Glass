import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { Button } from "antd";

export default function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const [totalPages, setTotalPages] = useState(1); // Track total pages
  const [hasMore, setHasMore] = useState(true); // Track if more projects are available
  const [buttonLoading, setButtonLoading] = useState(false);

  // Fetch projects from API
  const fetchProjects = async (page = 1) => {
    setLoading(page === 1); // Set loading true only for the first fetch (initial page load)
    setButtonLoading(page > 1); // Only show button loading when fetching more data

    try {
      const response = await axios.get(
        "https://a-m-admin-api.onrender.com/project",
        {
          params: { page, limit: 4 },
        }
      );

      const { data, totalPages } = response.data;

      setProjects((prev) => {
        const newProjects = data.filter(
          (newProject) =>
            !prev.some(
              (existingProject) => existingProject.uuid === newProject.uuid
            )
        );
        return [...prev, ...newProjects]; // Append only unique projects
      });

      setTotalPages(totalPages);
      setHasMore(page < totalPages); // Check if there are more pages to load
    } catch (error) {
      const message =
        error.response?.data?.message || "Error fetching the projects.";
      console.log(message);
    } finally {
      setLoading(false); // Stop page loading once the data is fetched
      setButtonLoading(false); // Stop button loading once data is fetched for "See More"
    }
  };

  useEffect(() => {
    fetchProjects(currentPage); // Fetch projects on initial load or when page changes
  }, [currentPage]);

  const handleSeeMore = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1); // Increment page to load more projects
    }
  };
  const handleProjectClick = (project) => {
    setActiveProject(project);
    setModalOpen(true);
  };

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
            {loading ? (
              <LoaderWrapper>
                <ClipLoader color="#00BFFF" loading={loading} size={50} />
              </LoaderWrapper>
            ) : (
              projects.map((project, index) => (
                <ProjectCard
                  className="col-xs-12 col-sm-6"
                  key={index}
                  onClick={() => handleProjectClick(project)}
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
              ))
            )}
          </div>
          {hasMore && !loading && (
            <Button
              variant="outlined"
              color="primary"
              onClick={handleSeeMore}
              style={{
                marginTop: "20px",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              disabled={buttonLoading} // Disable the button when loading
            >
              {buttonLoading ? (
                <ClipLoader color="#ffffff" loading={true} size={20} />
              ) : (
                "See More"
              )}
            </Button>
          )}
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
const ModalSlider = ({ images }) => {
  if (images.length === 1) {
    return (
      <ModalImage>
        <img src={images[0].image} alt="Project Image" loading="lazy" />
      </ModalImage>
    );
  }

  return (
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
          <img
            src={image.image}
            alt={`Project Image ${imgIndex + 1}`}
            loading="lazy"
          />
        </ModalImage>
      ))}
    </Slider>
  );
};

// Auto-playing slider for each project (outside the modal)
const RandomAutoplaySlider = ({ images }) => {
  if (images.length === 1) {
    return (
      <CardImage>
        <img src={images[0].image} alt="Project Image" loading="lazy" />
      </CardImage>
    );
  }

  return (
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
          <img
            src={image.image}
            alt={`Project Image ${imgIndex + 1}`}
            loading="lazy"
          />
        </CardImage>
      ))}
    </Slider>
  );
};

// Pagination button styling
const SeeMoreButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #00bfff;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #008b8b;
  }
`;

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
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px; /* Match the height of the image */
  width: 100%; /* Match the width of the image container */
`;
