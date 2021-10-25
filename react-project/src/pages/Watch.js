import React from "react";
import styled from "styled-components";

import Timer from "../components/Timer";

const Container = styled.div`
  height: 100vh;
  background-color: #cccccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Watch = () => {
  return (
    <Container>
      <Timer />
    </Container>
  );
};

export default Watch;
