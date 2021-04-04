import React from "react";
import ButtonArrow from "./buttonArrow";
import arrowIcon from "../../../assets/arrowIconWhite.png";

export default {
  title: "Components/atoms/buttons/buttonArrow",
  component: ButtonArrow,
};

export const buttonArrow = () => <ButtonArrow icon={arrowIcon}></ButtonArrow>;
