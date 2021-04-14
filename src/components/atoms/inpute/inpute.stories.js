import React from "react";
import ButtonIcon from "buttonIcon/buttonIcon";
import Input from "./inpute";
import magniFire from "assets/magnifirewhite.png";
import styled from "styled-components";

export default {
  title: "Components/atoms/inpute",
  subcomponents: { ButtonIcon },
  component: Input,
};

const ButtonMagniFire = styled(ButtonIcon)`
  position: absolute;
  width: 42px;
  height: 47px;
  left: 330px;
  top: -2px;
  background-size: 50% 50%;
`;
const Wrapper = styled.div`
  position: relative;
`;

export const input = () => (
  <Wrapper>
    <Input placeholder="Look for your music" icon></Input>
    <ButtonMagniFire icon={magniFire}></ButtonMagniFire>
  </Wrapper>
);
