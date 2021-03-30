import styled, { css } from "styled-components";
import { theme } from "../../../theme/mainTheme";

const Button = styled.button`
  background-color: ${() => theme.black};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-decoration: none;
  padding: 0;
  width: 120px;
  height: 30px;
  border: none;
  font-size: ${() => theme.fontSize.xxs};
  z-index: 1000;

  &::before {
    content: "";
    position: absolute;
    left: ${({ second }) => (second ? "115px" : "0px")};
    top: 0px;
    width: 5px;
    height: 30px;
    background-color: ${() => theme.grayOrange};
    z-index: -1;
  }

  &:hover::before {
    transition: all 0.4s ease;
    width: 100%;
    ${({ second }) =>
      second &&
      css`
        & {
          left: 0px;
        }
      `}
  }
`;

export default Button;
