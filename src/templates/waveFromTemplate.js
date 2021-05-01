import React, { Component } from "react";
import styled from "styled-components";
import WaveSurfer from "wavesurfer.js";
import MusicIcarus from "music/icarus.mp3";
import { theme } from "theme/mainTheme";
import Paragraph from "components/atoms/paragraph/Paragraph";
import ButtonIcon from "components/atoms/buttonIcon/buttonIcon";
import play from "assets/play.png";
import pause from "assets/pause.png";
import mute from "assets/mute.png";
import sound from "assets/sound.png";
import StaticBg from "assets/crop.jpeg";

let wavesurfer;

const Wrapper = styled.div`
  position: relative;
  width: 80%;
  height: 100%;
  left: 120px;
  top: 50px;
`;

const SecondWrapper = styled.div`
  position: relative;
  top: 55%;
  width: 80%;
  left: 10%;
  z-index: 5;
`;

const StyledMenuIcons = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 30px;
  margin-left: -10px;
`;

const BackgroundImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${({ img }) => img});
  background-position: center 100%;
  background-size: cover;
  background-repeat: no-repeat;
  transform: rotate3d(1, 0, 0, 20deg);
  z-index: 1;
`;

const StyledDiv = styled.div`
  width: 100%;
  height: 80%;
`;

const StyledParagraphWrapper = styled.div`
  display: inline-block;
  margin-left: 20px;
  padding: 10px;
`;

const StyledButtonIcon = styled(ButtonIcon)`
  width: 40px;
  height: 40px;
`;

const Slider = styled.input`
  width: 90px;
  height: 10px;
  -webkit-appearance: none;

  &::-webkit-slider-runnable-track {
    height: 0.35em;
    background: white;
    border: none;
    border-radius: 3px;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    height: 1.1em;
    width: 1.1em;
    border-radius: 50%;
    background: #a19292;
    margin-top: -5px;
  }

  &:focus {
    outline: none;
  }
`;

class WaveFromTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = { play: false, sound: true };
  }
  componentDidMount() {
    wavesurfer = WaveSurfer.create({
      container: "#waveform",
      waveColor: "#cfc7cc",
      progressColor: theme.grayOrange,
      cursorColor: "transparent",
      height: "80",
    });
    const volume = wavesurfer.getVolume();

    this.setState((prevState) => {
      return { ...prevState, volume };
    });

    wavesurfer.load(MusicIcarus);
  }

  handleClickPlayPause() {
    this.setState({ play: true });
    wavesurfer.play();

    if (this.state.play === false) {
      this.setState({ play: true });
      wavesurfer.play();
    } else {
      wavesurfer.pause();
      this.setState({ play: false });
    }
  }

  handleClickMuteSound() {
    if (this.state.sound === true) {
      this.setState({ sound: false });
      wavesurfer.toggleMute();
    } else {
      wavesurfer.toggleMute();
      this.setState({ sound: true });
    }
  }

  handleInputeOnChange(e) {
    wavesurfer.setVolume(e.target.valueAsNumber);
    this.setState((prevState) => {
      return { ...prevState, volume: e.target.valueAsNumber };
    });
  }

  //create timeline div

  //add some styles to waveform

  render() {
    return (
      <Wrapper>
        <BackgroundImage img={StaticBg}>
          <StyledParagraphWrapper>
            <Paragraph style={{ marginBottom: "10px" }}>Author name</Paragraph>
            <Paragraph>Song Title</Paragraph>
          </StyledParagraphWrapper>
        </BackgroundImage>
        <SecondWrapper>
          <StyledDiv id="waveform"></StyledDiv>
          <StyledMenuIcons>
            {!this.state.play ? (
              <StyledButtonIcon
                onClick={() => this.handleClickPlayPause()}
                icon={play}
              />
            ) : (
              <StyledButtonIcon
                onClick={() => this.handleClickPlayPause()}
                icon={pause}
              />
            )}
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                width: "20%",
              }}
            >
              <>
                <Slider
                  type="range"
                  min={0}
                  max={1}
                  step={0.02}
                  value={this.state.volume || "1"}
                  onChange={(e) => this.handleInputeOnChange(e)}
                />
              </>
              {this.state.sound ? (
                <StyledButtonIcon
                  onClick={() => this.handleClickMuteSound()}
                  icon={sound}
                ></StyledButtonIcon>
              ) : (
                <StyledButtonIcon
                  onClick={() => this.handleClickMuteSound()}
                  icon={mute}
                ></StyledButtonIcon>
              )}
            </div>
          </StyledMenuIcons>
        </SecondWrapper>
      </Wrapper>
    );
  }
}

export default WaveFromTemplate;
