import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  background-color: #cccccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Text = styled.h1;
const SuccessfulLogin = () => {
  return (
    <Container>
      <Text> Udało się zalogować </Text>
    </Container>
  );
};

export default SuccessfulLogin;
