import React, { useState, useEffect } from "react";
import axios from "axios";
import useForm from "../useful/useForm";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #cccccc;
`;
const Register = styled.form`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Input = styled.input`
  margin: 10px;
  width: 80%;
  box-sizing: border-box;
  padding: 10px;
  border-radius: 7px;
  border: 0;
`;

const RegisterButton = styled.button`
  cursor: pointer;
  margin: 10px;
  width: 60%;
  box-sizing: border-box;
  padding: 10px;
  border-radius: 7px;
  border: 0px solid #c8b590;
  text-transform: uppercase;
  :hover {
    background-color: #ffd966;
  }
`;

const Registration = () => {
  const [usersData, setUsersData] = useState(null);
  const [checkEmail, setCheckEmail] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users`)
      .then((response) =>
        setUsersData(response?.data?.map((user) => user.email))
      )
      .catch((error) => console.log(error));
  }, []);

  console.log(usersData, "usersData");

  const registerClick = () => {
    if (checkEmail === true) {
      axios
        .post("http://localhost:3000/users", {
          fname: values.firstName,
          surname: values.lastName,
          email: values.email,
          password: values.password,
        })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    }
  };

  const [values, handleChange] = useForm(registerClick);

  useEffect(() => {
    const checkEmailFlag = usersData?.includes(values.email);

    console.log(checkEmailFlag, "flag");

    if (checkEmailFlag === true) {
      setCheckEmail(true);
    } else if (checkEmailFlag === false) {
      setCheckEmail(false);
    }
  }, [values.email]);

  console.log(values.email, "email");

  return (
    <Container>
      <Register onSubmit={registerClick}>
        <Input
          type="text"
          placeholder="Imię"
          value={values.firstName}
          onChange={handleChange}
          name="firstname"
        />
        <Input
          type="text"
          placeholder="Nazwisko"
          value={values.lastName}
          onChange={handleChange}
          name="lastname"
        />
        <Input
          type="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          name="email"
        />
        <Input
          type="password"
          placeholder="Hasło"
          value={values.password}
          onChange={handleChange}
          name="password"
        />

        <RegisterButton type="submit">Zarejestruj się</RegisterButton>
      </Register>
    </Container>
  );
};

export default Registration;
