import React from "react";
import ButtonIcon from "./buttonIcon";
import twitterIcon from "../../../assets/twitterIcon.svg";
import facebookIcon from "../../../assets/facebookIcon.svg";
import messageIcon from "../../../assets/messageIcon.svg";

export default {
  title: "Components/atoms/buttonIcon",
  component: ButtonIcon,
};

export const buttonIconTwitter = () => (
  <ButtonIcon icon={twitterIcon}></ButtonIcon>
);
export const buttonIconFacebook = () => (
  <ButtonIcon icon={facebookIcon}></ButtonIcon>
);
export const buttonIconMessage = () => (
  <ButtonIcon icon={messageIcon}></ButtonIcon>
);
