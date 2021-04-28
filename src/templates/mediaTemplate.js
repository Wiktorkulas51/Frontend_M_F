import React from "react";
import facebookIcon from "assets/facebookIcon.png";
import twitterIcon from "assets/twitterIcon.png";
import messageIcon from "assets/messageIcon.png";
import ButtonIcon from "components/atoms/buttonIcon/buttonIcon";
import styled from "styled-components";
import { theme } from "theme/mainTheme";
import PrimaryParagraph from "components/atoms/primaryParagraph/primaryParagraph";
import Paragraph from "components/atoms/paragraph/Paragraph";

const FlexWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 40%;
`;
const AbsoluteWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50px;
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

const MediaTemplate = () => {
  return (
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
  );
};

export default MediaTemplate;
