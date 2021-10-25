import React from "react";
import styled from "styled-components";

import Registration from "../components/Registration";

const Container = styled.div`
  height: 100vh;
  background-color: #cccccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Register = () => {
  return (
    <Container>
      <Registration />
    </Container>
  );
};

export default Register;
