import styled, { css } from "styled-components";
import { theme } from "theme/mainTheme";

const ButtonIcon = styled.button`
  display: inline-block;
  padding: 0;
  width: 25px;
  height: 25px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  border: none;
  border-radius: 50px;
  background-color: ${() => theme.grayBlue};
  cursor: pointer;

  ${({ reversed }) =>
    reversed &&
    css`
      transform: rotateY(180deg);
    `}
`;

export default ButtonIcon;
