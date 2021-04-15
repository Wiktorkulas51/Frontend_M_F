import React, { Component } from "react";
import MainTemplate from "./mainTemplate";
import Paragraph from "components/atoms/paragraph/Paragraph";
import styled from "styled-components";
import { theme } from "theme/mainTheme";
import AnimatedBox from "components/organism/animatedBox/animatedBox";

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

class LoadingTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  render() {
    return (
      <MainTemplate loading={this.state.loading}>
        <Wrapper>
          <StyledParagraph>Wait please ...</StyledParagraph>
          <StyledWrapper>
            <AnimatedBox />
            <AnimatedBox second />
            <AnimatedBox />
          </StyledWrapper>
        </Wrapper>
      </MainTemplate>
    );
  }
}

export default LoadingTemplate;
