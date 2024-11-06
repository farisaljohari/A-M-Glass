import React from "react";
import styled from "styled-components";

export default function Contact() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <Wrapper>
      <div className="darkBg" style={{ backgroundColor: "white" }}>
        <div className="container">
          <InnerWrapper
            className="flexSpaceCenter"
            style={{ padding: "30px 0" }}
          >
            <TextWrapper>
              <StyleP className="blackColor font16">
                © {getCurrentYear()} -{" "}
                <span className="blackColor font16">
                  A&M Architectural Glass, Inc.
                </span>{" "}
                All Rights Reserved
              </StyleP>
            </TextWrapper>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between; /* Aligns the content */
  align-items: center; /* Centers items vertically */

  @media (max-width: 550px) {
    flex-direction: column;
    align-items: center; /* Centers items in column layout */
  }
`;

const TextWrapper = styled.div`
  width: 100%; /* Makes the wrapper full width */
  text-align: center; /* Centers the text */
`;

const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
    /* text-align: center; No longer needed as it's centered in TextWrapper */
  }
`;
