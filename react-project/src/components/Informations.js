import React from "react";
import styled from "styled-components";
import Me from "../Image/Me.jpg";

const person = {
  photo: Me,
  personName: "Krzysztof",
  lastName: "Pinkiewicz",
  details:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;

const Names = styled.p`
  font-size: 23px;
  text-transform: uppercase;
  margin-top: 5px;
  margin-bottom: 0;
`;
const Info = styled.p`
  margin: 3px;
`;

const Informations = (personName, lastName, details, photo) => {
  return (
    <Wrapper>
      image={person.photo}
      imageWidth="230" imageHeight="230"
      <Names>
        {person.personName} {person.lastName}
      </Names>
      <Info>{person.details}</Info>
    </Wrapper>
  );
};

export default Informations;
