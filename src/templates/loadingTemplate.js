import React, { useEffect, useState } from "react";
import MainTemplate from "./mainTemplate";
import Paragraph from "../components/atoms/paragraph/Paragraph";
import styled from "styled-components";
import { theme } from "../theme/mainTheme";
import AnimatedBox from "../components/organism/animatedBox/animatedBox";

const LoadingTemplate = () => {
  const [hasProps, setHasProps] = useState(undefined);
  const [hasPropsTwo, setHasPropsTwo] = useState(undefined);
  const [hasPropsThree, setHasPropsThree] = useState(undefined);

  // countTime = (interval) => {
  //   setInterval(() => {
  //     if (this.state.propTwo === "true") {
  //       this.setState({ prop: "true", propTwo: undefined });
  //     }
  //     if (this.state.prop === "true") {
  //       this.setState({ propThree: "true", prop: undefined });
  //     }
  //     if (this.state.propThree === "true") {
  //       this.setState({ propTwo: "true", propThree: undefined });
  //     }
  //     this.setState({ prop: "true" });
  //   }, interval);
  // };

  useEffect(() => {
    setInterval(() => {
      setHasProps("true");
    }, 5000);
    return () => {
      setHasProps(undefined);
      setHasPropsTwo("true");
    };
  }, [hasProps]);

  const Wrapper = styled.div`
    position: relative;
  `;

  const StyledParagraph = styled(Paragraph)`
    font-size: ${() => theme.fontSize.xl};
    color: ${() => theme.grayOrange};
    position: absolute;
    left: 100px;
    top: 70px;
  `;

  const StyledWrapper = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(0%, 50%);
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 350px;
  `;

  // giveProps = ()=>{

  // }

  return (
    <MainTemplate>
      <Wrapper>
        <StyledParagraph>Wait please ...</StyledParagraph>
        <StyledWrapper>
          <AnimatedBox second={hasProps} />
          <AnimatedBox second={hasPropsTwo} />
          <AnimatedBox second={hasPropsThree} />
        </StyledWrapper>
      </Wrapper>
    </MainTemplate>
  );
};

export default LoadingTemplate;
