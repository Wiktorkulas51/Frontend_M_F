import React from "react";
import HeaderImage from "./Header";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 120px;
  width: 1680px;
`;

export default {
  title: "Components/molecules/header",
  component: HeaderImage,
};

export const header = () => (
  <Wrapper>
    <HeaderImage></HeaderImage>
  </Wrapper>
);
