import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

const List = styled.div``;

const Card = styled.div`
  cursor: pointer;
  background: #fff2cc;
  margin: 10px 15px 10px 15px;
  box-sizing: border-box;
  padding-bottom: 5px;
  text-align: center;
  width: 150px;
  height: auto;
`;

const Title = styled.div`
  font-size: 15px;
  font-weight: bold;
  text-align: center;
`;

const Paragraph = styled.p`
  margin: 3px;
  font-size: 12px;
`;

const Image = styled.img`
  text-align: center;
  border-radius: 7px;
  width: 100px;
  height: 100px;
`;

const CharactersCard = ({ name, id, image, species, index, status }) => {
  let history = useHistory();

  const handleClick = () => {
    history.push(`/${name}/${id}`);
  };

  return (
    <List>
      <Card data-name={name} onClick={handleClick}>
        <Image src={image} alt={name} />
        <div>
          <Title>{name}</Title>
          <Paragraph index={index}>
            {species}, {status}
          </Paragraph>
        </div>
      </Card>
    </List>
  );
};

export default CharactersCard;
