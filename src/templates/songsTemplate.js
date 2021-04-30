import React from "react";
import styled from "styled-components";
import ButtonArrow from "components/atoms/butttonArrow/buttonArrow";
import arrowIcon from "assets/arrowIconWhite.png";

const SongsTemplate = () => {
  return (
    <div>
      <ButtonArrow icon={arrowIcon} />
      <div></div>
      <ButtonArrow icon={arrowIcon} />
    </div>
  );
};

export default SongsTemplate;
