import React from "react";
import ButtonIcon from "./buttonIcon";
import twitterIcon from "../../../assets/twitterIcon.svg";
import facebookIcon from "../../../assets/facebookIcon.svg";
import messageIcon from "../../../assets/messageIcon.svg";
import person from "../../../assets/person.svg";
import magniFire from "../../../assets/magnifire.svg";
import smileIcon from "../../../assets/smileIcon.svg";

export default {
  title: "Components/atoms/buttons/buttonIcon",
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
export const buttonIconPerson = () => <ButtonIcon icon={person}></ButtonIcon>;

export const buttonIconMagniFire = () => (
  <ButtonIcon icon={magniFire}></ButtonIcon>
);

export const buttonIconSmileIcon = () => (
  <ButtonIcon icon={smileIcon}></ButtonIcon>
);
