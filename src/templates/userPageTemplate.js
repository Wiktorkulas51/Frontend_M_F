import React from "react";
import PrimaryParagraph from "components/atoms/primaryParagraph/primaryParagraph";
import Paragraph from "components/atoms/paragraph/Paragraph";
import styled from "styled-components";
import { theme } from "theme/mainTheme";
import Div from "components/molecules/div/div";
import Button from "components/atoms/button/Button";
import GirlPicture from "components/molecules/girlPicture/girlPicture";
import MainTemplate from "./mainTemplate";

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

// <SecondWrapper>
// <div>
//   <LogoIcon as={Link} to="/" />
//   <Link to="/" component={Logo}>
//     M{"&"}F
//   </Link>
// </div>
// <Wrapper>
//   <Input placeholder="Look for your music" icon></Input>
//   <ButtonMagniFire icon={magniFire}></ButtonMagniFire>
// </Wrapper>
// <BiggerButtonIcon icon={person}></BiggerButtonIcon>
// </SecondWrapper>
// <HeaderImage />
// <Background></Background>

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
        <GirlPicture></GirlPicture>
        <AbsoluteWrapper>
          <Paragraph>Created By</Paragraph>
          <PrimaryParagraph secondary>Wiktor Kulas</PrimaryParagraph>
        </AbsoluteWrapper>
        <Div></Div>
      </MainTemplate>
    </>
  );
};

export default UserPageTemplate;
