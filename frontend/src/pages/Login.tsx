// React imports
import * as React from "react";
// My imports
import { Form } from "../components";
import { FlexCenter, MessageBox } from "../styles";
import Logo from "../static/images/rh-gorilla.png";
// Other imports
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 4em;

  .main-title {
    margin-top: -3em;
    color: #e7f2bc;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 10em;
  width: 10em;

  img {
    max-width: 100%;
  }
`;

const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 2em;

  @media (min-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
  }
`;

const Login = () => {
  return (
    <Container>
      <FlexCenter direction="column">
        <ImageContainer>
          <img src={Logo} alt="logo" />
        </ImageContainer>
        <h1 className="main-title">RH GAINS</h1>
      </FlexCenter>
      <FormContainer>
        <Form />
        <MessageBox>
          <h1>How to login</h1>
          <p>
            You will need to have an account for Robinhood web applicaton. If
            you don't have one, you can make one{" "}
            <a href="https://robinhood.com/us/en/" target="_blank">
              here
            </a>
          </p>
          <ul>
            <li>
              Once you have your account, log on to your Robinhood account
            </li>
            <li>
              Right click and select 'View Page Source' and the oAuthClientId is
              your client id
            </li>
            <li>Insert your username, password, and client id</li>
          </ul>
        </MessageBox>
      </FormContainer>
    </Container>
  );
};

export default Login;
