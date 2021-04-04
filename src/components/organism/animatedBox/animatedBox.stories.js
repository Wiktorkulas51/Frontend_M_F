import React from "react";
import AnimatedBox from "./animatedBox";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 350px;
`;

export default {
  title: "Components/organism/animatedBox",
  component: AnimatedBox,
};

export const animatedBox = () => <AnimatedBox></AnimatedBox>;
export const animatedBoxSecond = () => <AnimatedBox second></AnimatedBox>;

export const animatedBoxes = () => {
  return (
    <Wrapper>
      <AnimatedBox className="first"></AnimatedBox>
      <AnimatedBox className="second" second></AnimatedBox>
      <AnimatedBox className="third"></AnimatedBox>
    </Wrapper>
  );
};
