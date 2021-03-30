import styled, { css } from "styled-components";
import { theme } from "../../../theme/mainTheme";
import magniFire from "../../../assets/magnifire.svg";

const Input = styled.input`
  color: #ffffff;
  background-color: #000;
  width: 370px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  ${({ icon }) =>
    icon &&
    css`
      background-image: url(${magniFire});
      background-size: 15px;
      background-position: 300px 50%;
      background-repeat: no-repeat;
      fill: white;
    `}

  &::placeholder {
    font-family: ${() => theme.family};
    text-align: center;
  }
`;

export default Input;
