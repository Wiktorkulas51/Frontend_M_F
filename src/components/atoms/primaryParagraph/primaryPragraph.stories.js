import React from "react";

import PrimaryParagraph from "./primaryParagraph";

export default {
  title: "Components/atoms/primaryParagraph",
  component: PrimaryParagraph,
};

export const prmiaryParagraph = () => (
  <PrimaryParagraph>Listen the music with friends right now!</PrimaryParagraph>
);

export const secondaryParagraph = () => (
  <PrimaryParagraph secondary>for free</PrimaryParagraph>
);
