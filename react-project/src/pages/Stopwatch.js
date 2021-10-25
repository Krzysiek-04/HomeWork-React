import React from "react";
import styled from "styled-components";
import Counter from "../components/Counter";

const Container = styled.div`
  height: 100vh;
  background-color: #cccccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Stopwatch = () => {
  return (
    <Container>
      <Counter />
    </Container>
  );
};

export default Stopwatch;
