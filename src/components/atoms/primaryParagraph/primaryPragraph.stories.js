import React from "react";

import primaryParagraph from "./primaryParagraph";

export default {
  title: "Components/paragraph",
  component: primaryParagraph,
};

export const prmiaryParagraph = () => (
  <primaryParagraph>Listen the music with friends right now!</primaryParagraph>
);

export const secondaryParagraph = () => (
  <primaryParagraph secondary>for free</primaryParagraph>
);
