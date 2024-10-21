import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <Wrapper id="contact">
      <div
        className="lightBg"
        style={{
          background: "linear-gradient(to right, #e5e8e8 0%, #707b7c 100%)",
          paddingBottom: "50px",
        }}
      >
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Let's get in touch</h1>
            <p className="font15">
              Please fill out the form below to send us an email, and we will
              get back to you as soon as possible.
            </p>
          </HeaderInfo>
          <Row>
            <FormWrapper className="col-xs-12 col-sm-12 col-md-6 col-lg-8">
              <Form>
                <label className="font13">First name:</label>
                <Input type="text" id="fname" name="fname" />
                <label className="font13">Email:</label>
                <Input type="email" id="email" name="email" />
                <label className="font13">Message:</label>
                <Textarea rows="4" id="message" name="message" />
                <SumbitWrapper className="flex">
                  <ButtonInput
                    type="submit"
                    value="Send Message"
                    className="pointer animate radius8"
                  />
                </SumbitWrapper>
              </Form>
            </FormWrapper>
            <ContactInfo className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
              <h3>Contact Info</h3>
              <div className="contact-item">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <p>
                  <a
                    href="https://maps.app.goo.gl/qG1gXgzQ1M9Vpncz6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    4715 TX-36 Suite #6, Rosenberg, TX 77471
                  </a>
                </p>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faPhone} />
                <p>
                  <a href="tel:+12819062122">(713) 376 - 5363</a>
                </p>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faEnvelope} />
                <p>
                  <a href="mailto:info@amglasswork.com">info@amglasswork.com</a>
                </p>
              </div>
              <SocialIcons>
                <a
                  href={"https://www.facebook.com/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} /> {/* Facebook icon */}
                </a>
                <a
                  href={"https://www.instagram.com/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} /> {/* Instagram icon */}
                </a>
                <a
                  href={"https://maps.app.goo.gl/qG1gXgzQ1M9Vpncz6"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> {/* Maps icon */}
                </a>
              </SocialIcons>
            </ContactInfo>
          </Row>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  background-color: #fff; /* Set the background of the entire section to white */
`;

const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  color: #000; /* Set text color to black for better contrast */
  @media (max-width: 860px) {
    text-align: center;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  @media (max-width: 860px) {
    flex-direction: column; /* Stack items vertically on small screens */
    align-items: center; /* Center the content */
  }
`;

const FormWrapper = styled.div`
  padding: 30px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-right: 30px;
  width: 100%; /* Ensure it takes up full width on smaller screens */

  @media (max-width: 860px) {
    margin-right: 0;
    margin-bottom: 30px; /* Add space between form and contact info */
    width: 100%; /* Take full width on small screens */
  }
`;
const Form = styled.form`
  padding: 20px 0;

  label {
    display: block;
    margin-bottom: 5px;
    color: #333; /* Darker label color */
  }
`;

const Input = styled.input`
  width: 100%;
  background-color: transparent;
  border: 0;
  outline: none;
  border-bottom: 1px solid #707070;
  height: 40px; /* Increased height for a better look */
  margin-bottom: 30px;
  padding: 5px; /* Added padding for better spacing */

  &:focus {
    border-bottom: 2px solid #1c2833; /* Change border color on focus */
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  background-color: transparent;
  border: 0;
  outline: none;
  border-bottom: 1px solid #707070;
  min-height: 100px;
  margin-bottom: 30px;
  padding: 5px; /* Added padding for better spacing */

  &:focus {
    border-bottom: 2px solid #1c2833; /* Change border color on focus */
  }
`;

const ButtonInput = styled.input`
  border: 1px solid #1c2833;
  background-color: #1c2833;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  border-radius: 5px; /* Rounded button corners */

  &:hover {
    background-color: #2c3e50;
    border: 1px solid #2c3e50;
    color: #fff;
  }
`;

const ContactInfo = styled.div`
  color: #fff;
  padding: 40px;
  background-color: #1c2833;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%; /* Ensure it takes up full width on smaller screens */

  @media (max-width: 860px) {
    width: 100%; /* Take full width on small screens */
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-around; /* Distribute icons evenly */
  margin-top: 20px; /* Spacing above social icons */
  flex-wrap: wrap; /* Allow wrapping for responsiveness */

  a {
    color: white; /* Icon color */
    font-size: 28px; /* Slightly larger icon size */
    transition: color 0.3s; /* Smooth color transition */

    &:hover {
      color: #5499c7; /* Change icon color on hover */
    }
  }
`;

const SumbitWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 860px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;
