import styled from "styled-components";
import { theme } from "theme/mainTheme";

const ButtonIcon = styled.button`
  width: 70%;
  height: 50px;
  background-color: #000;
  color: white;
  font-family: ${() => theme.family}, sans-serif;
  border-radius: 10px;
`;

export default ButtonIcon;
