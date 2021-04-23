import React from "react";
import PrimaryParagraph from "components/atoms/primaryParagraph/primaryParagraph";
import Paragraph from "components/atoms/paragraph/Paragraph";
import styled from "styled-components";
import { theme } from "theme/mainTheme";
import Div from "components/molecules/div/div";
import Button from "components/atoms/button/Button";
import GirlPicture from "components/molecules/girlPicture/girlPicture";
import MainTemplate from "./mainTemplate";
import ButtonIcon from "components/atoms/buttonIcon/buttonIcon";
import facebookIcon from "assets/facebookIcon.png";
import twitterIcon from "assets/twitterIcon.png";
import messageIcon from "assets/messageIcon.png";
import { Link } from "react-router-dom";

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

const FlexWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 40%;
`;

const BiggerParagraph = styled(Paragraph)`
  display: inline-block;
  width: 50%;
  color: #bcb1a2;
  font-weight: ${() => theme.bold};
  font-size: ${() => theme.fontSize.m};
`;

const StyledParagraph = styled(PrimaryParagraph)`
  font-size: ${() => theme.fontSize.xl};
  margin-top: 50px;
`;

const IconsWrapper = styled(FlexWrapper)`
  width: 50%;
  top: 45px;
  left: 210px;
`;

const StyledButtonIcon = styled(ButtonIcon)`
  border-radius: ${({ msg }) => (msg ? "none" : "50px")};

  &:hover {
    cursor: pointer;
    background-color: ${({ msg }) => (msg ? "none" : theme.grayBlue)};
    transition: all 0.5s ease;
  }
`;
const UserPageTemplate = () => {
  return (
    <>
      <MainTemplate>
        <GridWrapper>
          <StyledParagraph>
            Listen the music with friends right now!
          </StyledParagraph>
          <div>
            <BiggerParagraph>
              Only here you can start lissing music with your best friends
            </BiggerParagraph>
            {<PrimaryParagraph secondary>FOR FREE.</PrimaryParagraph>}
          </div>
          <FlexWrapper>
            <Button>Join room</Button>
            <Paragraph>or</Paragraph>
            <Button second>Create your own</Button>
          </FlexWrapper>
        </GridWrapper>
        <GirlPicture />
        <AbsoluteWrapper>
          <IconsWrapper>
            <a href="https://www.facebook.com/profile.php?id=100005264209369">
              <StyledButtonIcon icon={facebookIcon} />
            </a>
            <a href="https://twitter.com/wiktor51975">
              <StyledButtonIcon icon={twitterIcon} />
            </a>
            <StyledButtonIcon icon={messageIcon} msg />
            {/* writing to my email */}
          </IconsWrapper>
          <Paragraph>Created By</Paragraph>
          <PrimaryParagraph secondary>Wiktor Kulas</PrimaryParagraph>
        </AbsoluteWrapper>
        <Div></Div>
      </MainTemplate>
    </>
  );
};

export default UserPageTemplate;
