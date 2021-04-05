import React from "react";
import PrimaryParagraph from "../components/atoms/primaryParagraph/primaryParagraph";
import Input from "../components/atoms/inpute/inpute";
import LogoIcon from "../components/atoms/logoIcon/logoIcon";
import Paragraph from "../components/atoms/paragraph/Paragraph";
import HeaderImage from "../components/molecules/header/Header";
import magniFire from "../assets/magnifirewhite.png";
import styled from "styled-components";
import ButtonIcon from "../components/atoms/buttonIcon/buttonIcon";
import person from "../assets/person.svg";
import { theme } from "../theme/mainTheme";

const ButtonMagniFire = styled(ButtonIcon)`
  position: absolute;
  width: 42px;
  height: 47px;
  left: 330px;
  top: -3px;
  background-size: 50% 50%;
`;
const Wrapper = styled.div`
  position: relative;
`;
const SecondWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
`;

const Logo = styled(Paragraph)`
  text-transform: uppercase;
  float: right;
  margin-left: 10px;
  margin-top: 10px;
  font-size: ${() => theme.fontSize.xm};
`;

const Background = styled.div`
  position: relative;
  background-color: #000;
  max-width: 100%;
  height: 77.3vh;
  margin-top: 90px;
  z-index: -4;
`;

const BiggerButtonIcon = styled(ButtonIcon)`
  width: 50px;
  height: 50px;
`;

const BiggerParagraph = styled(Paragraph)`
  font-size: ${() => theme.fontSize.m};
`;

const UserPageTemplate = () => {
  return (
    <>
      <SecondWrapper>
        <div>
          <LogoIcon />
          <Logo normal>M{"&"}F</Logo>
        </div>
        <Wrapper>
          <Input placeholder="Look for your music" icon></Input>
          <ButtonMagniFire icon={magniFire}></ButtonMagniFire>
        </Wrapper>
        <BiggerButtonIcon icon={person}></BiggerButtonIcon>
      </SecondWrapper>
      <HeaderImage />
      <Background>
        <Wrapper>
          <PrimaryParagraph>
            Listen the music with friends right now!
          </PrimaryParagraph>
          <BiggerParagraph>
            Only here you can start lissing music with your best friends
            {<PrimaryParagraph secondary>FOR FREE</PrimaryParagraph>}. Do it
            now.
          </BiggerParagraph>
        </Wrapper>
      </Background>
    </>
  );
};

export default UserPageTemplate;
