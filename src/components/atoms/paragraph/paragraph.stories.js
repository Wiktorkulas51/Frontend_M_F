import React from "react";
import Paragraph from "./Paragraph";

export default {
  title: "Components/atoms/paragraph",
  component: Paragraph,
};

export const paragraph = () => (
  <Paragraph>Listen the music with friends right now!</Paragraph>
);

export const paragraphBlue = () => <Paragraph grayBlue>name </Paragraph>;

export const paragraphWhite = () => <Paragraph normal>lul </Paragraph>;

export const paragraphBlack = () => <Paragraph black>lul </Paragraph>;
