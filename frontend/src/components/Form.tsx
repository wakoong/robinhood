// React imports
import * as React from "react";
import { Link } from "@reach/router";
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
  const { useReducer } = React;

  const emptyState = {
    email: "",
    password: "",
    clientid: "",
    status: "IDLE",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "email":
        return { ...state, email: action.email };
      case "password":
        return { ...state, password: action.password };
      case "clientid":
        return { ...state, clientid: action.clientid };
      case "updateStatus":
        return { ...state, status: action.status };
      case "reset":
      default:
        return emptyState;
    }
  };

  const [state, dispatch] = useReducer(reducer, emptyState);

  const setStatus = (status: string) =>
    dispatch({ type: "updateStatus", status });
  // Prevent rendering everytime field changes? Currying
  const updateFieldValue = (fieldName: string) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => dispatch({ type: fieldName, [fieldName]: e.target.value });
  const { email, password, clientid } = state;
  console.log({ email, password, clientid });

  return (
    <Container>
      <InputContainer>
        <label>
          Email
          <Input
            type="email"
            value={email}
            onChange={updateFieldValue("email")}
            placeholder="Email"
          />
        </label>
        <label>
          Password
          <Input
            type="password"
            value={password}
            onChange={updateFieldValue("password")}
            placeholder="Password"
          />
        </label>
        <label>
          Client ID
          <Input
            type="password"
            value={clientid}
            onChange={updateFieldValue("clientid")}
            placeholder="ClientID"
          />
        </label>
      </InputContainer>
      <FlexCenter justify="space-around">
        <Button>
          <Link to="/home">Demo</Link>
        </Button>
        <Button color="#30c700">LOGIN</Button>
      </FlexCenter>
    </Container>
  );
};

export default Form;
