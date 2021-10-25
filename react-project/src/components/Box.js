import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import TextField from "@material-ui/core/TextField";

const Container = styled.div`
  background-color: #cccccc;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Text = styled.div`
  color: white;
`;

const Description = styled.p`
  font-size: 15px;
  margin-top: 5px;
`;

const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  height: 55px;
`;

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  root: {
    "& > *": {
      margin: theme.spacing(0),
      width: "25ch",
    },
  },
}));

function Box() {
  const classes = useStyles();

  return (
    <Container>
      <Text>
        <Description>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam.
        </Description>
        <Search>
          <TextField
            id="outlined-basic"
            size="small"
            placeholder="Wyszukiwarka"
            variant="outlined"
            margin="dense"
          />
          <Button variant="contained" size="medium" className={classes.margin}>
            <SearchSharpIcon />
          </Button>
        </Search>
      </Text>
    </Container>
  );
}

export default Box;
