import React from "react";
import MainTemplate from "./mainTemplate";
import WaveFromTemplate from "./waveFromTemplate";
import SongsTemplate from "./songsTemplate";
import styled from "styled-components";
import Chat from "./chatTemplate";

const GridWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1.3fr 0.5fr;
  grid-template-rows: 1.2fr 0.8fr;
  gap: 0px 0px;
  grid-template-areas:
    ". ."
    ". .";
  grid-gap: 20px;
`;

const RoomTemplate = () => {
  return (
    <MainTemplate>
      <GridWrapper>
        <WaveFromTemplate />
        <SongsTemplate />
        <Chat />
      </GridWrapper>
    </MainTemplate>
  );
};

export default RoomTemplate;
