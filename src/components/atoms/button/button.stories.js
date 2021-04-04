import React from "react";

import Button from "./Button";

export default {
  title: "Components/atoms/buttons/Button",
  component: Button,
};

export const primary = () => <Button>Join room</Button>;

export const second = () => <Button second>Join room</Button>;
