import React from "react";
import GlobalStyle from "./theme/GlobalStyle";
import Button from "./components/atoms/button/Button";
import Header from "./components/molecules/header/Header";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 200px;
`;

const App = () => (
  <React.Fragment>
    {/* <GlobalStyle> */}
    <Wrapper>
      <Header></Header>
    </Wrapper>
    {/* </GlobalStyle> */}
  </React.Fragment>
);

export default App;
