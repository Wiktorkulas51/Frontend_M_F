import styled from "styled-components";
import { theme } from "../../../theme/mainTheme";

const Input = styled.input`
  color: white;
  background-color: #000;
  width: 370px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  &::placeholder {
    font-family: ${() => theme.family};
    text-align: center;
  }
`;

export default Input;
