import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "theme/mainTheme";
import Input from "components/atoms/inpute/inpute";
import LogoIcon from "components/atoms/logoIcon/logoIcon";
import HeaderImage from "components/molecules/header/Header";
import magniFire from "assets/magnifirewhite.png";
import person from "assets/person.svg";
import ButtonIcon from "components/atoms/buttonIcon/buttonIcon";
import LoadingTemplate from "./loadingTemplate";

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
  width: 50px;
  height: 50px;
`;

const Background = styled.div`
  background-color: #000;
  max-width: 100%;
  height: 77.3vh;
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

const MainTemplate = ({ children, loading }) => {
  const [InputeFocus, setInputeFocus] = useState(false);
  const [loadingState, setloadingState] = useState(loading);

  const useHandleChange = (e) => {
    const inpValue = e.target.value;

    if (inpValue !== "") {
      console.log(e.target.value);
      setInputeFocus(true);
      if (loadingState === true) {
        setInputeFocus(false);
      }
    } else {
      setloadingState(false);
      return;
    }
  };

  return (
    <>
      {InputeFocus && !loadingState ? (
        <LoadingTemplate />
      ) : (
        <>
          <SecondWrapper>
            <div>
              <LogoIcon as={Link} to="/" />
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
          <Background>{children}</Background>
        </>
      )}
    </>
  );
};

export default MainTemplate;
