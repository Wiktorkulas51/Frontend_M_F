import React from "react";
import styled from "styled-components";
import ButtonArrow from "components/atoms/butttonArrow/buttonArrow";
import arrowIcon from "assets/arrowIconWhite.png";
import Paragraph from "components/atoms/paragraph/Paragraph";
import ButtonIcon from "components/atoms/buttonIcon/buttonIcon";
import play from "assets/play.png";
import smallBg from "assets/smallbg.jpg";

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  grid-row: 2/2;
`;

const Wrapper = styled.div`
  width: 7em;
  height: 5em;
  background-color: white;
`;

const Box = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${({ img }) => img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const StyledParagraph = styled(Paragraph)`
  position: relative;
  top: -105px;
`;

const StyledButtonIcon = styled(ButtonIcon)`
  position: relative;
  left: 70px;
  top: 40px;
  width: 40px;
  height: 40px;
  visibility: hidden;
  transition: all 0.2s ease-in;
  ${Box}:hover & {
    visibility: visible;
  }
`;

const SongBox = () => (
  <Wrapper>
    <Box img={smallBg}>
      <StyledButtonIcon icon={play} />
    </Box>
    <StyledParagraph>Song name</StyledParagraph>
  </Wrapper>
);

const SongsTemplate = () => {
  return (
    <>
      <FlexWrapper>
        <ButtonArrow icon={arrowIcon} reversed />
        <SongBox />
        <SongBox />
        <SongBox />
        <SongBox />
        <SongBox />
        <SongBox />
        <ButtonArrow icon={arrowIcon} />
      </FlexWrapper>
    </>
  );
};

export default SongsTemplate;
