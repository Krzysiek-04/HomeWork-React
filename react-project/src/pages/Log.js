import React from "react";
import styled from "styled-components";
import LoginMain from "../components/LoginMain";

const Container = styled.div`
  height: 100vh;
  background-color: #cccccc;
`;

const Log = () => {
  return (
    <Container>
      <LoginMain />
    </Container>
  );
};

export default Log;
