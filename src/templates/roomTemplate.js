import React from "react";
import MainTemplate from "./mainTemplate";
import WaveFromTemplate from "./waveFromTemplate";
import SongsTemplate from "./songsTemplate";
import styled from "styled-components";

// const GridWrapper = styled.div`
//   height: 80%;
//   display: grid;
//   grid-template-columns: 90% 50%;
//   grid-template-rows: 1fr 1fr;
//   gap: 0px 0px;
//   grid-template-areas:
//     ". ."
//     ". .";
// `;

const RoomTemplate = () => {
  return (
    <MainTemplate>
      <WaveFromTemplate />
      <SongsTemplate />
    </MainTemplate>
  );
};

export default RoomTemplate;
