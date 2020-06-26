// React imports
import * as React from "react";
// My imports
import { Button, FlexCenter, Input } from "../styles";
// Other imports
import styled from "@emotion/styled";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 5em;
  height: 30em;
  width: 25em;
  background: #c3f53d;
  padding: 1em;
  font-weight: 900;
  box-shadow: 1em 1em #30c700;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Form = () => {
  return (
    <Container>
      <InputContainer>
        <label>
          Email
          <Input />
        </label>
        <label>
          Password
          <Input />
        </label>
        <label>
          Client ID
          <Input />
        </label>
      </InputContainer>
      <FlexCenter justify="space-around">
        <Button>Demo</Button>
        <Button color="#30c700">LOGIN</Button>
      </FlexCenter>
    </Container>
  );
};

export default Form;
