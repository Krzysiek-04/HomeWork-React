import React from "react";
import styled from "styled-components";
import Information from "../components/Informations";

const Container = styled.div`
  height: 100vh;
  background-color: #cccccc;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AboutMe = () => {
  return (
    <Container>
      <Information />
    </Container>
  );
};

export default AboutMe;
