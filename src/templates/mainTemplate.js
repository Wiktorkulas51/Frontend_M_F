import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "theme/mainTheme";
import Input from "components/atoms/inpute/inpute";
import LogoIcon from "components/atoms/logoIcon/logoIcon";
import HeaderImage from "components/molecules/header/Header";
import magniFire from "assets/magnifirewhite.png";
import person from "assets/personBlack.svg";
import ButtonIcon from "components/atoms/buttonIcon/buttonIcon";
import LoadingTemplate from "./loadingTemplate";
import MediaTemplate from "./mediaTemplate";

const SecondWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
`;

const Wrapper = styled.div`
  position: relative;
`;

const ButtonMagniFire = styled(ButtonIcon)`
  position: absolute;
  width: 42px;
  height: 47px;
  left: 330px;
  top: -3px;
  background-size: 50% 50%;
`;

const StyledButtonIcon = styled(ButtonIcon)`
  width: 40px;
  height: 40px;
`;

const Background = styled.div`
  background-color: #000;
  max-width: 100%;
  height: 80vh;
  margin-top: 90px;
  z-index: -4;
`;

const Logo = styled.a`
  text-transform: uppercase;
  float: right;
  margin-left: 10px;
  margin-top: 10px;
  font-size: ${() => theme.fontSize.xm};
  color: #ddd1c1;
  text-decoration: none;
`;

const MainTemplate = ({ children }) => {
  const [InputeFocus, setInputeFocus] = useState(false);

  const useHandleChange = (e) => {
    const inpValue = e.target.value;
    setInputeFocus(false);

    if (inpValue !== "") {
      setInputeFocus(true);
    }
  };

  return (
    <>
      <SecondWrapper>
        <div>
          <LogoIcon />

          <Link to="/" component={Logo}>
            M{"&"}F
          </Link>
        </div>
        <Wrapper>
          <Input
            placeholder="Look for your music"
            icon
            onChange={useHandleChange}
          ></Input>
          <ButtonMagniFire icon={magniFire}></ButtonMagniFire>
        </Wrapper>
        <StyledButtonIcon icon={person}></StyledButtonIcon>
      </SecondWrapper>
      <HeaderImage />
      {InputeFocus ? (
        <Background>
          <LoadingTemplate />
        </Background>
      ) : (
        <>
          <Background>
            {children}
            <MediaTemplate />
          </Background>
        </>
      )}
    </>
  );
};

export default MainTemplate;
