import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import emailjs from "emailjs-com"; // Ensure you're using emailjs-com for compatibility
import { useSnackbar } from "notistack"; // Import useSnackbar

const initialState = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const { enqueueSnackbar } = useSnackbar(); // Use useSnackbar
  const [{ name, email, message }, setState] = useState(initialState);
  const [validEmail, setValidEmail] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
    if (name === "email") {
      setValidEmail(validateEmail(value));
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validEmail || !message) {
      enqueueSnackbar("Please enter a valid email and message.", {
        variant: "error",
      }); // Use Notistack for error
      return;
    }

    setIsSubmitting(true);

    const templateParams = {
      email,
      name: name || email.split("@")[0],
      message,
    };

    // Using EmailJS to send the email
    emailjs
      .send(
        "service_nxdc3m7", // Replace with your service ID
        "template_qfacgdq", // Replace with your template ID
        templateParams,
        "gj9MvZ8Ikfo_aa7xS" // Replace with your user ID
      )
      .then(() => {
        enqueueSnackbar("Email successfully sent!", { variant: "success" }); // Use Notistack for success
        clearState();
      })
      .catch(() => {
        enqueueSnackbar("Failed to send email.", { variant: "error" }); // Use Notistack for error
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

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
              <Form onSubmit={handleSubmit}>
                <label className="font13">Full name:</label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  onChange={handleChange}
                  value={name}
                />
                <label className="font13">Email:</label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  value={email}
                />
                {!validEmail && email && (
                  <p style={{ color: "red" }}>Invalid email</p>
                )}
                <label className="font13">Message:</label>
                <Textarea
                  rows="4"
                  id="message"
                  name="message"
                  onChange={handleChange}
                  value={message}
                />
                <SumbitWrapper className="flex">
                  <ButtonInput
                    type="submit"
                    value="Send Message"
                    disabled={isSubmitting}
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
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                  href={"https://www.instagram.com/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href={"https://maps.app.goo.gl/qG1gXgzQ1M9Vpncz6"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </a>
              </SocialIcons>
            </ContactInfo>
          </Row>
        </div>
      </div>
    </Wrapper>
  );
}

// Styled components remain the same
const Wrapper = styled.section`
  width: 100%;
  background-color: #fff;
`;

const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  color: #000;
  @media (max-width: 860px) {
    text-align: center;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  @media (max-width: 860px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FormWrapper = styled.div`
  padding: 30px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-right: 30px;
  width: 100%;

  @media (max-width: 860px) {
    margin-right: 0;
    margin-bottom: 30px;
    width: 100%;
  }
`;

const Form = styled.form`
  padding: 20px 0;

  label {
    display: block;
    margin-bottom: 5px;
    color: #333;
  }
`;

const Input = styled.input`
  width: 100%;
  background-color: transparent;
  border: 0;
  outline: none;
  border-bottom: 1px solid #707070;
  height: 40px;
  margin-bottom: 30px;
  padding: 5px;

  &:focus {
    border-bottom: 2px solid #1c2833;
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
  padding: 5px;

  &:focus {
    border-bottom: 2px solid #1c2833;
  }
`;

const SumbitWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
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
  color: #fff; /* Change text color to white for contrast against dark background */
  padding: 40px; /* Increased padding around the contact info */
  background-color: #1c2833; /* Dark background for contrast */
  border-radius: 15px; /* Rounded corners */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3); /* Enhanced shadow */
  flex: 1; /* Allow it to fill the remaining space */
  display: flex;
  flex-direction: column; /* Stack items vertically */
  gap: 20px; /* Spacing between items */

  h3 {
    font-size: 24px; /* Larger header */
    margin-bottom: 20px; /* Spacing below header */
    color: white; /* Ensure header is white */
  }

  .contact-item {
    display: flex;
    align-items: center; /* Center icons vertically */
    gap: 15px; /* Spacing between icon and text */
    padding: 15px; /* Padding for each contact item */
    border-radius: 10px; /* Rounded corners for items */
    transition: background-color 0.3s; /* Smooth background color transition */

    &:hover {
      background-color: rgba(255, 255, 255, 0.1); /* Light hover effect */
    }
  }

  p {
    margin: 0; /* Remove margin from paragraphs */
    color: white; /* Set paragraph text to white */
    font-size: 14px; /* Set a consistent font size */
  }

  a {
    color: white; /* Set link color to white */
    text-decoration: none; /* Remove underline */
    transition: color 0.3s; /* Smooth color transition */

    &:hover {
      color: #5499c7; /* Change link color on hover */
    }
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
