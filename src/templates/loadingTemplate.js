import React, { Component } from "react";
import MainTemplate from "./mainTemplate";
import Paragraph from "../components/atoms/paragraph/Paragraph";
import styled from "styled-components";
import { theme } from "../theme/mainTheme";
import AnimatedBox from "../components/organism/animatedBox/animatedBox";

class LoadingTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, prop: "false" };
  }

  countTime = (interval) => {
    setInterval(() => {
      this.setState({ prop: "true" });
    }, interval);
  };

  componentDidMount() {
    this.countTime(1000);
  }

  render() {
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

    const giveProps = (prop) => {
      const ani = <AnimatedBox prop={prop}></AnimatedBox>;
    };

    return (
      <MainTemplate>
        <Wrapper>
          <StyledParagraph>Wait please ...</StyledParagraph>
          <StyledWrapper>
            <AnimatedBox second={this.state.prop} />
            <AnimatedBox second />
            <AnimatedBox />
          </StyledWrapper>
        </Wrapper>
      </MainTemplate>
    );
  }
}

export default LoadingTemplate;
