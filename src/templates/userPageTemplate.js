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
import Div from "../components/molecules/div/div";
import Button from "../components/atoms/button/Button";
import GirlPicture from "../components/molecules/girlPicture/girlPicture";

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

const AbsoluteWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50px;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 70px;
  grid-template-columns: 1fr;

  grid-template-rows: 1fr;
  margin-left: 50px;
  width: 40%;
`;
const SecondWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
`;

const FlexWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 40%;
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
  overflow: hidden;
`;

const BiggerButtonIcon = styled(ButtonIcon)`
  width: 50px;
  height: 50px;
`;

const BiggerParagraph = styled(Paragraph)`
  display: inline-block;
  width: 80%;
  color: #bcb1a2;
  font-weight: ${() => theme.bold};
  font-size: ${() => theme.fontSize.m};
`;

const MarginParagraph = styled(PrimaryParagraph)`
  font-size: ${() => theme.fontSize.xl};
  margin-top: 50px;
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
        <GridWrapper>
          <MarginParagraph>
            Listen the music with friends right now!
          </MarginParagraph>
          <div>
            <BiggerParagraph>
              Only here you can start lissing music with your best friends
            </BiggerParagraph>
            {<PrimaryParagraph secondary>FOR FREE</PrimaryParagraph>}
          </div>
          <FlexWrapper>
            <Button>Join room</Button>
            <Paragraph>or</Paragraph>
            <Button second>Create your own</Button>
          </FlexWrapper>
        </GridWrapper>
        <Div></Div>
        <GirlPicture></GirlPicture>
        <AbsoluteWrapper>
          <Paragraph>Created By</Paragraph>
          <PrimaryParagraph secondary>Wiktor Kulas</PrimaryParagraph>
        </AbsoluteWrapper>
      </Background>
    </>
  );
};

export default UserPageTemplate;
