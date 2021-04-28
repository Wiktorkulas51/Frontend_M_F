import React, { Component } from "react";
import styled from "styled-components";
import WaveSurfer from "wavesurfer.js";
import MusicIcarus from "music/icarus.mp3";
import { theme } from "theme/mainTheme";
import Paragraph from "components/atoms/paragraph/Paragraph";
import ButtonIcon from "components/atoms/buttonIcon/buttonIcon";
import play from "assets/play.png";
import pause from "assets/pause.png";
import StaticBg from "assets/staticBg.jpeg";

let wavesurfer;

const Wrapper = styled.div`
  position: relative;
  width: 50%;
  left: 50px;
  top: 50px;
`;

const SongsParamsWrapper = styled.div`
  z-index: 3;
`;

const SecondWrapper = styled.div`
  position: relative;
  top: 15vh;
  width: 80%;
  left: 15vh;
  z-index: 5;
`;

const StyledButtonIcon = styled(ButtonIcon)`
  position: relative;
  width: 40px;
  height: 40px;
  display: inline;
  top: 0;
  left: 45%;
`;

const BackgroundImage = styled.div`
  position: absolute;
  width: 100%;
  height: 250px;
  background-image: url(${({ img }) => img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 1;
`;

const StyledDiv = styled.div`
  opacity: 70%;
`;

class WaveFromTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = { play: false };
  }
  componentDidMount() {
    wavesurfer = WaveSurfer.create({
      container: "#waveform",
      waveColor: theme.grayBlue,
      progressColor: theme.grayOrange,
    });

    wavesurfer.load(MusicIcarus);
  }

  handleClickPlay() {
    this.setState({ play: true });
    wavesurfer.play();
  }
  handleClickPause() {
    this.setState({ play: false });
    wavesurfer.pause();
  }

  render() {
    return (
      <Wrapper>
        <BackgroundImage img={StaticBg}>
          <Paragraph>Author name</Paragraph>
          <Paragraph>song Title</Paragraph>
        </BackgroundImage>
        <SecondWrapper>
          <StyledDiv id="waveform"></StyledDiv>
          {!this.state.play ? (
            <StyledButtonIcon
              onClick={() => this.handleClickPlay()}
              icon={play}
            ></StyledButtonIcon>
          ) : (
            <StyledButtonIcon
              onClick={() => this.handleClickPause()}
              icon={pause}
            ></StyledButtonIcon>
          )}
        </SecondWrapper>
      </Wrapper>
    );
  }
}

export default WaveFromTemplate;
